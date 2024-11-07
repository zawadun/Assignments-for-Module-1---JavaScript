// Prompt the user for their name
const userName = prompt("Please enter your name:");

// Generate the greeting message
const greetingMessage = `Hello, ${userName}!`;

// Display the greeting in the HTML document
document.getElementById("greeting").textContent = greetingMessage;
