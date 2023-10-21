import { ObjectId } from "mongodb";
import clientPromise from "./index";
import {validateNewNote} from '../../utilities/validateNote'

export const getNotesByMonth = async (month, year) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    //const id = new ObjectId("64a3effff65f7d68c13164a9")
    const notes = await db
          .collection("notes")
          .find({month, year})
          .toArray();
      return {notes}
  } catch (e) {
      console.error(e);
  }
};

export const getNotesByDay = async ( day, month, year) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    const notes = await db
          .collection("notes")
          .find({day,month, year})
          .toArray();
      return {notes}
  } catch (e) {
      console.error(e);
  }
};

export const addNote = async (data) => {
  const client = await clientPromise;
  const db = client.db("notes_db");
  const existedNotes = await db
    .collection("notes")
    .find({
      year: data.year,
      day: data.day,
      month: data.month,
      master: data.master
    })
    .toArray();
  const canAddNote = validateNewNote(existedNotes, data)
  if(canAddNote){
    await db
    .collection('notes')
    .insertOne({
      year: data.year,
      day: data.day,
      month: data.month,
      time: data.time,
      master: data.master,
      content: data.content
    })
    const notes = await db
    .collection("notes")
    .find({
      year: data.year,
      day: data.day,
      month: data.month,
    })
    .toArray();
    return {notes}
  }
  else return {validateError:{message: 'Заметка на это время уже существует!'}}
}

export const removeNote = async (id, date) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    const noteId = new ObjectId(id)
    await db
      .collection("notes")
      .deleteOne({_id: noteId})
    const notes = await db
      .collection("notes")
      .find({
        year: date.year,
        day: date.day,
        month: date.month,
      })
      .toArray();
    return {notes}
  } catch (e) {
      console.error(e);
  }
};

export const updateNote = async (data) => {
    const client = await clientPromise;
    const db = client.db("notes_db");
    const noteId = new ObjectId(data._id)
    const existedNotes = await db
    .collection("notes")
    .find({
      year: data.year,
      day: data.day,
      month: data.month,
      master: data.master
    })
    .toArray()
    const canUpdate =  validateNewNote(existedNotes.filter(el => !noteId.equals(el._id)), data)
    console.log('CAN?: ', canUpdate)
    if(canUpdate){
      await db
      .collection("notes")
      .updateOne({_id: noteId}, {
        $set:{
          time: data.time,
          master: data.master,
          content: data.content,
        }
      },
      { upsert: true })
    const notes = await db
      .collection("notes")
      .find({
        year: data.year,
        day: data.day,
        month: data.month,
      })
      .toArray();
    return {notes}
    }
    else return {validateError:{message: 'Заметка на это время уже существует!'}}
};

export const findNotes = async (str) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    const notes = await db
      .collection("notes")
      .find({"content" : {$regex : str}})
      .toArray();
    return {notes}
  } catch (e) {
      console.error(e);
  }
};