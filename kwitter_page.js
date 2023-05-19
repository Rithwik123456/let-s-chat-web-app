const firebaseConfig = {
    apiKey: "AIzaSyD8D9-Tk1IxVEsDz7s3iwhTXxQJHZKWseM",
    authDomain: "let-s-chat-web-app-a7a57.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-a7a57-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-a7a57",
    storageBucket: "let-s-chat-web-app-a7a57.appspot.com",
    messagingSenderId: "120186280130",
    appId: "1:120186280130:web:a2e504c7940b0b47d7835b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logOut(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location="index.html";
}

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("username");

function send(){
msg=document.getElementById("message").value ;
firebase.database().ref(room_name).push({
    username:user_name,
    message:msg,
    like:0
});
document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
