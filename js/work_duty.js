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



/******************************************
* Snow Effect Script- By Altan d.o.o. (http://www.altan.hr/snow/index.html)
* Visit Dynamic Drive DHTML code library (http://www.dynamicdrive.com/) for full source code
* Last updated Nov 9th, 05' by DD. This notice must stay intact for use
******************************************/
function openwindow(){
  window.open("autumn_effect.htm","","width=350,height=500")
}

  //Configure below to change URL path to the snow image
  var snowsrc="http://besticons.net/sites/default/files/snow-storm-icon-4002.png"
  // Configure below to change number of snow to render
  var no = 10;
  // Configure whether snow should disappear after x seconds (0=never):
  var hidesnowtime = 0;
  // Configure how much snow should drop down before fading ("windowheight" or "pageheight")
  var snowdistance = "pageheight";

///////////Stop Config//////////////////////////////////

  var ie4up = (document.all) ? 1 : 0;
  var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

	function iecompattest(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}

  var dx, xp, yp;    // coordinate and position variables
  var am, stx, sty;  // amplitude and step variables
  var i, doc_width = 800, doc_height = 600;

  if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
  } else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight;
  }

  dx = new Array();
  xp = new Array();
  yp = new Array();
  am = new Array();
  stx = new Array();
  sty = new Array();
  snowsrc=(snowsrc.indexOf("dynamicdrive.com")!=-1)? "snow.gif" : snowsrc
  for (i = 0; i < no; ++ i) {
    dx[i] = 0;                        // set coordinate variables
    xp[i] = Math.random()*(doc_width-50);  // set position variables
    yp[i] = Math.random()*doc_height;
    am[i] = Math.random()*20;         // set amplitude variables
    stx[i] = 0.02 + Math.random()/10; // set step variables
    sty[i] = 0.7 + Math.random();     // set step variables
		if (ie4up||ns6up) {
      if (i == 0) {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"http://dynamicdrive.com\"><img src='"+snowsrc+"' border=\"0\"><\/a><\/div>");
      } else {
        document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");
      }
    }
  }

  function snowIE_NS6() {  // IE and NS6 main animation function
    doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;
		doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")?  iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;
	if (snowdistance=="windowheight"){
		doc_height = window.innerHeight || iecompattest().clientHeight
	}
	else{
		doc_height = iecompattest().scrollHeight
	}
    for (i = 0; i < no; ++ i) {  // iterate for every dot
      yp[i] += sty[i];
      if (yp[i] > doc_height-50) {
        xp[i] = Math.random()*(doc_width-am[i]-30);
        yp[i] = 0;
        stx[i] = 0.02 + Math.random()/10;
        sty[i] = 0.7 + Math.random();
      }
      dx[i] += stx[i];
      document.getElementById("dot"+i).style.top=yp[i]+"px";
      document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";
    }
    snowtimer=setTimeout("snowIE_NS6()", 10);
  }

	function hidesnow(){
		if (window.snowtimer) clearTimeout(snowtimer)
		for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"
	}


if (ie4up||ns6up){
    snowIE_NS6();
		if (hidesnowtime>0)
		setTimeout("hidesnow()", hidesnowtime*1000)
		}
