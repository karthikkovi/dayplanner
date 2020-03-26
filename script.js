$(document).ready(function(){


    const planArray;
    const existingPlans = JSON.parse(localStorage.getItem("existingPlans"));

    // Checking if there are plans in the local storage
    if(existingPlans === null){
        planArray = new Array(9);
    } else {
        planArray = existingPlans;
    }

    // To empty any existing plans

    $("#plannerDiv").empty();



})