const { sign } = require("crypto");
const { signatureExport } = require("secp256k1");

var canvas;
var score = 0;
var button;
var userName;
var submitButton;
var db;

function setup() {


    // canvas = createCanvas(400, 400);
    // canvas.parent("game");
    // button = createButton("Press Button");
    // button.mousePressed(increment);
    // button.parent("game");
    // button.position(0, height + 60);
    // userName = createInput("name");
    // userName.parent("game");
    // submitButton = createButton("Submit");
    // submitButton.mousePressed(submitScore);
    // submitButton.parent("game");
    // idInput = createInput('id');
	// idInput.parent('game');
	// firstnameInput = createInput('firstname');
	// firstnameInput.parent('game');
	// lastnameInput = createInput('lastname');
	// lastnameInput.parent('game');
	// emailInput = createInput('email');
	// emailInput.parent('game');
	// collageInput = createInput('college');
	// collageInput.parent('game');
	// courseInput = createInput('course');
	// courseInput.parent('game');
	// branchInput = createInput('branch');
	// branchInput.parent('game');
	// semesterInput = createInput('semester');
	// semesterInput.parent('game');
	// totalcreditsInput = createInput('totalcredit');
	// totalcreditsInput.parent('game');
	// sgpaInput = createInput('sgpa');
	// sgpaInput.parent('game');

	// cgpaInput = createInput('cgpa');
	// cgpaInput.parent('game');
	// submitButton = createButton('addCourse');
	// submitButton.parent('game');
	// submitButton.mousePressed(addCourseModalBtn);
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

    // Get Firebase db instance in a variable
    db = firebase.database();

    //Retrieve data
    var ref = db.ref("module");
    ref.on("value", data_retrieved, errData);
}

function data_retrieved(data) {

    //selectAll creates an array of selected elements
    var scorelisting = selectAll(".scorelisting");
    for (var i = 0; i < scorelisting.length; i++) {
        scorelisting[i].remove();
    }

    console.log(data);
    var module = data.val(); // array of data from firebase
    var keys = Object.keys(module);
    console.log(keys);

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var id = module[k].id;
		var firstname = module[k].firstname;
		var lastname = module[k].lastname;
		var email = module[k].email;
		var collage= module[k].collage;
		var course = module[k].course;
		var branch = module[k].branch;
		var semester = module[k].semester;
		var totalcredits = module[k].credits;
		var sgpa = module[k].sgpa;
		var cgpa = module[k].cgpa;

        //Create score list on html
        var li = createElement('li',id + ';  ' + firstname + '; ' + lastname + '; ' + email + '; ' + collage + '; ' + course + '; ' + branch + '; ' + semester + '; ' + totalcredits + '; ' +sgpa + '; '  +  cgpa);
        // var li = createElement('li',id);
        // var li = createElement('li',firstname);
        li.class("scorelisting");
        li.parent("orders");

        
        // console.log(content);
    
    }  
}

    console.log(id, firstname);


function errData(err) {
    console.log("Error");
    console.log(err);
}

function increment() {
    score++;
}

function addCourseModalBtn() {
   
    // Create reference to score
    var ref = db.ref("module");

    // //Creating sampe data to push to firebase
    // var data = {
    //     name: "John",
    //     score: 51
    // }

    var data = {
        id:idInput.value(),
		firstname:firstnameInput.value(),
		lastname:lastnameInput.value(),
		email:emailInput.value(),
		collage:collageInput.value(),
		course:courseInput.value(),
		branch:branchInput.value(),
		credits:totalcreditsInput.value(),
		sgpa:sgpaInput.value(),
		cgpa:cgpaInput.value()
    }
    console.log(data);

    //Pushing data to firebase
    ref.push(data);
}

// function draw() {
//     background(0);
//     textAlign(CENTER);
//     textSize(35);
//     fill(255)
//          text(score, width / 2, height / 2)
// }
