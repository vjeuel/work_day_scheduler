// Variables
var containerCl = $(".container");
var sectionTag = $("section");
var hourCl = $(".hour");
var timeBlockCl = $(".time-block");
var inputTaskCl = $(".input-task");
var saveTaskBt = $(".save-task")

// Variables of Arrays
var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];


// Executes when the DOM is fully loaded
$(document).ready(function () {
   // Date on top of page
   $("#currentDay").append(moment().format("MMMM Do YYYY"));


   for (let i = 0; i < timeArr.length; i++) {
      containerCl.append(mainTag);
   }

  for(i = 0; i < timeArr.length; i++) {
    hourCl.append('<div id="div">' + timeArr[i] + '</div>');
  }


});
