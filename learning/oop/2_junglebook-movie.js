class Movie {
start(){
console.log("Welcome...")
}
interval(){
console.log("Interval - Have a tea for Rs 50/-");
}
end(){
console.log("Thank you - come back again!")
}
}

// derive class increases the features
class JungleBook extends Movie {
reelOne(){
console.log("Mowgli enters the jungle");
}
reelTwo(){
console.log("Bagherera saves Mowgli");
}

/* derive class can redefine the existing feature or those features which don't fit fully
*/
// override the feature interval
interval(){
this.interval();
console.log(" and Have drinks and snacks");
}
}

let jb = new JungleBook();
jb.start();
jb.reelOne();
jb.interval();
jb.reelTwo();
jb.end();


/*
Three cases:
1. Derive can add new features (like reelOne, reelTwo)
2. Derive can override the features (if need to redefine)
3. Derive can override the feature but can still use the base class feature using this keyword (to call object member, we need to use "this.")

error: RangeError: Maximum call because this.interval keeps bringing to same interval of junglebook class

*/