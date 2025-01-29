/*
for (init; condition;++/--){
statement
}
*/
for (let i = 1; i <= 10; i++) console.log("the for says :", i);

console.log("reversed lopp");

for (let i = 10; i >= 1; i--) {
  console.log("the for says:", i);
}
console.log("xdfsafsafas");

for (let i = 10; i >= 1; i = i - 2) {
  if (i <= 6) break;
  console.log("the for says:", i);
}
