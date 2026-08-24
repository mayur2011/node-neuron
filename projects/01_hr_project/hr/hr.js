class Designation{
constructor(code, title){
this.code = code;
this.title = title;
}
}

class DesignationManager {
constructor(){
this._designations=[]
}
add(designation){
this._designations.push(designation);
}
getAll(){
return this._designations;
}
}

exports.Designation=Designation;
exports.DesignationManager=DesignationManager;
