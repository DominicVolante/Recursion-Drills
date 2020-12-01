console.log('hello')
// COUNTING SHEEP
function countingSheep(n) {
    let counting = ": Another sheep jumps over the fence || "
    let doneCounting = "All sheep jumped over the fence"
  if (n === 0) return doneCounting;
  else{
    return n + counting + countingSheep(n - 1)
  }
}
console.log('Counting Sheep', countingSheep(5))

// POWER CALC
const powerCalc = (num, exp) => {
    let result = num ** exp
    if (exp === 0)
    return 1;
    console.log('power Calc', result)
    powerCalc(num, exp - 1);
}
powerCalc(10, 3)

// STRING REVERSAL

function reverseString(string){
    if(string.length === 0)
    return "";
    return reverseString(string.substr(1)) + string.charAt(0)
}
console.log('reverse', reverseString("FooBar"))

//TRI NUM

function triangular(num){
    if(num === 0)
    return num
    return num + triangular(num - 1)
}
console.log('tri', triangular(3))

// SPLITTING STRINGS

function splitter(str, sep){
    let index = str.indexOf(sep);
    if(index === -1) return [str];
    return [str.slice(0, index)].concat(splitter(str.slice(index + sep.length), sep));
}

console.log('split "11/31/20"', splitter('11/31/20', '/'))

//  FIBONACCI 

function fib(num){
    if (num === 1) return [0, 1];
    let res = fib(num - 1);
    res.push(res[res.length -1] + res[res.length - 2]);
    return res;
}
console.log('fibonacci', fib(10))

// FACTORIAL

function fact(num){
    if (num < 0) return -1;
    if(num === 0) return 1;
    return num * fact(num -1)
}
console.log('factorial of 4 is', fact(4))