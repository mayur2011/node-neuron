Logger = class {
	constructor(name){
		this.moduleName= name;
	}

	log(message){
		console.log(`[${this.moduleName}] ${message}`);
	}
};

// Instantiating the anonymous class
console.log(Logger);
let logger = new Logger('AuthService');
logger.log('User logged in successfully.');

console.log("************\n*******Below code also works....*****")

LoggerV2 = class abcd {
	constructor(name){
		this.moduleName= name;
	}

	log(message){
		console.log(`[${this.moduleName}] ${message}`);
	}
};

console.log(LoggerV2);
let newLogger = new LoggerV2('PaymantService');
newLogger.log('Paymant is successful.');

//let a = new abcd();  // will not work, error: abcd is not defined
//console.log(a);