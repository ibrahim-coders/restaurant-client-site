import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // creactUeer
  const creactUser = (email, pasword) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pasword);
  };
  //sigin
  const sigin = (email, pasword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pasword);
  };
  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //updateProfile
  const updateUserProfile = (name, photo) => {
    updateProfile(auth, currentUser, {
      displayName: name,
      photourl: photo,
    });
  };
  useEffect(() => {
    const unsubscript = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscript();
    };
  });
  const authInfo = {
    user,
    loading,
    creactUser,
    sigin,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
