let userlist = [
  {
    fullname: "alex",
    age: "30",
    city: "Bangalore",
  },
  {
    fullname: "dsfsd",
    age: "3200",
    city: "cxz",
  },
  {
    fullname: "dssadf",
    age: "252",
    city: "xzczc",
  },
  {
    fullname: "czxcz",
    age: "20",
    city: "zxc",
  },
  {
    fullname: "zcxczx",
    age: "20",
    city: "zxczc",
  },
  {
    fullname: "czx ",
    age: "952",
    city: "Bangalore",
  },
];
console.log(userlist[0].fullname);
userlist.map((user, index) => {
  console.log(user.fullname[0]);
});
