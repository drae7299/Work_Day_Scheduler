//declared global Var
let currentDate = $('#currentDay');
let rowTime = $(this).attr('id');
//year and date display
currentDate.text(moment().format('MMM Do, YYYY,ss'));

// Difference between past pre and fut function
//created a couple variables
//Used css classes to define past present and future in if and if else statements
let hourBoxes = $(".row");
let index = ".index"; //Not sure if this var is needed

hourBoxes.each(function(index) {
    console.log($(this).children('textarea'));

    if(moment().hour() < rowTime) {
        $(this).children('textarea').addClass('past')
    }
    else if(moment().hour() === rowTime) {
        $(this).children('textarea').addClass('present')
    }
    else if(moment().hour() > rowTime) {
        $(this).children('textarea').addClass('future')
    }
});

//Creating a local storage saveing option so schedule doesnt diaapear after refresh as well as on click button for saving abilities
let saveTasks = window.localStorage;
let tasks = [];
let info = $(this).siblings('textarea').val();
let rowPick =$(this).attr("id");

$('saveBtn').on('click', function(){
saveTasks.push({rowPick, info});
saveTasks.setItem("info", JSON.stringify(tasks))
});
console.log(tasks);

let myInfo = [];
if (saveTasks.lenth > i){
    myInfo = JSON.parse(myInfo.getItem("tasks"));
    for(var i = 0; i < myInfo; i++){
        $('$.row').children('textarea').val(myInfo[i].textInput)
    }
};






//     let date = new Date();
//     currentDay.innerHTML = date.toLocaleTimeString;
// })








//global Vars
//Comparison fuhnction
// "This" functiion to save data
//Click button, save value then place it into an array and stringify it

// each element in the array is an object
//put into array that you stringify
//store array in local storage
//parse it when you bring it back out
//have to stringify to save
//got to parse to place on the page appropriatly 


//fucntion to push to open array
//function to change colors
//


//declare time var/set using $createid for $("#")
//using that var create tiome output format, mm dd yyyy
//create function for past present andd future(create var to get first class, the console log it)
//create funtion for if else if and else if
// local storage var create and save info and an open array
//creat on click to save
  