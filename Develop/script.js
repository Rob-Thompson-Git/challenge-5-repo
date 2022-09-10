$(document).ready(function() {
    $('#top-date').text(moment().format("dddd, MMMM Do, YYYY"));
}); 

// Trying to create currentTime variable to compare to past, present, future
let timeBlockHour = parseInt($(this).prop("id"));
console.log(timeBlockHour);
console.log($(this));


// Trying to save userInput into console log when saveBtn is clicked
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.dataset.time)
    var hourClickedToSave = event.target.dataset.time;
    var formattedIdFinder = "#text-area-hour-" + hourClickedToSave; // =>"#text-area-hour-9"
    var textAreaInputValue = $(formattedIdFinder).val();
    console.log(textAreaInputValue);
}); 



