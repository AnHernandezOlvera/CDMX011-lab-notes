import React, { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../../firebase/Auth.js";

import postit from "../../images/post-it.png";
import { useHistory } from "react-router-dom";


const Login = () => {

  const history = useHistory();
  
  const initialInputs = {
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(initialInputs);

  const [emailRequiredMessage, setEmailRequiredMessage ] = useState('');
  const [passwordRequiredMessage, setPasswordRequiredMessage ] = useState('');

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    const newObject = { ...inputs, [id]: value };
    setInputs(newObject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(inputs.email, inputs.password).then((user) =>
      history.push("/notes")
    );
    const {email, password } = e.target.elements;
    !email.value ? setEmailRequiredMessage('el correo es requerido') : setEmailRequiredMessage('') ;
    !password.value  ? setPasswordRequiredMessage('la contraseña es requerida') : setPasswordRequiredMessage('') ;
  };

  

  const handleGoogleAuth = () => {
    signInWithGoogle().then(() => {
      history.push("/notes");
    });
  };

  return (
    <div>
      <img src={postit} alt="post-it" />
      <h1 className="app-name">LABNOTES</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__header">Iniciar sesión</h3>
        <label htmlFor="email">Correo</label>
        <input
          onChange={handleOnChange}
          id="email"
          type="email"
          value={inputs.email}
          name="email"
          placeholder="Ingresa tu Email"
          className="form__input"
        ></input>
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={handleOnChange}
          id="password"
          type="password"
          value={inputs.password}
          name="password"
          placeholder="Ingresa tu contraseña"
          className="form__input"
        ></input>
        <button className="form__button" type="submit">Ingresar</button>
      </form>
      <button onClick={handleGoogleAuth} className="button">
        Continuar con google
      </button>
      <p>{emailRequiredMessage}</p>
      <p>{passwordRequiredMessage}</p>    
    </div>
  );
};

export default Login;
