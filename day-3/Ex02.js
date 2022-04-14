function FtoC(f) {
    return (f - 32) * 0.5556
}

function CtoF(c) {
    return (c * 1.8) + 32
}

let test = FtoC(40);
console.log(test);

let test2 = CtoF(20);
console.log(test);
console.log(test2);