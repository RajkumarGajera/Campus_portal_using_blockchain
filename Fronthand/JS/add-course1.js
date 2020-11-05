  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBTLp-pEmlP2D3MWi6tXmk2XTGRE1KPpeU",
    authDomain: "project-be9a1.firebaseapp.com",
    databaseURL: "https://project-be9a1.firebaseio.com",
    projectId: "project-be9a1",
    storageBucket: "project-be9a1.appspot.com",
    messagingSenderId: "114725826380",
    appId: "1:114725826380:web:062dec1f61e83b2ffde9e9",
    measurementId: "G-LRW26B83XM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

 //add couurse
  document.getElementById("addCourseForm").addEventListener("submit", (e)=>{
    alert("Data submitted");
    debugger
    var id = document.getElementById("id-no").value;
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var email = document.getElementById("emails").value;
    var collage = document.getElementById("collages").value;
    var course = document.getElementById("courses").value;
    var branch = document.getElementById("branches").value;
    var semester= document.getElementById("noOfSemesters").value;
    var credits = document.getElementById("credits").value;
    var sgpa = document.getElementById("sgpa-input").value;
    var cgpa = document.getElementById("cgpa-input").value;

    debugger
    e.preventDefault();
    createModule(id, firstname, lastname, email, collage, course, branch, semester, credits ,sgpa ,cgpa);
  });

//   document.getElementById("addModuleModalBtn").onclick((e)=>{
//     alert("click");
// });

function myFunction() {
    alert("Data submited");
}

// function addModule(){
//     alert("click");
// }


  function createModule(id, firstname, lastname, email, collage, course, branch, semester, credits ,sgpa ,cgpa){
    debugger
    var module = {
        id:id, 
        firstname:firstname,
        lastname:lastname, 
        email:email, 
        collage:collage, 
        course:course, 
        branch:branch, 
        semester:semester, 
        credits:credits,
        sgpa:sgpa,
        cgpa:cgpa
    }

    // const dbRef = firebase.database().ref();
    // const modulesRef = dbRef.child('module');
    // let db = firebase.firestore().collection("modules/");
    // firebase.database().ref
    debugger

    var dataRef = firebase.database().ref('module/'+ module.id).set(module);

    debugger
    // db.add(module).then(()=>{
    //     debugger
    //     alert("successfully added!");
    // });
  }

  function getModules(){
      debugger
    var dataRef = firebase.database().ref('module/'+ module.id).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            debugger
          var childSnapshot = childSnapshot.val().id;
        });
    });
  }