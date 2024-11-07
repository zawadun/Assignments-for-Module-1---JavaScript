// Function to roll the dice and calculate the sum
function rollDice() {
    // Ask the user how many dice rolls they want
    let numRolls = parseInt(prompt("How many dice rolls would you like to perform?"));

    // Check if the user entered a valid number
    if (isNaN(numRolls) || numRolls <= 0) {
        document.getElementById("result").textContent = "Please enter a valid positive number.";
        return;
    }

    // Initialize the sum of the rolls
    let sum = 0;

    // Roll the dice the user-defined number of times
    for (let i = 0; i < numRolls; i++) {
        // Roll a die (random number between 1 and 6)
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    // Display the sum of the dice rolls
    document.getElementById("result").textContent = `The sum of the dice rolls is: ${sum}`;
}

// Call the function when the page loads
window.onload = rollDice;
