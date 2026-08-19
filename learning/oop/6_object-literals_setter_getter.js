let bulb={
_wattage: 0,

set wattage(w){
	console.log("Setter got called");
	if(w>=0 && w<=240) _wattage=w; else _wattage=60;
},

get wattage(){
	console.log("Getter got called");
	return _wattage;    //this is not needed in case of object literal
}
};


bulb.wattage=100;           // this will invoke set wattage related code.
console.log(bulb.wattage);  // this will invoke get wattage related code.


/*
Set & Get concept is applied to object literals

- if property is written with _ like (_wattage) then that will not be accessed directly
- this keyword is not needed to be used for object literal based code
- 

*/