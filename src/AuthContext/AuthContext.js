import { 
  createContext, 
  useContext,
  useState,
  useEffect 
} from "react";

/*
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/Auth';
*/

import { auth } from "../Firebase/Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

const [user, setUser] = useState();

const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword( email, password);
};

 const signIn = (email, password) =>  {
  return auth.signInWithEmailAndPassword(email, password);
 }

const logout = () => {
    return auth.signOut()
}

useEffect(() => {
  
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    console.log(currentUser);
    setUser(currentUser);
  });
  return () => {
    unsubscribe();
  };
}, []);

return (
  <UserContext.Provider value={{ createUser, user, logout, signIn }}>
    {children}
  </UserContext.Provider>
);
};

export const UserAuth = () => {
return useContext(UserContext);
};
