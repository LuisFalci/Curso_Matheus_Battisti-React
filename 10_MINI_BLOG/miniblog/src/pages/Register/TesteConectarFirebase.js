import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

const TesteConectarFirebase = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };
    getUsers();
  }, []);

  return <div>TesteConectarFirebase</div>;
};

export default TesteConectarFirebase;
