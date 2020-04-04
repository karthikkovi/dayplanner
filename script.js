$(document).ready(function () {

  // Array to store plans to store and display the values
  let planArray;

  //Getting current date using Moment and updating it in HTML
  const currentDate = moment().format("MMMM Do YYYY");
  $("#currentDate").text(currentDate);

  //Reading any existing stored plans
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

  // function to create the planner
  createDiv();

  if (storedPlans === null) {
    planArray = new Array(9);
  } else {
    displayStoredPlans();
  }


  function createDiv() {
  // reading the Planner div from HTML

  const $plannerDiv = $("#plannerDiv");

  for (let i = 0; i < 9; i++) {
    // calculating hour from index
    let hour = i + 9;

    // format hours for display
    let ampm = "";
    
    if (hour > 12) {
      ampm = "pm";
      hour -= 12;
    } else {
      ampm = "am"
    }

    //  Creating the row component
    let $rowDiv = $("<div>").addClass("row");

    // Creating 2 width col for times
    let $timeDiv = $("<div>").addClass("col-md-2");

    // create timeBox element (contains time)
    const $timeBox = $("<span>");

    // populate timeBox with time
    $timeBox.text(`${hour} ${ampm}`);

    // appending elements to timebox
    $rowDiv.append($timeDiv);
    $timeDiv.append($timeBox);

    // Creating input groups
    let $dailyPlan = $("<input>").addClass("input-group");
    $dailyPlan.attr("id", "input-"+i);

    // creating 9 width col for input text
    let $inputDiv = $("<div>").addClass("col-md-9");

    // add input column to the row
    $rowDiv.append($inputDiv);
    $inputDiv.append($dailyPlan);

    // Creating the 1 width column for the save buttons.

    let $saveDiv = $("<div>").addClass("col-md-1");

    let $saveBtn = $("<i>");
    $saveBtn.attr("id", `saveid-${i}`);
    $saveBtn.addClass("fa fa-save saveIcon btn");

    // add save column to the row
    $rowDiv.append($saveDiv);
    $saveDiv.append($saveBtn);

    // add row to planner container
    $plannerDiv.append($rowDiv);
  }};

  // Function to store plans when the button is clicked
  $(document).on("click", "i", function (e) {
    e.preventDefault();

    // Loop to read data from the input fields.
    for(let i=0; i<10; i++){
    planArray[i] = $(`#input-${i}`).val()
    }
    // Set the local storage with the plans
    localStorage.setItem("storedPlans", JSON.stringify(planArray));
  });

  // Function to display stored plans.
  function displayStoredPlans() {

    // Reading the value from storage
    planArray = storedPlans;
    
    // Loop to populate the data
    for (let i=0; i<10; i++) {
      $(`#input-${i}`).val(planArray[i])
    }
  }
})