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