// Write a function that calls another function declared with a function declaration before
// the function declaration. What will be the output?
function callFun(){
    console.log("successfullly function call another function declared with a function declaration before the function ")
}
function check(){
    callFun()
}
check()