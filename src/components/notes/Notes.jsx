import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";

import Modal from "./Modal";
import NoteTemplate from "./NoteTemplate";

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      await db.collection("notes").onSnapshot((snap) => {
        const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotes(data);
      });
    };
    getNotes();
  }, []);


  const userEmail = user.email;
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <h1 className="app-name">LABNOTES</h1>
      <p className="usser-email">{userEmail}</p>
      <button className="button__add-note" onClick={openModal}>
        +
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <section className="section__notes">
        {notes.length !== 0 ? (
          notes.map((note) => <NoteTemplate note={note} key={note.id} />)
        ) : (
          <span>No hay notas</span>
        )}
      </section>
    </div>
  );
};

export default Notes;
