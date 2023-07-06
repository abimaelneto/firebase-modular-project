import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase.config";

export async function list() {
  const querySnapshot = await getDocs(collection(db, "toDoItems"));
  const localItems = [];
  querySnapshot.forEach((doc) => {
    localItems.push({ ...doc.data(), id: doc.id });
  });
  return localItems;
}

export async function detail(itemId) {
  const docSnapshot = await getDoc(doc(db, "toDoItems", itemId));
  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function create(payload) {
  const docRef = await addDoc(collection(db, "toDoItems"), payload);
  return docRef;
}
