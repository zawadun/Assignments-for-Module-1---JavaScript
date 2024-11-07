function calculateProbability() {
    const numDice = parseInt(document.getElementById("numDice").value);
    const desiredSum = parseInt(document.getElementById("desiredSum").value);
    
    // Validate inputs
    if (isNaN(numDice) || isNaN(desiredSum) || numDice < 1 || desiredSum < numDice || desiredSum > numDice * 6) {
        document.getElementById("result").textContent = "Please enter valid values.";
        return;
    }

    let successfulRolls = 0;
    const totalRolls = 10000; // Simulate 10,000 rolls

    for (let i = 0; i < totalRolls; i++) {
        let sum = 0;
        // Roll the dice
        for (let j = 0; j < numDice; j++) {
            sum += Math.floor(Math.random() * 6) + 1; // Dice roll between 1 and 6
        }

        if (sum === desiredSum) {
            successfulRolls++;
        }
    }

    // Calculate the probability as a percentage
    const probability = (successfulRolls / totalRolls) * 100;

    // Display the result
    document.getElementById("result").textContent = `Probability to get sum ${desiredSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
}
