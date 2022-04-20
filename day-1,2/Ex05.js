function myFunction(num1, num2) {
    if (num1 + num2 > 50 && num1 + num2 < 80) {
        return 65
    } else {
        return 80
    }
}

let test = myFunction(40, 50)

console.log(test);