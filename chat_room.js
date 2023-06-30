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

  firebase.initializeApp(firebaseConfig);


  function getData() 
  {firebase.database().ref("/").on('value', function(snapshot)
   {document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot)
    {childKey  = childSnapshot.key;
    Room_names = childKey;
        
      console.log("The room name is" + Room_names);
      row= "<div class'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML = row;
        
        });});}
  getData();




  function addRoom(){
    room_name = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
      purpose: "addindg room name"
      
    })
    localStorage.setItem("room_name", room_name);
    
    }

    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="index.html" 
    }

    