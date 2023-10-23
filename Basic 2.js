// console.log("This is the code for sum of three no. ");
// function AddThreeNum(a,b,c){
//     return a+b+c;
// }
// let c= AddThreeNum(1 ,2, 43);
// console.log(c)

const PromptSync = require('prompt-sync');


// variables are containers in javascript like string array integer etc.
// let a="harry";
// const k="hi";
// var ladder=68;
// var ladder =70;


// // primitive datatypes NNBBSSU
// let b=null;
// let o=345;
// let d=true;
// let e=BigInt("6789")
// let f="harry"
// let g=Symbol("I am a coder")
// let j=undefined;
// console.log(b,o,d,e,f,g,j)
// console.log(typeof d)


// Objects on Js non-primitive datatype
// const item ={
//     "garry":true,
//     "kanu":false,
//     "elvish":67,
//     "rohan":undefined
// }
// console.log(item["elvish"])


// const kanu ={
//    name:"kanupriya",
//    section:"d"
// }
// const a2={
//     name:"kanupriya",
//    section:"d"
// }
// a2["Friend"]="Myself" // adding a new key 
// console.log(a2)
// we can not change the values of a2 but we can change the values of the keys insisde it


// operators 
// let v=9;
// let s=8;
// console.log(v**s)
//a++ first prints then increments and ++a first increment than print
// console.log(v==s)
// console.log(v!=s)

// // conditional statements 
// let A=prompt('hey wants your name') // it will ask 
// let B = alert("hey") // it will tell
// // typecasting == changing string to a number 
// A=Number.parseInt(A)
// if(A>0){
//     alert("this is a valid age")
// }
// else{
//     alert("this is not a valid age ")
// }


// ternary operator in conditional statements 
// console.log("you can", (A<18 ? "not drive": "drive"))

// loops in js 
// types 
// for loop 
// for (let i=0;i<10;i++){
//     console.log(i)
// }


// program to print sum of n natural numbers
// let sum=0;
// let x=prompt("Enter the value of n ")
// x=Number.parseInt(x)
// for(let i=0;i<x;i++){
//     sum+=(i+1)
// }
// console.log(sum)


// for in loop 
// let obj={
//  kanu:90,
//  muku:80,
//  yachna:70,
//  prachi:33
// }


//for-each loop -- when ever we have a array , then we use for each loop 
// let a=[1,2,3,4,5,6,7,7,8,89,9,9,9];
// a.forEach(function(val){
// // this will be executed for each elements in the array 
// //for eg we want to add 10 to each element of the array .
// // IT doesnot changes the orginal array but apply changes on the temporary copy .
// })



// for in loop .
// for(let a in obj){
//     console.log(a+" "+"are"+" "+obj[a])
// }

// // for of loop 
// for(let b of "kanu"){
//     console.log(b)
// }


// while loop 
// const prompt =require('prompt-sync')();
// let z=prompt("enter the value of n")
// z=Number.parseInt(z)
// let i=0;
// while(i<z){
//     console.log(i)
//     i++;
// }


// do while loop it is excecuted atleast once
// const prompt2 =require('prompt-sync')();
// let z1=prompt("enter the value of n")
// z=Number.parseInt(z)
// let l=0;
// do{
//     console.log(l)
//     l++;
// }while(l<z1)


// functions in js 
// function avg(a,b){
//     return  (a+b)/2;
// }
// c=avg(4,6)
// console.log(c) 
// // second way 
// const sum=()=>{
//     return a+b;
// }


// strings 
// it can be defined in both single and double quotes 
// let name="harry"
// console.log(name)
// console.log(name[0])


// // template literals 
// let boy1 ="promod"
// let boy2="nikhil"
// let sentence =`${boy1} is friend of ${boy2} `
// console.log(sentence )

//escape sequence characters 
// let fruit ="bana\'na"
// console.log(fruit)


// // Strings method 
//  let na="kanu"
// console.log(na.length)
// console.log(na.toUpperCase())
// console.log(na.toLowerCase())
// console.log(na.slice(2,4))
// console.log(na.slice(2))
// console.log(na.replace("ka","pa"))
// let fr="harry"
// console.log(na.concat(" is a friend of " ,fr))


// Arrays 
// collection of some items 
// let marks_class=[12,45,67,90 , false , "Not present"]
// console.log(marks_class)
// console.log(marks_class[4])
// console.log(marks_class.length)
// marks_class[6]=89
// // we can also change the elements like this 
// console.log(marks_class[6])


// Array methods 
//1 .// 
// let num=[1,2,3,4,5,6]
// let b=num.toString()
// console.log(b)
// //2.
// let c=num.join("and")
// console.log(c)
// //3.
// num.pop()
// console.log(num)


// Js = es5 and es6 
//var adds itself to the window object but js doesn't . 
// like alert , console, prompt are part of window not of js 
// window object 
// var is function scoped and let and const are 
// braces scoped 
// intermediate answers while processing are stored in a heap memory in the js 
// execution context mtlb jab bhi hum func chalenyenge 
// fnc apna ek khudka ek imaginary container 
// bana lega jis mein uski teen cheeje hogi :
// variables
// functions inside that parent func 
//lexical environment of the function 
//ye jo container hai imaginary ise hi hum execution context kahte hai 


// truthy and falsy 
// falsy values ye hai =0 false undefined null NaN document.all
// rest all are truthy 

//switch 
// switch (1){
//     case 1:
//         break;
//         case 2:
//             break;
// Deafault case:
// }


//callback functions 
//jab bhi koi aisa code jo baad mai chalta hai tab js ko pata nhi chalta ki wo complete ho gya h 
//tab js ko batata h ki complete ho gyi tab js aapna kam karwata h 
//setTimeout(function(){
//     console.log("2 sec baad chalao")
// },2000);
//aisa code jo baad m chalta hai use hum ek function dedete hai ke bhaiya jab complete hojaoge to ye function chala dena 
// and the function which we give ia a normal func but we call it callback function  


//first class functions 
// function abcd(a){
//     a();
// }
// abcd (function (){console.log("hey");})

//arr are a type of object in javascript 
//who to find 
// Array.isArray([]) -- true
// Array.isArray({}) -- false

//deleting props in object
var a={
    name:"harsh",
    age:24
}
delete a.age;