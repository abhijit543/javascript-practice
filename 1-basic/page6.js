let url = "home";
switch (url) {
  case "home":
    console.log("display homepage");
    break;
  case "login":
    console.log("display login page");
    break;
  case "contact":
  case "enquiry":
    console.log("display conatact page");
    break;
  default:
    console.log("display signup page");
}
