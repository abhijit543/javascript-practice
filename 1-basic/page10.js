let user = {
  fullname: "abhi",
  age: "30",
  education: "be",
  city: "bangalore",
  details: function () {
    console.log(this.fullname);
    console.log(this.age);
    console.log(this.education);
    console.log(this.city);
  },
};

console.log(typeof user);
console.log(user.fullname);
user.details();
