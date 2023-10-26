//1. ways to print in js
//console.log("Hello World");
//alert("Hello GUYS");
//document.write('Hello baby');

//2. js console API 
//console.warn("this is a warning");
//console.error("this is an error");
//console.log("hello world")


// javascript is a dynamically typed language and it can change a variable while it is running 
//3. Variables in Js
//containers to store data values 
// var was used earlier to declare a variable now let is been used
// let c=68;
// after runing it if we change the value of a
// a="harry";
// a here is called the identifier .
// it will print harry
// var number1=34;
// var number2=44;
// console.log(number1+ number2);
// we can not start a variable from a number 
// the reserved words shouldn't be used 
// js is case sensitive


/* difference betweeen var const and let 
let is block scoped and in var it changes the values outside a block also that is globally 
declaring variables with var can be done with same identifier multiple times but in let there should be a unique identifier every time 
this can create bug using var 
we can't redeclare from let 
and const values cannot be changed 




//4. Datatypes in Javascript - tells the characteristic of a value 
//Number
// var num1=33;
// var num2=56;
// //string
// var str1="Hey there ";
// var str2='hey buddy';
// //objects
// var marks={
//     ravi:22,
//     shubham:78,
//     harry:99,
// }
// console.log(num1,str1,marks); // used for printing

 //boolean
// var a=true;
// var b=false;
// console.log(b)

//undefined
// var n;
// var nu=undefined;
// console.log(n);
// console.log(nu);
// console.log(undefined);

// null and undefined are different 
// var n1=null;
// console.log(n1);

/*at a very high level ,there are two types of datatypes in js=
1.primitives : NNSSBBU == Null, Number , Symbol , String , Boolean , Bignit , Undefined 
2.Non - primitive data types/Reference datatypes :Arrays and objects
*/
// var arr =[1,2,3,4,5,6]
// console.log(arr)
// var arr2=['I','love','u']
// console.log(arr2)

// 5.Operators 
// arthimetic operators 
// var a=100;
// var b=220;
// console.log(a+b);
// console.log(a/b)
// console.log(a*b)


// assignment operators 
// var c=b;
// c*=c;
// c/=c;
// c+=c;
// console.log(c)

//comparison operators
//  var a=10;
//  var b=10;
// console.log(a==b)
// console.log(a>=b)
// console.log(a<=b)
// console.log(a!=b)
// === when we compare two datatypes 


//logical operators 
//1.and
// console.log (true && false)
// console.log (false && false)
// console.log (true && true)
// console.log (false && true)
// //2.OR
// console.log (true || false)
// console.log (false || false)
// console.log (true || true)
// console.log (false || true)

// logical not 
// console.log(!false)
// console.log(!true)

//Functions in js
// dry function = do not repeat urself
function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6)
console.log(c)
// if we see something in blue in console that is a number and with black it is a string

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

//Loops in js 
// var arr=[1,2,3,4,5];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     // if(i==2){
//     //     break;
//     // } // break statement in for loop 
//     if(i==2){
//         continue ;
//     }// will not execute for index 2 -- continue statement 
//     console.log(arr[i]);
// }
//second approach to iterating the array 
// arr.forEach(function (element){
//     console.log(element);
// })

//while loop 

// let j=0; // temporary variable we will use it in place of var
// while (j<array.length){
//     console.log(arr[i]) 
//     j++;
//}
//do while loop
// do{
//     console.log(arr[j]) 
//     j++;
// }
// while(j<arr.length);



// methods 

//let myArr=['fan', 'camera' , 34 , null , true];
//Array Methods 
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);
// myArr.sort(); will sort in form of string
//myArr.tostring();

// String Methods in JavaScript
//let myLovelyString = "Hari is a good boy good good ";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelyString.slice(1,4))
//d = myLovelyString.replace("Hari", "Rohan");
// d = d.replace("good", "bad"); // only 1st place will be changed 
// console.log(d, myLovelyString)


//let myDate = new Date();
//  console.log(myDate.getTime());
//  console.log(myDate.getFullYear());
//  console.log(myDate.getDay());
//  console.log(myDate.getMinutes());
//  console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
elemClass[0].classList.remove("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element


// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)


//Events 
firstContainer.addEventListener()