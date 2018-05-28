import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, displayName = null, photoURL = null) => {
  const userData = {
    username,
    email,
  };
  if (displayName) {
    userData.displayName = displayName;
  }
  if (photoURL) {
    userData.photoURL = photoURL;
  }
  return db.ref(`users/${id}`).set(userData);
}

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...
