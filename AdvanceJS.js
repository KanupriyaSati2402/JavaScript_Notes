//Higher Order Funcs 
//-- higher order functions are the functions whhich accept a func in a parameter or return a func or both .
// function abcd(val){
// }
// abcd(function(){})
// or
// function abcd(val){
//     return function(){}
// }
// abcd()

// aisa func jo accept karle ek or func ya fir wo return karde ek or func
// foreach is a higher order function

// Constructor funcs
// it is used when we need to create many elements with same properties that 
// time we use this 
// sacha of biscuit 
// function abcd(){
//     this.width=12;
//     this.height=22;
// }
// var bis1=new abcd(); // adding new will make another object of same type that is it will create an instance 
// var bis2=new abcd(); // similarly all
// // normal function jisme this ka use ho and aap func ko call karte waqt new keyword ka use karien
// //similarly 
// function button(color){
//     this.radius=2;
//     this.color=color;
//     this.icon=false;
//     this.pressable=true;
// }
// var redbtn =new button("red");

// first class funcs

//A language is said to have a first class fucntions when the functions in that language
//are treated as variables, you can save them , you can pass them as arguments to another function 
// function abcd(){

// }
// abcd(function(){})
// for eg - setTimeout AND setInterval

// new keyword -- jab bhi new lgta h tab ek blank object bana lo man mai jo constructor functions mai use hota h 


// iife -- immediately invoked function expression 
// ye h function ko turant chalane ki kala ,iss tareeke se taki hum log
// koi private variable bana paye.
// (function (){
//   var a=12; // iife is bydeafault private variables , this makes our code more safe and private
// })()
// can be accessed only this the particular iife
// var ans = (function (){
//     var age=12;
//     return{
//         getter:function(){
//             console.log(age);
//         },
//         setter:function(val){
//             age=val;
//         }
//     }

// })()

// prototype
// when ever we create an object we get some properties that we didn't created 
// every object gets a property called prototype, which means wheneever you create an object it 
// gets prototype property automatically.

// now what does this prototype contains 
// it contains many helper prop. and methods which we can use to complete our tasks,
// for eg. .length in array . 
// many properties and methods are already available to use built by js
// creators inside prototype of every object
// one extra property always given by js to every object

// prototypal inheritance

// inheritance is basically passing parent's features or properties 
// to their children, to do the same thing in js with the help og prototype 
// is called prototypal inheritance.

// var human ={
//     name:"kanu",
//     cantalk:true,
//     willdie:true,
//     canfly:false
}
// but a student is also a human and have the same properties as above 

// var student={
//     jsques:true
// }
// student.__proto__=human;

// this call apply Blind 

//this keyword is a special keyword in js which changes it's value in different context
// jab bhi kuch likh rhe ho check karo ky usme kahi bhi func , object ya fir scope bana hai means {} than you are in 
// local scope, and something which is not inside the {} it is global scope 

// var a=12; // global , in this this gives window .
// function abcd(){ // local 
 
// }
// in function this value also window 
// method , -- ek func jo object ke ander banate h , this value is object(what we have made)
// in any method , this keyword always refers to parent object
// in eventlistener this value gives whatever is written before the . before eventlistener

// call apply blind motive -- agr tumhare pass koi func hai and koi object hai 
// and tumhe func chalana h or by default jo this ki value hai usse window na rakh
// kar point karwana hai kisi obj ki trf 

//call

// function abcd(val1,val2,val3){
//     console.log(this);
// }
// var obj={age:24}
// abcd.call(obj,1,2,3)

// apply -- we pass a array after we pass the obj
// function abcd(val1,val2,val3){
//     console.log(this);
// }
// var obj={age:24}
// abcd.call(obj,[1,2,3]) we use this because apply ask to use only two paramenters 
// first for this and second for values 

//blind 
// function abcd(){
//     console.log(this);
// }
// var obj={age:24}
// var blind= abcd.blind(obj);
// blind();
// it will not return .
// it will blind the the abcd func with the obj and will give a new blinded func

// we use it when we uant a diffrent value of this 

// pure & impure funcs
//  1. pure func have these two features :
//  it should always return same o\p and i\p 
// function abcd(a,b){ // eg of pure function
//     return (a*b);
// }
// abcd(1,2);
//  it will never change/update the value of a global variable

// closures
// a function+ lexical environment ke reference return hoga 
