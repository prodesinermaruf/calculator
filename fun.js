const display = document.getElementById("display");

let realValue = ""; // Stores the actual input for evaluation

function opentodisplay(input) {
  if (input === "/") {
    display.value += "÷";
    realValue += "/";
  } else if (input === "*") {
    display.value += "×";
    realValue += "*";
  } else if (input === "**") {
    display.value += "^";z
    realValue += "**";
  } else {
    display.value += input;
    realValue += input;
  }
}

function cleardisplay() {
  display.value = "";
  realValue = "";
}

function ans() {
  try {
    const result = eval(realValue);
    display.value = result;
    realValue = result.toString(); // Make the result the new input
  } catch (error) {
  display.value = "error";
    realValue = "";
  }
}

  
