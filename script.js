// davaleba-1----------------------------------------------------------------------------------------------------------------

function calculate() {
  var ricxvi = prompt("gtoxvt sheiyvanot ricxvi");
  if (ricxvi % 2 == 0) {
    alert("es ricxvi aris luwi");
  } else {
    if (ricxvi % 2 == 1) {
      alert("es ricxvi aris kenti");
    } else {
      calculate();
    }
  }
}

calculate();

// davaleba 2---------------------------------------------------------------------------------------------------------------

function isValidNumber(x) {
  var x = prompt("sheiyvanet sasurveli teqsti");
  if (isNaN(x)) {
    alert(x + " is  not a number");
  } else {
    alert(x + " is a valid number");
  }
}

isValidNumber();

// davaleba 3----------------------------------------------------------------------------------------------------------------------

function getTYpe() {
  var variable = prompt("sheiyvanet sasurveli teqsti");
  if (variable == "true" || variable == "false") {
    alert("boolean");
  } else if (isNaN(variable)) {
    alert("string");
  } else {
    alert("number");
  }
}

getTYpe();

// davaleba 4-----------------------------------------------------------------------------------------------------------------

function largest() {
  var x = prompt("enter a number");
  var y = prompt("enter a number");
  if (x > y) {
    alert(x + " is bigger than " + y);
  } else if (x < y) {
    alert(y + " is bigger than " + x);
  } else {
    alert(x + " equals " + y);
  }
}

largest();
