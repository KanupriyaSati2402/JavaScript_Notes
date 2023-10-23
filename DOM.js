// What is DOM? 

// Document object model 

// 4 pillars of DOM 
// 1. Selection of an Element --- how to select an element in html to js
// 2. Changing Html --- changing html with the help of js 
// 3. Changing Css  --- changing css with the help of js
// 4. Event listener --- 

// 1. Selectiom of an element ---

// document.querySelector("name of the elemet in html ")
// document.querySelector("h1")
//  if we want to select a class (".box")
//  if we want to select a id ("#box")

// if we do not want to write the doc line again again then we can 
// var a = document.querySelector("name of the elemet in html ")
// and when ever required we can 
// console.log(a)


// 2. Changing HTML ---
// var a= document.querySelector("h1")
// a.innerHTML ="changed HTML"  inner content will be changed 

//3. Changing CSS ---
//var a= document.querySelector("h1")
// a.innerHTML ="changed HTML"  inner content will be changed 
// a.style.color="red"   
// a.style.backgroundColor="black"
//style is mandotory irrespective of our css file name 
// and the properties we need to change in the css will be written in CamelCase 


// 4. Event Listener 
// var a =document.querySelector("h1")
// a.addEventListener("click",function(){
//     console.log("hey")
// a.innerHTML="changed Html"
// })
// click and others are predefined and the function written by us will be done when we do the following 

// to on and off a bulb 

// var a =document.querySelector("#bulb")
// var btn =document.querySelector("button")
// btn.addEventListener("click",function(){
//     a.style.backgroundColor="yellow"
// })

// logic on making on and off on the same button 
// var a =document.querySelector("#bulb")
// var btn =document.querySelector("button")
// var flag=0
// btn.addEventListener("click",function(){
//     if(flag==0){
//         a.style.backgroundColor="yellow" 
//         flag=1
//     } else{
//         a.style.backgroundColor="transparent" 
//         flag= 0;
//     }
   
// })


//Mutliple Elements in single time 
// var h =document.querySelectorAll("h1")
// h.forEach(function(e){
//     console.log(e)
// })
// we will see them in the form of nodelist 

// selecting from id 
// document.getElementById("h1")
//selecting from class 
// document.getElementsByClassName("h1")


// h.textContent when we want to change the text only then this is used in place of innerhtml
