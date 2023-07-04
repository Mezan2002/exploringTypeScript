let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;

userId = 2002;
firstName = "Mezanur";
lastName = " Rahman";
fullName = firstName.concat(lastName);
isActive = true;

function display(): void {
  console.log("Hi I am Display");
}

display();

console.log(
  `your userId: ${userId}, your userName is : ${fullName} , your account status is : ${isActive} `
);
