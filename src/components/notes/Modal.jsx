import React, { useState } from "react";
import { createNote } from '../../firebase/firestore';

const Modal = ({ showModal, setShowModal }) => {
  const initialInputs = {
    title: "",
    text: "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    const newObject = { ...inputs, [id]: value };
    setInputs(newObject);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(inputs.title, inputs.text)
  };
  return showModal ? (
    <div className="modal">
      <div>
        <button className="button-close" onClick={() => setShowModal((prev) => !prev)}>x</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-note">Título</label>
        <input name="title-note" id="title-note" onChange={handleOnChange}></input>
        <label htmlFor="text-note">Nota</label>
        <textarea name="text-note" id="text-note" onChange={handleOnChange} rows="10">
        </textarea>
        <button className="form__button__save" >Guardar</button>
      </form>
    </div>
  ) : null;
};

export default Modal;
