// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRkcnbtjrg4RUzogZbfi78NOOhf1ar1qI",
    authDomain: "let-schatfirebase-ec41e.firebaseapp.com",
    databaseURL: "https://let-schatfirebase-ec41e-default-rtdb.firebaseio.com",
    projectId: "let-schatfirebase-ec41e",
    storageBucket: "let-schatfirebase-ec41e.appspot.com",
    messagingSenderId: "861125161697",
    appId: "1:861125161697:web:3bea5e46f8b37cbc4a7da0",
    measurementId: "G-9M4ZNHWTG4"
  };
//ADD YOUR FIREBASE LINKS HERE

firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}







