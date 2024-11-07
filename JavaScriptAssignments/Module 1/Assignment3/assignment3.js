// Function to prompt for three integers and display sum, product, and average
function calculateNumbers() {
    // Prompt the user for three integers
    let num1 = prompt("Enter the first integer:");
    let num2 = prompt("Enter the second integer:");
    let num3 = prompt("Enter the third integer:");

    // Convert the input strings to numbers
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("results").textContent = "Please enter valid integers.";
        return;
    }

    // Calculate sum, product, and average
    const sum = num1 + num2 + num3;
    const product = num1 * num2 * num3;
    const average = sum / 3;

    // Display the results in the HTML document
    const resultsText = `
        <strong>Sum:</strong> ${sum}<br>
        <strong>Product:</strong> ${product}<br>
        <strong>Average:</strong> ${average}
    `;
    document.getElementById("results").innerHTML = resultsText;
}

// Call the function when the page loads
window.onload = calculateNumbers;
