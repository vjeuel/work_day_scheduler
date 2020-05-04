// Variables
var containerCl = $(".container")
var inputTag = $("input");
var time = moment().format("H");



// Variables of Arrays
var timeArr = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
var hourArr = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

// Executes when the DOM is fully loaded
// function storeTime() {
   //    localStorage.meetingTime = $("#schedule").val();
   // };
   
   $(document).ready(function () {
      
      $.each(timeArr, function (index, value) {
         containerCl.append('<section class="row">\
                        <div class="col-2 hour">' + value + '</div>\
                        <div class="col-8 time-block">\
                        <input class="input-task form-control form-control-lg" data-hour="' + value + '" type="text" placeholder="now what?"/></div>\
                        <div class="col-2"><button class="btn saveBtn save-task" type="button">save</button></div></section>');
      
                        
         inputTag.attr("data-hour", hourArr)
      console.log(inputTag);
   });
   
                     
   
   
   //data-hour Array to be inserted later -  ' + hourArr[i] + '

   // // Date on top of page
   // $("#currentDay").append(moment().format("MMMM Do YYYY"));
   
   // // Input placeholder
   // inputTag.attr("placeholder", "now what?");
   
   // inputTaskCl.each(block => {
   //    var timeOfDay = $("input")[block].timeOfDay;
   //    var blockTime = parseInt($("." + timeOfDay).attr("data-hour"));
      
   //    var value = localStorage.getItem(timeOfDay);
      
   //    $("." + timeOfDay).val(value);
   //    if (blockTime < time) {
   //       $("." + timeOfDay).addClass("past");
   //    } else if (blockTime === time) {
   //       $("." + timeOfDay).addClass("current");
   //    } else {
   //       $("." + timeOfDay).addClass("future");
   //    };
      
      
   //    console.log("test");
   // });
   // // Save button
   // $("button").each(block => {
   //    $("button")[block].onclick = function () {
   //       var input = this.timeOfDay.substring(0, this.timeOfDay.length - 1);
   //       localStorage.setItem(input, $(saveTaskBt + input).val());
   //    };
   // });
});





//    for (let i = 0; i < timeArr.length; i++) {
//       containerCl.append(mainTag);
//    }

//   for(i = 0; i < timeArr.length; i++) {
//     hourCl.append('<div id="div">' + timeArr[i] + '</>');
//   };