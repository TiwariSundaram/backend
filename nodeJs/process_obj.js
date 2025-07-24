let obj = require("./math");

console.log("jay shree ram");



let arg = process.argv;
for(let i = 2 ; i<arg.length;i++){
    // console.log(`jay ${arg[i]}`);
    
}

console.log(obj);
console.log(obj.sum(7,9));
console.log(obj.mul(7,9));
console.log(obj.sub(7,9));
console.log(`value of pi is ${obj.pi}`);
console.log(`value of g is ${obj.g}`);
