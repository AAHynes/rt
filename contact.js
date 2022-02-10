const firebaseConfig = {
  apiKey: "AIzaSyBKdM1t2_WnhInddjqKwjlCCDysX2gIAW8",
  authDomain: "sean-38769.firebaseapp.com",
  databaseURL: "https://sean-38769-default-rtdb.firebaseio.com",
  projectId: "sean-38769",
  storageBucket: "sean-38769.appspot.com",
  messagingSenderId: "641232445379",
  appId: "1:641232445379:web:39a1390e8318562e9a6776",
  measurementId: "G-50H3W6K1WQ"
};





firebase.initializeApp(firebaseConfig);



const myDB = firebase.database().ref("/contacts");




// Tell JavaScript to call saveContacts when SUBMIT button is clicked



const button = document.getElementById("submit");

button.addEventListener("click", insertRecord);

//sets the variable btn(button) to the button id

// uses the listner for a click and then run teh function





//}



function insertRecord() {

alert("SUBMIT clicked!!!");

const email = document.getElementById("email");

const emailValue = email.value;

// alert(emailFieldValue);

// reset form

email.value = ""; // clear the field

email.focus(); // set the focus

// code to save the data to Firebase GOES HERE!

const fN = document.getElementById("fName");

// sets the const fN to the value in fName input field

const fNvalue = fN.value;

fN.value = "";

fN.focus();
  // resets the input field to empty

const sN = document.getElementById("sName");

const sNValue = sN.value;

sN.value = "";

sN.focus();

const age = document.getElementById("age");

const ageValue = age.value;

age.value = ""; // clear the field

age.focus();

const dob = document.getElementById("dob");

const dobValue = dob.value;

dob.value = "";

dob.focus();

const data = myDB.push();

data.set({email: emailValue, fName:fNvalue, sName: sNValue, age: ageValue, dob: dobValue});

}