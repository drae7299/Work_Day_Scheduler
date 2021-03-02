//Declared global Var for current day
let currentDate = $('#currentDay');
//Year and date display as well as current hour and minutes
currentDate.text(moment().format('MMMM Do, YYYY,h,mm A'));

//Difference between past pre and fut function
//Created a couple variables
//Used css classes to define past present and future in if and if else statements
let containers = $(".row");

containers.each(function () {
    console.log($(this).children('textarea'));

    let rowTime = $(this).attr('id');

    if (moment().hour() < rowTime) {
        $(this).children('textarea').addClass('future')
    }
    else if (moment().hour() == rowTime) {
        $(this).children('textarea').addClass('present')
    }
    else if (moment().hour() > rowTime) {
        $(this).children('textarea').addClass('past')
    }
});

//Creating a local storage saveing option so schedule doesnt diaapear after refresh as well as on click button for saving abilities
let saveTasks = window.localStorage;
let schTasks = [];

//function takes data input and saves under the 2 vars, then displays this in the local storage to be viewed for accuracy

$('.saveBtn').on('click', function () {
    let info = $(this).siblings('.description').val();
    let rowPicks = $(this).parent().attr("id");
    schTasks.push({ rowPicks, info });
    saveTasks.setItem("info", JSON.stringify(schTasks));
    $(".hour".description).val(localStorage.getItem(".hour"))
});


//No matter what i do, the info doesnt persist on the page after loading,
//my tutor wasnt able to help with this, any help or advice would be great. I feel the issue is i am using JQwery here and i need to somehow figure out a way to reach into the child of the div to get the item

var displayInfo = [];
if (saveTasks.length > i) {
    displayInfo = JSON.parse(localStorage.getItem('rowPicks'));
    for (var i = 0; i < displayInfo.length; i++) {
        $('$.row)').children('.description').val(displayInfo[i].textInfo)
    }
};
// My tutor mentioned that this might be on the right track for success in the persist i need for the local storage info to remain displayed
$(".hour".description).val(localStorage.getItem(".hour"))







//Failed Sudo Code graveyard......



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
////declare time var/set using $createid for $("#")
//using that var create tiome output format, mm dd yyyy
//create function for past present andd future(create var to get first class, the console log it)
//create funtion for if else if and else if
// local storage var create and save info and an open array
//creat on click to save
