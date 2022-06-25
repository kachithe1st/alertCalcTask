

var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
const operator = prompt("enter math symbol (+,*,/,-)");


let result;
if(operator == "+"){
    result = a + b;
} else if(operator == "*"){
    result = a * b;
} else if(operator == "/"){
    result = a / b;
} else if(operator == "-"){
    result = a - b;
} else{
    alert("please put math symbol or solution will be undefined");
    alert("cancel and refresh page");
}
// document.write(a + operator + b + '=' + result)
// the above in comment would enable the result to be displayed as text in the webpage but instead i want as a prompt
alert(a + operator + b + '=' + result);
