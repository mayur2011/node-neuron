const events = require('events');
class Bulb extends events.EventEmitter {
    constructor() {
        // calling parent constructor
        super();
        this._wattage = 0;
    }
    
    set wattage(value) {
        console.log("Setter got called");
        if(this._wattage == value) return;
        
        let oldWattage=this._wattage;
        this._wattage = value;

        // following line will trigger the event, this is what will call the registered event handlers (bulb.on('wattageChanged', ...))
        super.emit('wattageChanged', oldWattage, value);
    }
    
    get wattage() {
        console.log("Getter got called");
        return this._wattage;
    }
}

var bulb = new Bulb();

// whenever wattage change happens then this function should get executed
bulb.on('wattageChanged', function(oldWattage, newWattage){
    console.log(`Wattage changed from ${oldWattage} to ${newWattage}`);
});

bulb.wattage = 60;
console.log("Bulb wattage:", bulb.wattage);
bulb.wattage = 100;
console.log("Bulb wattage:", bulb.wattage);


/*
reference: https://nodejs.org/api/events.html
internal video: 20_buffer_n_events
*/
