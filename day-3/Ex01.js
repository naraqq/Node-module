function maxNumber(a, b, c) {
    if (a > b && c) {
        return a
    } else if (b > a && c) {
        return b
    } else {
        return c
    }
}


let test = maxNumber(4, 3, 5);
let test1 = maxNumber(4, 4, 5);
let test2 = maxNumber(4, 4, 4);
let test3 = maxNumber(-1, -2, -3);
console.log(test);
console.log(test1);
console.log(test2);
console.log(test3);