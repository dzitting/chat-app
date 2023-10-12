import { db } from "../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
async function searchIfUserExists(name) {
    let user = false;
  const usersQuery = collection(db, "users");
  const q = query(usersQuery, where("name", "==", name));
  if (q) {
    await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        user = true;
      });
    });
  }
  return user;
}


export {searchIfUserExists};