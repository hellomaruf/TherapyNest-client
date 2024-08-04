import { createContext, useEffect, useState } from "react";
import { auth } from "./../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContaxt = createContext(null);
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Create new user by email and password----------------->
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user---------------------->
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user Profile------------------->
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user logout-------------------------->
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google login --------------------->
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Added observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user----------->", currentUser);
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    createNewUser,
    signInUser,
    updateUserProfile,
    logout,
    signInWithGoogle,
    loading,
    user,
  };
  return (
    <AuthContaxt.Provider value={authInfo}>{children}</AuthContaxt.Provider>
  );
}

export default AuthProvider;
