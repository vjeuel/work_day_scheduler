// Variables
var containerCl = $(".container");
var sectionTag = $("section");
var hourCl = $(".hour");
var timeBlockCl = $(".time-block");
var inputTaskCl = $(".input-task");
var inputTag = $("input");
var saveTaskBt = $(".save-task")

var time = moment().format("H");

// Variables of Arrays
// var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

// Executes when the DOM is fully loaded
$(document).ready(function () {
   // Date on top of page
   $("#currentDay").append(moment().format("MMMM Do YYYY"));
   
   // Input placeholder
   inputTag.attr("placeholder", "now what?");
   
   console.log("test");
   inputTaskCl.each(function(block) {
      var timeOfDay = $("input")[block].timeOfDay;
      var blockTime = parseInt($(inputTaskCl + timeOfDay).attr("data-hour"));
      
      var value = localStorage.getItem(timeOfDay);
      
      $(inputTaskCl + timeOfDay).val(value);
      if (blockTime < time) {
         $(inputTaskCl + timeOfDay).addClass("past");
      } else if (blockTime == time) {
         $(inputTaskCl + timeOfDay).addClass("current");
      } else {
         $(inputTaskCl + timeOfDay).addClass("future");
      };
   });

   // Save button
   $("button").each(function(block) {
      $("button")[block].onclick = function () {
         var input = this.timeOfDay.substring(0, this.timeOfDay.length - 5);
         localStorage.setItem(input, $(saveTaskBt + input).val());
      };
   });
});



//    for (let i = 0; i < timeArr.length; i++) {
//       containerCl.append(mainTag);
//    }

//   for(i = 0; i < timeArr.length; i++) {
//     hourCl.append('<div id="div">' + timeArr[i] + '</div>');
//   };