$(document).ready(function () {

  // Array to store plans to build the calender
  let planArray;

  //Getting current date using Moment and updating it in HTML
  const currentDate = moment().format("MMMM Do YYYY");
  $("#currentDate").text(currentDate);

  //Reading any existing stored plans
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  //building array for planner

  if (storedPlans === null) {
    planArray = new Array(9);
  } else {
    planArray = storedPlans;
  }

  // reading the Planner div from HTML

  const $plannerDiv = $("#plannerDiv");

  // emptying the planner Div if any unsaved text is present

  $plannerDiv.empty();

  for (let i = 0; i < 9; i++) {
    // calculating hour from index
    let hour = i + 9;

    // format hours for display
    let ampm = "";

    if (hour > 12) {
      ampm = "pm"
      hour -= 12;
    } else {
      ampm = "am"
    }

    //  row components
    let $rowDiv = $("<div>");
    $rowDiv.addClass("row");

    // Creating 2 width col for times
    let $timeDiv = $("<div>");
    $timeDiv.addClass("col-md-2");

    // create timeBox element (contains time)
    const $timeBox = $("<span>");

    // populate timeBox with time
    $timeBox.text(`${hour} ${ampm}`);

    // appending elementes to timebox
    $rowDiv.append($timeDiv);
    $timeDiv.append($timeBox);

    // row components
    let $dailyPlan = $("<input>");
    $dailyPlan.attr("class", "input-group");
    $dailyPlan.attr("id", "input-"+i);

    // // creating column to input text
    let $inputDiv = $("<div>");
    $inputDiv.addClass("col-md-9");

    // // add col width and row component to row
    $rowDiv.append($inputDiv);
    $inputDiv.append($dailyPlan);

    let $saveDiv = $("<div>");
    $saveDiv.addClass("col-md-1");

    let $saveBtn = $("<i>");
    $saveBtn.attr("id", `saveid-${i}`);
    $saveBtn.attr("class", "fas fa-save saveIcon btn");

    // add col width and row component to row
    $rowDiv.append($saveDiv);
    $saveDiv.append($saveBtn);

    // add row to planner container
    $plannerDiv.append($rowDiv);
  };

  $(document).on("click", "i", function (e) {
    e.preventDefault();

    for(let i=0; i<10; i++){
    planArray[i] = $(`#input-${i}`).val()
    }
    localStorage.setItem("storedPlans", JSON.stringify(planArray));
  });
})