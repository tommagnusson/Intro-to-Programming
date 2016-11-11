const dutiesBookStore = ["Register", "Textbooks", "Bathroom Cleaning", "Helping Customers", "Alphabetizing Books"];
const dutiesNam = ["Commit code", "Chat with boss", "Read Objective-C (ew)", "Figure out ReactSwift", "Make a switch game"];

function onload() {
  // TODO:
  // var stepper = document.getElementById("stepper");
  //
  // // Dynamically make sure max is at most the amount of jobs in the array
  // stepper.setAttribute("max", String(dutiesBookStore.length));
  // stepper.setAttribute("min", String(0));
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
