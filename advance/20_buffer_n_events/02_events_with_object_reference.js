const events = require('events');

// BulbEvent is a wrapper with three properties
class BulbEvent{
constructor(oldWattage, newWattage, bulb){
    this._oldWattage = oldWattage;
    this._newWattage = newWattage;
    this._bulb = bulb;
}

get oldWattage(){
    return this._oldWattage;
}

get newWattage(){
    return this._newWattage;
}

get bulb(){
    return this._bulb;
}
}

// Bulb class inherits events.EventEmitter
class Bulb extends events.EventEmitter {
    constructor() {
        // calling parent constructor
        super();
        this._wattage = 0;
    }
    
    set wattage(value) {
        console.log("Setter got called");
        if(this._wattage == value) return;
        
        let oldWattage = this._wattage;
        this._wattage = value;
        
        // creating bulb event object with old and new wattage and current bulb reference
        var bulbEvent = new BulbEvent(oldWattage, value, this);
        super.emit('wattageChanged', bulbEvent);
    }
    
    get wattage() {
        console.log("Getter got called");
        return this._wattage;
    }
}

// this will receive the bulb event object reference
function wattageChangedHandler(bulbEvent) {
    if (bulbEvent.bulb === b1) {
    console.log(`Buld 1 : Wattage changed from ${bulbEvent.oldWattage} to ${bulbEvent.newWattage}`);
    } else if (bulbEvent.bulb === b2) {
    console.log(`Buld 2 : Wattage changed from ${bulbEvent.oldWattage} to ${bulbEvent.newWattage}`);
    }    
}

var b1 = new Bulb();
var b2 = new Bulb();

// adding event listener to both objects
b1.on('wattageChanged', wattageChangedHandler);
b2.on('wattageChanged', wattageChangedHandler);

// changing wattage of b1
b1.wattage = 60;
console.log(b1.wattage);
b1.wattage = 80;
console.log(b1.wattage);

// changing wattage of b2
b2.wattage = 200;
console.log(b2.wattage);


/*
Problem statement:
- There are two objects of bulb (b1, b2)
- Both objects have same event listener
- When b1.wattage is changed, then event listener should be triggered
- When b2.wattage is changed, then event listener should be triggered
- Then how to identify which object's wattage is changed?
    - Or Which object triggered the event handler?
    - Or with which object reference the event is occurred?

Solution:
- Use 'this' reference of the object
- Using wrapper only, you need to change the parameters of the event handler
- Wrapper in this example is the BulbEvent class
- So a single function acting as event handler can handle events from multiple objects / components but this is achieved successfully through a design where an event is triggered with
  wrapper which has lot of information and with the address of event emitter object reference
- This is a very important example as this is used for network programming

reference: https://nodejs.org/api/events.html
internal video: 21

*/