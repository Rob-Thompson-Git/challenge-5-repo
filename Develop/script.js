//Gets current date at top of page
$(document).ready(function() {
    $('#top-date').text(moment().format("dddd, MMMM Do, YYYY"));
}); 


// Trying to create currentTime variable to compare to past, present, future
let currentHour = moment().format("HH");
$(".hour").each(function () {
    let blockHour = parseInt($(this).attr("data-time"));
    
    // console.log(timeBlockHour);
    if (blockHour < currentHour) {
        $(this).siblings("textarea").addClass("past");
        $(this).siblings("textarea").removeClass("present");
    } else if (blockHour > currentHour) {
        $(this).siblings("textarea").addClass("future");
        $(this).siblings("textarea").removeClass("past");
    } else {
        $(this).siblings("textarea").addClass("present");
        $(this).siblings("textarea").removeClass("future");
    }
});



// Trying to save userInput into local storage log when saveBtn is clicked
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.dataset.time)
    var hourClickedToSave = event.target.dataset.time;
    var formattedIdFinder = "#text-area-hour-" + hourClickedToSave; // =>"#text-area-hour-9"
    var textAreaInputValue = $(formattedIdFinder).val();
    console.log(textAreaInputValue);
    
}); 



