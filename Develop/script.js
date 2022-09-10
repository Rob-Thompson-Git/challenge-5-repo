$(document).ready(function() {
    $('#top-date').text(moment().format("dddd, MMMM Do, YYYY"));
}) 

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

//Trying to keep data in textarea box after
//     if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {

//   } else {
//     // Creates element based on tag entered by user
//     var tag = document.createElement(tagName);
  
//     // Adds text content to created tag
//     tag.textContent = "This was made via prompts. It's a " + tagName + ".";
    
//     // Appends tag as child of document body
//     document.body.appendChild(tag);
//   }

