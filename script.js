$(document).ready(function(){

    // Array to store plans to build the calender
    let planArray;

    //Getting current date using Moment and updating it in HTML
    const currentDate = moment().format('MMMM Do YYYY');
    $('#currentDate').text(currentDate);

    //Reading any existing stored plans
    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

    //building array for planner

    if (storedPlans === null){
        planArray = new Array(9);
    } else {
        planArray = storedPlans;
    }

    // reading the Planner div from HTML

    const $plannerDiv = $("#plannerDiv");

    // emptying the planner Div if any text is present

    $plannerDiv.empty();

})