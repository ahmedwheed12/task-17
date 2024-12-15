// var person = {
//     firstname :"ahmed",
//     lastname :"waheed",
//     color : "black",
//     salery : 3000
// }
// console.log(person.color)
// function getData (fname , color) {
//     console.log('my name is '+fname +" and my color is "+color);
    
// }
// getData('ahmed' ,'black');
// getData();
// getData('abdallah' ,'blue');
// ======================================================
// var x = prompt ("what much the rice")
// if(x>20){
//     alert("expensive")
// }else if(x==20){
//     alert("cool")
// }else if(x<20){
//     alert("cheap")
// }else{
//     alert("not a number")
// }
function convertDollar() {

    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(isNaN(dollar)){
        result.innerHTML= "Enter Number Not Text";

    }else if (dollar<0){
        result.innerHTML= "enter postive number";
     
    }else if (dollar==0){
        result.innerHTML= "enter number Rather than zero";
    }else{
        result.innerHTML= dollar*50;
    }
    return false

    }