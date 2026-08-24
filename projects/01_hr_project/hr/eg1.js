const hr=require("./hr")
const d1=new hr.Designation(101,"Clerk");
const d2=new hr.Designation(102,"Manager");

const dm=new hr.DesignationManager(); // const because we are not going to change
dm.add(d1);
dm.add(d2);
let designations=dm.getAll();
let e=0;
while(e<designations.length){
console.log(designations[e].code," -- ",designations[e].title);
e++;
}