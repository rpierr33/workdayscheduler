//***DISPLAY CURRENT DATE ON THE PAGE FUNCTIONALITY***

//find the date element
  var findDateEl = $( "#currentDay" );
//find correct date in the requested format
  var currentDate = moment().format('dddd [,] MMMM Do')
//append current date to the page id
  $("#currentDay").append(currentDate);



//***CONDITIONAL HIGHLIGHT FUNCTIONALITY***

var row1Time = 9;
var row2Time = 10;
var row3Time = 11;
var row4Time = 12;
var row5Time = 13;
var row6Time = 14;
var row7Time = 15;
var row8Time = 16;


var currentTimeInHours = moment().format("H")
console.log(currentTimeInHours);

//set css for row 1
if(currentTimeInHours < row1Time ) {
    console.log("time is in future");
    $("#row1col2").addClass("future");
    $("#row1col2input").addClass("future");
}
else if (currentTimeInHours > row1Time) {
    console.log("time is in the past");
    $("#row1col2").addClass("past");
    $("#row1col2input").addClass("past");
}
else if (currentTimeInHours = row1Time) {
    console.log("current time");
    $("#row1col2").addClass("present");
    $("#row1col2input").addClass("present");
}

//set css for row 2
if(currentTimeInHours < row2Time ) {
    console.log("time is in future");
    $("#row2col2").addClass("future");
    $("#row2col2input").addClass("future");
}
else if (currentTimeInHours > row2Time) {
    console.log("time is in the past");
    $("#row2col2").addClass("past");
    $("#row2col2input").addClass("past");
}
else if (currentTimeInHours = row2Time) {
    console.log("current time");
    $("#row2col2").addClass("present");
    $("#row2col2input").addClass("present");
}

//set css for row 3
if(currentTimeInHours < row3Time ) {
    console.log("time is in future");
    $("#row3col2").addClass("future");
    $("#row3col2input").addClass("future");
}
else if (currentTimeInHours > row3Time) {
    console.log("time is in the past");
    $("#row3col2").addClass("past");
    $("#row3col2input").addClass("past");
}
else if (currentTimeInHours = row3Time) {
    console.log("current time");
    $("#row3col2").addClass("present");
    $("#row3col2input").addClass("present");
}


//set css for row 4
if(currentTimeInHours < row4Time ) {
    console.log("time is in future");
    $("#row4col2").addClass("future");
    $("#row4col2input").addClass("future");
}
else if (currentTimeInHours > row4Time) {
    console.log("time is in the past");
    $("#row4col2").addClass("past");
    $("#row4col2input").addClass("past");
}
else if (currentTimeInHours = row4Time) {
    console.log("current time");
    $("#row4col2").addClass("present");
    $("#row4col2input").addClass("present");
}


//set css for row 5
if(currentTimeInHours < row5Time ) {
    console.log("time is in future");
    $("#row5col2").addClass("future");
    $("#row5col2input").addClass("future");
}
else if (currentTimeInHours > row5Time) {
    console.log("time is in the past");
    $("#row5col2").addClass("past");
    $("#row5col2input").addClass("past");
}
else if (currentTimeInHours = row5Time) {
    console.log("current time");
    $("#row5col2").addClass("present");
    $("#row5col2input").addClass("present");
}


//set css for row 6
if(currentTimeInHours < row6Time ) {
    console.log("time is in future");
    $("#row6col2").addClass("future");
    $("#row6col2input").addClass("future");
}
else if (currentTimeInHours > row6Time) {
    console.log("time is in the past");
    $("#row6col2").addClass("past");
    $("#row6col2input").addClass("past");
}
else if (currentTimeInHours = row6Time) {
    console.log("current time");
    $("#row6col2").addClass("present");
    $("#row6col2input").addClass("present");
}

//set css for row 7
if(currentTimeInHours < row7Time ) {
    console.log("time is in future");
    $("#row7col2").addClass("future");
    $("#row7col2input").addClass("future");
}
else if (currentTimeInHours > row7Time) {
    console.log("time is in the past");
    $("#row7col2").addClass("past");
    $("#row7col2input").addClass("past");
}
else if (currentTimeInHours = row7Time) {
    console.log("current time");
    $("#row7col2").addClass("present");
    $("#row7col2input").addClass("present");
}


//set css for row 8
if(currentTimeInHours < row8Time ) {
    console.log("time is in future");
    $("#row8col2").addClass("future");
    $("#row8col2input").addClass("future");
}

else if (currentTimeInHours > row8Time) {
    console.log("time is in the past");
    $("#row8col2").addClass("past");
    $("#row8col2input").addClass("past");
}
else if (currentTimeInHours = row8Time) {
    console.log("current time");
    $("#row8col2").addClass("present");
    $("#row8col2input").addClass("present");
}



//***SET ITEM AND GET ITEM FUNCTIONALITY****

      var toDoCount = 0;
      var todos = [];
      var todosRow1 = [];
      var todosRow2 = [];
      var todosRow3 = [];
      var todosRow4 = [];
      var todosRow5 = [];
      var todosRow6 = [];
      var todosRow7 = [];
      var todosRow8 = [];

  // Click on ROW 1 button and save data in localStorage
        $("#row-1").on("click", "#row1col3btn",  function(event) {
          event.preventDefault();
          // Get the to-do "value" from the textbox and store it a variable          
          var toDoTask1 = $("#row1col2input")
            .val()
            .trim()
 
          console.log(toDoTask1);  
          todosRow1.push(toDoTask1);
   
          localStorage.setItem("todoList1", JSON.stringify(todosRow1));
        });


    // Get the data from the localStorage for row #1
        $("#row-1 #row1col2input").val(JSON.parse(localStorage.getItem("todoList1")));


  // Click on ROW 2 button and save data in localStorage
        $("#row-2").on("click", "#row2col3btn", function(event) {
            event.preventDefault();
            // Get the to-do "value" from the textbox and store it a variable
            var toDoTask2 = $("#row2col2input")
              .val()
              .trim();
    
            console.log(toDoTask2);  
            todosRow2.push(toDoTask2);
    
            localStorage.setItem("todoList2", JSON.stringify(todosRow2));
          }); 
          
    // Get the data from the localStorage for row #3
        $("#row-2 #row2col2input").val(JSON.parse(localStorage.getItem("todoList2")));


      // Click on ROW 3 button and save data in localStorage
      $("#row-3").on("click", "#row3col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask3 = $("#row3col2input")
          .val()
          .trim();

        console.log(toDoTask3);  
        todosRow3.push(toDoTask3);

        localStorage.setItem("todoList3", JSON.stringify(todosRow3));
      });  

    // Get the data from the localStorage for row #3
      $("#row-3 #row3col2input").val(JSON.parse(localStorage.getItem("todoList3")));
    
      // Click on ROW 4 button and save data in localStorage
      $("#row-4").on("click", "#row4col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask4 = $("#row4col2input")
          .val()
          .trim();

        console.log(toDoTask4);  
        todosRow4.push(toDoTask4);


        localStorage.setItem("todoList4", JSON.stringify(todosRow4));
      });  

    // Get the data from the localStorage for row #4
      $("#row-4 #row4col2input").val(JSON.parse(localStorage.getItem("todoList4")));



    // Click on ROW 5 button and save data in localStorage
      $("#row-5").on("click", "#row5col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask5 = $("#row5col2input")
          .val()
          .trim();

        console.log(toDoTask5);  
        todosRow5.push(toDoTask5);


        localStorage.setItem("todoList5", JSON.stringify(todosRow5));
      });  

    // Get the data from the localStorage for row #5
      $("#row-5 #row5col2input").val(JSON.parse(localStorage.getItem("todoList5")));
    

    // Click on ROW 6 button and save data in localStorage
      $("#row-6").on("click", "#row6col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask6 = $("#row6col2input")
          .val()
          .trim();

        console.log(toDoTask6);  
        todosRow6.push(toDoTask6);


        localStorage.setItem("todoList6", JSON.stringify(todosRow6));
      });  

    // Get the data from the localStorage for row #6
      $("#row-6 #row6col2input").val(JSON.parse(localStorage.getItem("todoList6")));
    
      
    
    // Click on ROW 7 button and save data in localStorage
      $("#row-7").on("click", "#row7col3btn", function(event) {
        event.preventDefault();
        // Get the to-do "value" from the textbox and store it a variable
        var toDoTask7 = $("#row7col2input")
          .val()
          .trim();

        console.log(toDoTask7);  
        todosRow7.push(toDoTask7);


        localStorage.setItem("todoList7", JSON.stringify(todosRow7));
      });  

    // Get the data from the localStorage for row #7
      $("#row-7 #row7col2input").val(JSON.parse(localStorage.getItem("todoList7")));


    // Click on ROW 8 button and save data in localStorage
        $("#row-8").on("click", "#row8col3btn", function(event) {
            event.preventDefault();
            // Get the to-do "value" from the textbox and store it a variable
            var toDoTask8 = $("#row8col2input")
              .val()
              .trim();
    
            console.log(toDoTask8);  
            todosRow8.push(toDoTask8);
    
    
            localStorage.setItem("todoList8", JSON.stringify(todosRow8));
          });  

    // Get the data from the localStorage for row #8      
          $("#row-8 #row8col2input").val(JSON.parse(localStorage.getItem("todoList8")));



// listen for save button clicks --> SAVE THIS CODE FOR FUTURE REFERENCE
   /* $(".saveBtn").on("click", function() {
        // get row text field class and row id values
        var textValue = $(this).siblings(".class-name").val();
        // class name for textValue because I had the rows with unique ids
        var timeRow = $(this).parent().attr(#id);

        // save in localStorage
        localStorage.setItem(time, value);
    }); 

    var blockHour = parseInt($(this).attr("id").split("-")[1]); */

    // load any saved data from localStorage
    // $("#hour-9 .description").val(localStorage.getItem("hour-9"));







          

















    // //   for (var i = 0; i < localStorage.length ; i++ ) {
    // //     //   const key = localStorage.key[i];
    // //       var key = localStorage.getItem("key");
          
    // //       console.log(key);


    // //     //   var outPutData = localStorage.getItem([i])
    // //     //   console.log(outPut);
    // //   }

    // var key = localStorage.getItem("key");
    // key = JSON.parse(key)
          
    // console.log(key);
