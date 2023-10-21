import { INote } from '../types';


export const validateNewNote = (notes: INote[], newNote: INote) => {
  let isFree = true
  console.log(notes, newNote)
  const newNoteTime = [parseFloat(newNote.time.from.replace(':', '.')), parseFloat(newNote.time.to.replace(':', '.'))]
  notes
    .map(el => [parseFloat(el.time.from.replace(':','.')), parseFloat(el.time.to.replace(':','.'))])
    .forEach(el => {
      if(el[0] < newNoteTime[0]) {
        if(el[1] > newNoteTime[0]) isFree = false
      }
      else {
        if(el[0] < newNoteTime[1]) isFree = false
      }
    })
  return isFree
}

// export const validateExistedNote = (notes: INote[], existedNote: INote) => {
//   let canUpdate = true
//   const newNoteTime = [parseFloat(existedNote.time.from.replace(':', '.')), parseFloat(existedNote.time.to.replace(':', '.'))]
//   notes
//     .map(el => [parseFloat(el.time.from.replace(':','.')), parseFloat(el.time.to.replace(':','.'))])
//     .forEach(el => {

//     })
// }