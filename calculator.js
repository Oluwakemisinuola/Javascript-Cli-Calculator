var opr = prompt("Enter the operation type you would like to perform: +, -, *, / ")
var num1 =parseInt(prompt("Enter first number: "))
var num2 =parseInt(prompt("Enter second number: "))


if (opr == "+")
{
    alert(num1 + num2)
}else if (opr == "-") {
    alert(num1 - num2)
}else if (opr == "*") {
    alert(num1 * num2)
}else if (opr == "/") {
    alert(num1 / num2)
}