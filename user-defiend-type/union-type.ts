let userId: string | number | boolean;

userId = 2002;
userId = "2002";
userId = true;

function getUserInfo(userId: string | number | boolean) {
  console.log(userId);
}

getUserInfo(2992);
getUserInfo("2992");
getUserInfo(true);
