import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// import { getAuth } from "firebase/auth";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDJPYO9Qo6ORoLV4E9ThEaflElXYQqIpcQ",
    authDomain: "bilin-346803.firebaseapp.com",
    projectId: "bilin-346803",
    storageBucket: "bilin-346803.appspot.com",
    messagingSenderId: "120490219952",
    appId: "1:120490219952:web:97099f3306886b175e1e75",
    measurementId: "G-90MCYRQP2X"
});

const db = getFirestore(firebaseApp);
const eventsRef = collection(db, 'events')

// will automatically scan for any added events and get its data
function getAllEvents(db, eventsRef) {
    const unsub = onSnapshot(eventsRef, (snapshot) => {
        let events = []

        snapshot.docs.forEach((doc) => {
            events.push({ ...doc.data(), id: doc.id })
        })
        console.log(events)
    })
}
getAllEvents(db, eventsRef)
