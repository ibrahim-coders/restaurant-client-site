import { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  // Create User
  const creactUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In
  const sigin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    const user = auth.currentUser;
    if (user) {
      return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
    } else {
      return Promise.reject(new Error('No user is currently logged in'));
    }
  };
  useEffect(() => {
    const unsubscript = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };

        axiosPublic
          .post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
            }
          })
          .catch(err => {
            console.error('Error fetching token:', err);
          });
      } else {
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });

    return () => unsubscript();
  }, [axiosPublic]);

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
