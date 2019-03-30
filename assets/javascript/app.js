// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9NkcqUfr1uS6oAUYba8RKvUOJ5POJx88",
    authDomain: "first-project-d1d3a.firebaseapp.com",
    databaseURL: "https://first-project-d1d3a.firebaseio.com",
    projectId: "first-project-d1d3a",
    storageBucket: "first-project-d1d3a.appspot.com",
    messagingSenderId: "621902807967"
};
firebase.initializeApp(config);

// Declare Variables
var database = firebase.database();
var empName = "";
var empRole = "";
var startDate = "";
var monthlyRate = "";

// Listen for clicks on submit button
$('#inputButton').on("click", function(event) {
  event.preventDefault();

  // Get text input from input fields
  empName = $('#nameInput').val().trim();
  empRole =  $('#roleInput').val().trim();
  startDate =  $('#dateInput').val().trim();
  monthlyRate =  $('#rateInput').val().trim();
  
  // Push that data to firebase as a new child
  database.ref().push({
    empName: empName,
    empRole: empRole,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

database.ref().on("child_added", function(childSnapshot) {
  
  console.log(childSnapshot.val().empName)
  console.log(childSnapshot.val().empRole)
  console.log(childSnapshot.val().startDate)
  console.log(childSnapshot.val().monthlyRate)
  console.log(childSnapshot.val().dateAdded)
  
})