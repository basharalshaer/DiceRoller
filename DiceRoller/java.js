// DICE ROLLER PROGRAM

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const diceSum = document.getElementById("diceSum");
    const values=[];
    const images=[];

    if(numOfDice >= 1){
    for(let i = 0; i<numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice-${value}.png" alt="Dice ${value}">`);
    }
    let sum = 0;
    for(let value of values){
        sum += value;
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
    diceSum.textContent = `sum: ${sum}`;
    }
    else{
        diceResult.textContent = "Please enter a valid number";
    }
}