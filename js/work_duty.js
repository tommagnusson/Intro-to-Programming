const dutiesBookStore = ["Register", "Textbooks", "Bathroom Cleaning", "Helping Customers", "Alphabetizing Books"];

function onload() {
  var stepper = document.getElementById("stepper");
  stepper.setAttribute("max", dutiesBookStore.length);
  stepper.setAttribute("min", 0);
}

function renderDutiesBookStore() {

  var numDuties = document.getElementById("stepper").value;

  var arrNumDuties = [];
  for(var i = 0; i < numDuties; i++) {
    arrNumDuties.push(i);
  }

  var duties = arrNumDuties.map((a) => dutiesBookStore[a]);
  var para = document.getElementById("dutiesHere");
  para.innerHTML = duties.join(", ");

  var button = document.getElementById("buttonBookStore");
  button.setAttribute("disabled", "disabled");
}
