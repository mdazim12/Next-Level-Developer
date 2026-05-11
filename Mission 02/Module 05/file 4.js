

const {a: x}= require('./file 3'); // 100
const {a: y} = require('./file 5'); // 200


const {f1 : add} = require('./utility/index')

// const add = require('./utility/add')

console.log(add(x,y));

// console.log(x,y);