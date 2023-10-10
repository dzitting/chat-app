import React, {useState} from "react";
import SignUpPage from "../components/SignUpPage";
import { db } from "../data/database";
import { collection} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export default function SignUp() {
    const generateNewId = () => {
        const num = Math.floor(Math.random() * 1000);
        return num;
    }
    const [isLoading, setIsLoading] = useState(false);
    const [newUser, setNewUser] = useState({
    id: generateNewId(),
    name: "",
    email: "",
    password: ""
  });

  const users = collection(db, "users");


  const handleChange = async (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setNewUser({ ...newUser, name: e.target.value });
    }
    if (e.target.name === "email") {
      setNewUser({ ...newUser, email: e.target.value });
    }
    if (e.target.name === "password") {
      setNewUser({ ...newUser, password: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(newUser.name !== "" || newUser.email !== ''){
      await setDoc(doc(db, 'users', newUser.name.toLowerCase().split(' ').join('')), newUser);
    }
    setNewUser({
      id: generateNewId(),
      name: "",
      email: "",
      password: "",
    });
    window.location.href = '/login';
  };

  return (
    <SignUpPage
      newUser={newUser}
      users={users}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}
