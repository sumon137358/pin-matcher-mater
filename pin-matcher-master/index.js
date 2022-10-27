let inputShow =document.getElementById("input-show");

function numShow(num){
    inputShow.value +=num;
}
function clearAll(){
    inputShow.value="";
}
function equal(){
    inputShow.value =eval(inputShow.value)
}

const generatePin =document.getElementById("generatePin").addEventListener("click",function(){
let generateInput =document.getElementById("generateInput");

var randomNumber = Math.floor(1000 + Math.random() * 9000);
generateInput.value =randomNumber;


});
const submit =document.getElementById("submit").addEventListener("click",function(){
let result1 =inputShow.value
inputShow.value="";
// console.log(result1);
let generateInput =document.getElementById("generateInput");
let generateInputNumber =parseInt(generateInput.value);
let result2= generateInput.value =generateInputNumber;
generateInput.value ="";

 if(result1 ==result2){
let notify2 =document.getElementById("notify2");
notify2.style.display ="block";

 }
 else{
    let notify1 =document.getElementById("notify1");
    notify1.style.display ="block";
   
 }
});







