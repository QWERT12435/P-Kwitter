var firebaseConfig = {
    apiKey: "AIzaSyC9ibOcwNWvKsGO1AZZqBSGV62Qf5Lyh48",
    authDomain: "kwitter-34c83.firebaseapp.com",
    databaseURL: "https://kwitter-34c83-default-rtdb.firebaseio.com",
    projectId: "kwitter-34c83",
    storageBucket: "kwitter-34c83.appspot.com",
    messagingSenderId: "518103856539",
    appId: "1:518103856539:web:f6dca217711a2229c2dd3e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}