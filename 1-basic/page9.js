let itemlist = ["apple", "mango", "banana", "grapes", "orange", "milk", "water"];
/*
arrayname[index]=>element
itemlist[0]=>apple
itemlist[1]=>mango
itemlist[2]=>banana
itemlist[3]=>grapes
itemlist[4]=>orange
itemlist[5]=>milk
itemlist[6]=>water
*/
console.log(itemlist[0]);
console.log(itemlist[itemlist.length - 1]);
for (let i = 0; i < itemlist.length; i++) console.log(itemlist[i]);
console.log("using for in \n");
for (let x in itemlist) {
  console.log(x, "###", itemlist[x]);
}
console.log("using for each \n");
itemlist.forEach((x, y) => {
  console.log(y, "###", x);
});

console.log("using for map \n");

itemlist.map((x, y) => {
  console.log(y, "###", x);
});
