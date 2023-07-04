let userNames: string[];

userNames = ["Mezan", "Rahman", "Munna"];

// console.log(userNames);

let userNamesAndId: (string | number)[];

userNamesAndId = ["Mezan", 20];

userNamesAndId.push("Munna");
userNamesAndId.push("Rahman");
userNamesAndId.pop();
userNamesAndId.shift();
userNamesAndId.unshift("Mezan");

console.log(userNamesAndId);
