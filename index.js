// Iteration 1: Names and Input
const hacker1 = "Kristopher"
const hacker2 = "Falcone"

console.log(`The driver's name is ${hacker1} and the navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length <  hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops
// 3.1
function addSpace(str) {
  return str.split('').join(' ');
}

const result1 = addSpace(hacker1);
console.log(result1)

// 3.2
let newNavigatorsName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);

// 3.3
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 