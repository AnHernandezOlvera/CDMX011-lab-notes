import { googleAuthProvider, auth } from "./firebase-config";

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export const createUser = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);