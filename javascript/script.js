// Variables
var containerCl = $(".container")
var time = moment().format("H");

// Variables of Arrays
var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var hourArr = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
// Merging 2 arrays to create the time and an ID for each input and button
var timeHourArr = ($.merge(timeArr, hourArr));

// Executes when the DOM is fully loaded
$(document).ready(function () {
   $("#currentDay").append(moment().format('MMMM Do YYYY -  ha'));
   
   $.each(timeArr, function (index, value) {
      if (hourArr[index] === undefined) {
         return false;
      }
      containerCl.append('<section class="row">\
      <div class="col-2 hour">' + timeArr[index] + '</div>\
      <div class="col-9 time-block">\
      <input id="input-data" class="input-task form-control form-control-lg" data-hour="' + hourArr[index] + '" placeholder="what now?"/></div>\
                     <div class="col-1"><button id="' + hourArr[index] + '" class="btn saveBtn save-task" type="button"><i class="fas fa-save"></i></button></div></section>');
   });
   
   time = 14;
   console.log("Current Time: " + time);



   // colorChange
   function colorChange() {
      $("input").each(function () {
         
         var timeSch = parseInt($(this).attr("data-hour"));
         
         if (time > timeSch) {
            $(this).addClass("past");
         } else if (time < timeSch) {
            $(this).addClass("future");
         } else {
            $(this).addClass("present");
         }
         console.log(time);
      });
   }
   colorChange();
   
   var todo = localStorage.getItem($("input"));

   $("button").on("click", function (e) {

      localStorage.setItem("eat","lunch");
   });






                  
});