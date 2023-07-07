import { ObjectId } from "mongodb";
import clientPromise from "./index";

export const getNotesByMonth = async (month) => {
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    //const id = new ObjectId("64a3effff65f7d68c13164a9")
    const notes = await db
          .collection("notes")
          .find({month})
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
  try {
    const client = await clientPromise;
    const db = client.db("notes_db");
    const noteId = new ObjectId(data._id)
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
  } catch (e) {
      console.error(e);
  }
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