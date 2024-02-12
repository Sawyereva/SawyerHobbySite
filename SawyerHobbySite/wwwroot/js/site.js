// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$("#calculateButton").click( function(){
    // Get the values from the input fields
    hours = $("#intHours").val();

    // Check if values are valid numbers
    if (isNaN(hours)) {
        alert("Please enter valid numbers for hours and pay rate.");
        return;
    }
    if (hours <=0) {
        alert("Please enter positive number");
        return;
    }
    // Calculate the total pay
    totalPay = hours * 25;

    // Display the result in a designated element
    $("#totalPay").val("$" + totalPay); 
});