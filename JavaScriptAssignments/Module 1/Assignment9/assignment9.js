// Function to check if a number is prime
function checkPrime() {
    const num = parseInt(document.getElementById("number").value);

    // Validate input
    if (isNaN(num) || num < 2) {
        document.getElementById("result").textContent = "Please enter a number greater than 1.";
        return;
    }

    // Check for divisibility from 2 to the square root of the number
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Display the result
    if (isPrime) {
        document.getElementById("result").textContent = `${num} is a prime number.`;
    } else {
        document.getElementById("result").textContent = `${num} is not a prime number.`;
    }
}
