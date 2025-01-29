let a = 1000;
let b = 2000;
if (a > b) console.log(a, b, "the higher valu is:", a);
else console.log(a, b, "the higher valu is:", b);

console.log("\n when we compare 3 values....");
let c = 2500;
if (a > b && a > c) console.log(a, b, c, "the higher value is:", a);
else if (b > a && b > c) console.log(a, b, c, "the higher value is:", b);
else console.log(a, b, c, "the higher value is:", c);
