import { API_KEY } from "./config.js";

// Safe: textContent does not parse HTML
function displayMessage(userInput) {
  document.getElementById("output").textContent = userInput;
}

// Safe: only allow numbers and basic math operators
function calculate(expression) {
  // Whitelist: only digits, operators, parentheses, decimal points, and spaces
  const safePattern = /^[\d+\-*/().\s]+$/;
  if (!safePattern.test(expression)) {
    return "Error: Invalid characters";
  }
  try {
    // Use Function constructor with validated input (safer than eval)
    const result = new Function(`return (${expression})`)();
    return isFinite(result) ? result : "Error: Invalid expression";
  } catch {
    return "Error: Invalid expression";
  }
}

// Wire up the poll form
document.getElementById("poll-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const response = document.getElementById("response").value;
  displayMessage(`You said: ${response}`);
});

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const expr = document.getElementById("expression").value;
  const result = calculate(expr);
  document.getElementById("calc-result").textContent = result;
});
