const fs=require('fs');
let usersJSONString=fs.readFileSync("users.data","utf-8");

let usersObj=JSON.parse(usersJSONString);

usersObj.users.forEach(function(user){
console.log(user.username);
console.log(user.password);
console.log("------------------");
});