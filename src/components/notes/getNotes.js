import { getAllNotes } from "../../firebase/firestore";

export const getNotes = async () => {
    const allNotes = [];
  await getAllNotes((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const note = change.doc.data();
        note.id = change.doc.id;
        allNotes.push(note)
        // const card = cardTemplete(note);
        // cardsContainer.appendChild(card);
      }
      if (change.type === "modified") {
        const note = change.doc.data();
        note.id = change.doc.id;
        // const cardId = `${change.doc.id}`;
        // const card = cardsContainer.querySelector(`[id="${cardId}"]`);
        // const song = card.querySelector('.song-sentence');
        // const likes = card.querySelector('.fa-heart');
        // song.innerHTML = note.song;
        // likes.innerHTML = note.likes.length;
      }
      if (change.type === "removed") {
        // const cardId = `${change.doc.id}`;
        // const card = cardsContainer.querySelector(`[id="${cardId}"]`);
        //cardsContainer.removeChild(card);
      }
    });
  });
  return allNotes;
};
