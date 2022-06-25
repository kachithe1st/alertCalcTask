
var a = +prompt("Enter first number");
var b = +prompt("Enter second number");
const operator = prompt("enter math symbol (+,*,/,-)");

// alert(a + b);
let result;
if(operator == "+"){
    result = a + b;
} else if(operator == "*"){
    result = a * b;
} else if(operator == "/"){
    result = a / b;
} else if(operator == "-"){
    result = a - b;
}
// document.write(a + operator + b + '=' + result)
// the above in comment would enable the result to be displayed as text in the webpage but instead i want as a prompt
alert(a + operator + b + '=' + result);
