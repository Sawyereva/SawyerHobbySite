// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$("#calculateButton").click( function(){
    // Get the values from the input fields
    var hours = parseFloat($("#intHours").val());
    var payRate = 25

    // Check if values are valid numbers
    if (isNaN(hours) || isNaN(payRate)) {
        alert("Please enter valid numbers for hours and pay rate.");
        return;
    }
    if (hours <=0) {
        alert("Please enter valid number for hours and pay rate.");
        return;
    }
    // Calculate the total pay
    var totalPay = hours * payRate;

    // Display the result in a designated element
    $("#totalPay").text(totalPay); 
});