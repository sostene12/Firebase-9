import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNzXo2p4KtNSbApZu2vk3R2z8SI1zlm9I",
  authDomain: "fir-9-study-b0c64.firebaseapp.com",
  projectId: "fir-9-study-b0c64",
  storageBucket: "fir-9-study-b0c64.appspot.com",
  messagingSenderId: "744776062864",
  appId: "1:744776062864:web:fbb33b0226a77d070d0515",
};

// init firebase app
initializeApp(firebaseConfig);

// init serveices
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// queries
const q = query(colRef, orderBy("createdAt"));

//  real time collection data
onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp(),
  }).then(() => {
    addBookForm.reset();
  });
});

// deleting document
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

// get a single document
const docRef = doc(db, "books", "ZUAN0aygZuxMj6s74uL1");
onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// updating a document
const updateBookForm = document.querySelector(".update");
updateBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const update = doc(db, "books", updateBookForm.id.value);
  updateDoc(update, {
    title: "Citizen's wishes to the Leader",
  }).then(() => {
    updateBookForm.reset();
  });
});
