function TreatMeAsClass(){
    this.name = "Mayur";
    this.age = 30;
    this.items = [];
}

function TreatMeAsClassTwo(){
    this.name = "Mayur";
    this.age = 30;
    this.items = [];
}

function treatMeAsFunction(one){
    console.log("I am a function");
    for(let i=1;i<=10;i++){
        let result = one * i;
        this.items.push(result);
    }
    console.log("Items from obj:", this.items);
}

const obj = new TreatMeAsClass();
console.log(obj);
treatMeAsFunction.call(obj, 5);
console.log(obj);


