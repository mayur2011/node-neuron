const fs=require('fs');
let usersJSONString=fs.readFileSync("users.data","utf-8");
const usersMap = new Map();

class userInfo {
constructor(name,password){
this.name=name;
this.password=password;
this.id=0;
}
};

// get all online users
function getAllOnlineUsers(){

}

let usersObj=JSON.parse(usersJSONString);
usersObj.users.forEach(function(user){

usersMap.set(user.username,new userInfo(user.username,user.password))

console.log(user.username," - record stored.");
});
console.log("---------- All records stored ----------");

let r = usersMap.get("tina");
r.id=1;
console.log(r.id+" - "+r.name+" - "+r.password);

