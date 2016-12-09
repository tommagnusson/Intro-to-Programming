const dutiesBookStore = ["Register", "Textbooks", "Bathroom Cleaning", "Helping Customers", "Alphabetizing Books"];
const dutiesNam = ["Commit code", "Chat with boss", "Read Objective-C (ew)", "Figure out ReactSwift", "Make a switch game"];

// help us with date and time stuff
function onload() {
  renderTimeMessage((new Date()).getHours()); // renders our time message based on current time
}

// renders a time specific message for the user in the left most div at the bottom
// using an h3 tag.
function renderTimeMessage(hours) {
  var timeMessage = ""; // to  be inserted into the top of the html

  // Appropriate message based on the time of day
  if (hours < 12) {
    timeMessage = "Enjoy the rest of your morning";
  } else if (hours < 17) {
    timeMessage = "Enjoy the afternoon";
  } else {
    timeMessage = "Have a good evening";
  }

  var timeMessageElement = document.createElement("h3"); // create h3
  var timeMessageTextNode = document.createTextNode(timeMessage); // make text node out of message
  timeMessageElement.appendChild(timeMessageTextNode); // link text node to h3

  var leftDivElement = document.getElementById("left"); // get the leftmost div
  leftDivElement.appendChild(timeMessageElement); // add our h3 (including our message) to the div
}

function renderDutiesBookStore() {
  var para = document.getElementById("dutiesHere");
  para.innerHTML = ""; // clear the previous duties (if any)

  var numDuties = document.getElementById("stepper").value;

  var arrNumDuties = []; // to hold duty strings later

  // make the array 0..<stepper value
  for(var i = 0; i < numDuties; i++) {
    arrNumDuties.push(i);
  }

  // map the corresponding indexes to the duties from the duties array
  var duties = arrNumDuties.map((a) => dutiesBookStore[a]);

  para.innerHTML = duties.join(", "); // formatting, nicely joined by ", "
}

function renderDutiesNam() {
  var para = document.getElementById("namDutiesHere");
  para.innerHTML = ""; // clear previous duties

  var numDuties = document.getElementById("nameStepper").value;
  var arrNumDuties = []; // to hold duty strings later

  for(var i = 0; i < numDuties; i++) {
    arrNumDuties.push(i);
  }

  var duties = arrNumDuties.map((a) => dutiesNam[a]);

  para.innerHTML = duties.join(", "); // nice formatting
}

function renderDuties(job) {
  var para = document.getElementById("dutiesHere" + job);
  para.innerHTML = ""; // clear the previous duties (if any)

  var numDuties = document.getElementById("stepper" + job).value;

  var arrNumDuties = []; // to hold duty strings later

  // make the array 0..<stepper value
  for(var i = 0; i < numDuties; i++) {
    arrNumDuties.push(i);
  }

  // select which duties we need based on input
  var dutiesTemplate;
  if(job == "BookStore") { dutiesTemplate = dutiesBookStore; }
  else { dutiesTemplate = dutiesNam; }
  // map the corresponding indexes to the duties from the duties array
  var duties = arrNumDuties.map((a) => dutiesTemplate[a]);

  para.innerHTML = duties.join(", "); // formatting, nicely joined by ", "

}

// Help us with the calculator.html

const weeksPerYear = 52;
function calculateWage() {
  if (!wageIsValidated()) { return; } // if the wage is not calculated then return
  // hours times wage time weeks in the year (which is a constant)
  var hours = parseFloat(document.getElementById("numberOfHoursWorked").value);
  var wage = parseFloat(document.getElementById("hourlyWage").value);
  var salary = hours*wage*weeksPerYear;
  salary = salary.toFixed(2); // rounding to 2 decimal places, rounds up
  document.getElementById("salary").innerHTML = salary;

  // Determine if salary is enough

  var enough = "not enough";
  if(salary < 20000) {
    enough = "not enough";
  } else if(salary <= 25000){
    enough = "almost enough";
  } else {
    enough = "enough";
  }
  // message right below the wage display
  document.getElementById("goldilocks").innerHTML = enough;
}

function wageIsValidated() {
  // make sure the user fills out both forms
  if (document.getElementById("numberOfHoursWorked").value == "" ||
      document.getElementById("hourlyWage").value == "") {
        alert("Please fill out both forms."); // alerting the user that she forgot something
        return false;
      }
  return true;
}
