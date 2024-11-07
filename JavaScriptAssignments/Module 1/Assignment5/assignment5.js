// Function to check if a year is a leap year
function checkLeapYear() {
    // Prompt the user for a year and convert it to a number
    const year = parseInt(prompt("Enter a year:"));

    // Initialize a variable to store the result message
    let message;

    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        message = `${year} is a leap year.`;
    } else {
        message = `${year} is not a leap year.`;
    }

    // Display the result on the HTML page
    document.getElementById("result").textContent = message;
}

// Call the function when the page loads
window.onload = checkLeapYear;
