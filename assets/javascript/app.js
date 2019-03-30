var config = {
    apiKey: "AIzaSyD9NkcqUfr1uS6oAUYba8RKvUOJ5POJx88",
    authDomain: "first-project-d1d3a.firebaseapp.com",
    databaseURL: "https://first-project-d1d3a.firebaseio.com",
    projectId: "first-project-d1d3a",
    storageBucket: "first-project-d1d3a.appspot.com",
    messagingSenderId: "621902807967"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var empName = "";
var empRole = "";
var startDate = "";
var monthlyRate = "";

$('#inputButton').on("click", function(event) {
    event.preventDefault();



empName = $('#nameInput').val().trim();
empRole =  $('#roleInput').val().trim();
startDate =  $('#dateInput').val().trim();
monthlyRate =  $('#rateInput').val().trim();

    database.ref().push({
    empName: empName,
    empRole: empRole,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});