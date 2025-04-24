let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === '') return;
  const lastChar = display.value[display.value.length - 1];
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else {
    display.value += op;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
