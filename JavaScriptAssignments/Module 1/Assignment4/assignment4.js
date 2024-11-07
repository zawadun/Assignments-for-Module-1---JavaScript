// Function to assign a house randomly to the student
function sortStudent() {
    // Prompt the user for their name
    const name = prompt("Enter your name:");

    // Generate a random number between 1 and 4
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    // Initialize a variable to hold the house name
    let house;

    // Assign a house based on the random number using a switch statement
    switch (randomNumber) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
        default:
            house = "Unknown House"; // Just in case, though it won't happen here
    }

    // Display the result in the HTML document
    document.getElementById("result").textContent = `${name}, you are in ${house}.`;
}

// Call the function when the page loads
window.onload = sortStudent;
