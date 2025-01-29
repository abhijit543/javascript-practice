//if inside if  - nested if

let userinput = 5;

// isNaN() - it return true for String
//             it return false for number

let x = isNaN(userinput);
console.log(x);
if (x) {
  console.log(x, "is string type ..");
} else {
  if (userinput % 2 === 0) console.log(userinput, "-is even number");
  else console.log(userinput, "-- it is an odd number");
}
