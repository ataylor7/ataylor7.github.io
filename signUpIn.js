var modeButton = document.querySelector(".loginBtn");
modeButton.addEventListener("click", login);
var modeButton = document.querySelector(".logoutBtn");
modeButton.addEventListener("click", logout);


const firebaseConfig = {
    apiKey: "AIzaSyA7AGX0dLZ2XaCqzqVL0SzCdcq0cLPdUgU",
  authDomain: "catassist-93657.firebaseapp.com",
  databaseURL: "https://catassist-93657-default-rtdb.firebaseio.com",
  projectId: "catassist-93657",
  storageBucket: "catassist-93657.appspot.com",
  messagingSenderId: "1054536966866",
  appId: "1:1054536966866:web:9a387c4aaba10f87f5030b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

import firebase from "firebase/app";


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  
