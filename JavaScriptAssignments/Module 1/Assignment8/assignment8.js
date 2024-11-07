// Function to find leap years between start and end year
function findLeapYears() {
    // Get the start and end year from the user input
    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    // Validate the input
    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
        alert("Please enter valid start and end years.");
        return;
    }

    // Get the unordered list element to display the leap years
    const leapYearsList = document.getElementById("leapYearsList");

    // Clear any previous leap years from the list
    leapYearsList.innerHTML = "";

    // Loop through the range of years
    for (let year = startYear; year <= endYear; year++) {
        // Check if the year is a leap year
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            // Create a new list item and append it to the unordered list
            const listItem = document.createElement("li");
            listItem.textContent = year;
            leapYearsList.appendChild(listItem);
        }
    }

    // If no leap years were found, notify the user
    if (leapYearsList.children.length === 0) {
        const listItem = document.createElement("li");
        listItem.textContent = "No leap years in this range.";
        leapYearsList.appendChild(listItem);
    }
}
