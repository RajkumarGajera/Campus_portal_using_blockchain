
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyRfKbGCVJ7aTKTrMH2O4uOiul8PxjkX4",
    authDomain: "login-923e9.firebaseapp.com",
    databaseURL: "https://login-923e9.firebaseio.com",
    projectId: "login-923e9",
    storageBucket: "login-923e9.appspot.com",
    messagingSenderId: "775002041975",
    appId: "1:775002041975:web:e99909857533fc2e316072",
    measurementId: "G-DD9T0CNB61"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
  }
 // function signIn(){
    
 //    var email = document.getElementById("email");
 //    var password = document.getElementById("password");
    
 //    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
 //    promise.catch(e => alert(e.message));

 //    alert("Signed In");
 //  }
  // function signOut(){
  //   auth.signOut();
  //   alert("Signed Out");
    
  // }
  auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;
      alert("Active User " + email);
      
      //Take user to a different or home page

      //is signed in
      
    }else{
      
      alert("No Active User");
      //no user is signed in
    }
    
    
    
  });
