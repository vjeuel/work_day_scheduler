// Variables
var containerCl = $(".container")
var inputTag = $("input");
var time = moment().format("H");

// Variables of Arrays
var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var hourArr = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

// Executes when the DOM is fully loaded
$(document).ready(function () {
   $("#currentDay").append(moment().format('MMMM Do YYYY -  ha'));
      
   $.each(timeArr, function (index, value) {
      containerCl.append('<section class="row">\
                     <div class="col-2 hour">' + value + '</div>\
                     <div class="col-8 time-block">\
                     <input id="input-data" class="input-task form-control form-control-lg" data-hour="' + value + '" type="text" placeholder="what now?"/></div>\
                     <div class="col-2"><button id="' + value + '" class="btn saveBtn save-task" type="button">save</button></div></section>');   
   });
                  
});