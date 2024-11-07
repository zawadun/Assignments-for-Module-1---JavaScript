// Function to handle square root calculation
function calculateSquareRoot() {
    // Ask the user if they want to calculate the square root
    const isConfirmed = confirm("Should I calculate the square root?");

    // If the user selects OK (true)
    if (isConfirmed) {
        // Prompt the user for a number
        let number = parseFloat(prompt("Enter a number:"));

        // Check if the number is negative
        if (number < 0) {
            document.getElementById("result").textContent = "The square root of a negative number is not defined.";
        } else {
            // Calculate and display the square root
            const squareRoot = Math.sqrt(number);
            document.getElementById("result").textContent = `The square root of ${number} is ${squareRoot}.`;
        }
    } else {
        // If the user selects Cancel (false)
        document.getElementById("result").textContent = "The square root is not calculated.";
    }
}

// Call the function when the page loads
window.onload = calculateSquareRoot;
