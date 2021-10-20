import { db } from "./firebase-config";

export const createNote = (title, text) => {
    db.collection('notes').doc().set({
      title,
      text,
    })
      .then(() => {
        console.log('nota creada');
      })
      .catch((error) => {
        console.error('No se ha creado la nota', error);
      });
  };
  export const getAllNotes = (callback) => {
    db.collection('notes').onSnapshot(callback);
  };