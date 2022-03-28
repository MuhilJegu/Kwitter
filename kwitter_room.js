

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp4gYj5tHIo9oPbFzy-6mNsbH5j3t7HBI",
  authDomain: "kwitter-81c2a.firebaseapp.com",
  databaseURL: "https://kwitter-81c2a-default-rtdb.firebaseio.com",
  projectId: "kwitter-81c2a",
  storageBucket: "kwitter-81c2a.appspot.com",
  messagingSenderId: "472092068522",
  appId: "1:472092068522:web:6a7dcff43ae65bdcb31ed3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() 
{ room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); 
window.location = "kwitter_page.html"; }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"<hr>";
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
