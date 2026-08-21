class aaa{
constructor(){
this.x=10;
}
}

class bbb{
constructor(){
this.y=20;
}
}

class ccc extends aaa,bbb{
constructor(){
super();
this.z=30;
}
}

/*
- We want to inherit both bbb, ccc but this feature is not there/available

- Reason: 
1. To avoid multiple copies of members getting inherited from one to another

like class a is inherited by class b and c
then class b and class c both are inherited by class k
also
later class a is also inherited by class k
also
later class k is inherited by class j 

and class j is inherited by class k

etc etc  somany copies of same members part of different classes

Therefor multiple inheritance support is not there in java, javascript, c++ etc

2. Another option is class bbb inherits class aaa 
so that class ccc can get all members of class aaa, bbb

but why should class bbb inherits class aaa

Solution:
--------
so we need to find out a way where class ccc dynamically inherits class aaa or class bbb based on its necessity 



*/