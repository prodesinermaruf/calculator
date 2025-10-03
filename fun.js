const display = document.getElementById("display");

function opentodisplay(input) {
  display.value += input;
}

function cleardisplay() {
  display.value = "";
}

function ans() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

let realValue = ""; // আসল হিসাব রাখবে

function opentodisplay(input) {
  if (input === "/") {
    display.value += "÷"; // ডিসপ্লেতে ÷ দেখাবে
    realValue += "/"; // ভেতরে আসল ডিভিশন অপারেটর থাকবে
  } else if (input === "*") {
    display.value += "×"; // ডিসপ্লেতে × দেখাবে
    realValue += "*";
  } else {
  }
  if (input === "**") {
    display.value += "^"; // ডিসপ্লেতে × দেখাবে
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
    display.value = eval(realValue); // হিসাব আসল ভ্যালু দিয়ে হবে
    realValue = display.value; // result নতুন input হবে
  } catch (error) {
    display.value = "Error";
    realValue = "";
  }
}
