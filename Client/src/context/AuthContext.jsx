import React, { useContext, useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup
} from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  async function logout() {
    await auth.signOut();
  }

  async function signup(name, email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => res.user)
      .then(async (data) => {
        await updateProfile(data, {
          displayName: name,
        })
      });
  }

  const googleAuth = async () => {
    await signInWithPopup(auth, googleAuthProvider)
  };

  async function login(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    googleAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
