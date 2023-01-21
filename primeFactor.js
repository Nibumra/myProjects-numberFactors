// Script for getting an number input and calculating its Factors. The script then takes the Factors and identifies factors that are Prime Numbers.

let calculateBtn = document.getElementById("btn-calculate");
let inputNum = document.getElementById("input-number");
let clearBtn = document.getElementById("btn-clear");
const outputContainer = document.querySelector("#output");
calculateBtn.addEventListener('click', event => {
    getInput(inputNum.value);
});

clearBtn.addEventListener('click', event => {
    inputNum.value = '';
    outputContainer.innerHTML = '';
})

// A prime number is a positive integer that is divisible by 1 or itself.

function getInput(inputNum) {
    // const inputNum = prompt("Enter a Positve Number to get its Factor and Prime Factors");

    const number = parseInt(inputNum);

    if (number > 0) {

        // Get and Print Factors
        let numFactor = getFactors(number);
        // let totalFactor = numFactor.length;

        // Get and Print Prime Factors
        let primeFactors = getPrimeFactor(numFactor);

        // Render output
        renderOutput(number, numFactor, primeFactors);
    } else {
        alert("Please enter a valid Positive Number...");
    }

}

// Function to get the factors for a number
function getFactors(n) {

    let factorArray = [];
    for (let i = 1; i <= n; i++) {

        if (n % i === 0) {
            factorArray.push(i);
        }
    }
    return factorArray;

}


// function to get the Prime Factors for a number
// Function takes an array of factors as an Argument
function getPrimeFactor(p) {

    // Array to store Prime Factor
    let arrPrimeFactor = [];

    for (let i = 0; i < p.length; i++) {

        if (checkPrime(p[i]) === true) {
            arrPrimeFactor.push(p[i]);
        };

    }
    //return
    return arrPrimeFactor;
}


// Function to check if the factor is a Prime Number
function checkPrime(num) {
    // variable to check if Factor is a Prime Number
    let isPrime = true;
    if (num === 1) {
        isPrime = false;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        return true;
    } else {
        return false;
    }
}

function renderOutput(number, factors, primes) {
    const totalFactor = factors.length;
    // console.log(`Factors for Number ${number} are: ${factors}`);
    // console.log(`Total Factors for Number ${number} are: ${totalFactor}`);
    // console.log(`Prime Factors for Number ${number} are: ${primes}`);
    outputContainer.innerHTML = '';
    const outputHtml = `
                    <p><em>Factors for Number ${number} are:</em> <b> ${factors} </b></p><br>
                    <p><em>Total Factors for Number ${number} are:</em> <b> ${totalFactor}</b> </p><br>
                    <p><em>Prime Numbers in the Factors for Number ${number} are:</em> <b> ${primes} </b></p>
    `;

    outputContainer.insertAdjacentHTML('beforeend', outputHtml);

}