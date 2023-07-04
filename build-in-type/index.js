var userId;
var firstName;
var lastName;
var fullName;
var isActive;
userId = 2002;
firstName = "Mezanur";
lastName = " Rahman";
fullName = firstName.concat(lastName);
isActive = true;
function display() {
    console.log("Hi I am Display");
}
display();
console.log("your userId: ".concat(userId, ", your userName is : ").concat(fullName, " , your account status is : ").concat(isActive, " "));
