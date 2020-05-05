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

      function getItemFrom(index) {
         if (localStorage.getItem(index)) {
            return localStorage.getItem(index)
         } else {
            return 'what now?'
         }
      }

      containerCl.append('<section class="row">\
      <div class="col-2 hour">' + timeArr[index] + '</div>\
      <div class="col-10 time-block">\
      <input value="' + getItemFrom(hourArr[index]) + '" id="input-data" name="schedule" class="input-task form-control form-control-lg" data-hour="' + hourArr[index] + '" placeholder="what now?"/>\
      <button id="' + hourArr[index] + '" class="btn saveBtn save-task" type="button"><i class="fas fa-save"></i></button></div></section>');
   
   });

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
      });
   }
   colorChange();



   $("button").on("click", function () {
      var buttonClick = this.id //parseInt($(this).id);
      var textAreaValue = $(this).siblings('.input-task').val()
      localStorage.setItem(buttonClick, textAreaValue)
      
      console.log(textAreaValue);
      
      console.log(buttonClick);
      



   
   });


   
   
});