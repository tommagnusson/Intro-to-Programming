const dutiesBookStore = ["Register", "Textbooks", "Bathroom Cleaning", "Helping Customers", "Alphabetizing Books"];

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

  var arrNumDuties = [];

  // make the array 0..<stepper value
  for(var i = 0; i < numDuties; i++) {
    arrNumDuties.push(i);
  }

  // map the corresponding indexes to the duties from the duties array
  var duties = arrNumDuties.map((a) => dutiesBookStore[a]);

  para.innerHTML = duties.join(", "); // formatting, nicely joined by ", "
}
