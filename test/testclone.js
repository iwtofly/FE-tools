let Clone = require('../clone.js');

let o1 = ['iwtofly', {age: 23}, [1,2,3]];
let shallow = Clone.shallowClone(o1);
let deep = Clone.deepClone(o1);

console.log(shallow);
console.log(deep);

console.log('shallow is equal to o1? ',shallow === o1);
console.log('deep is equal to o1? ', deep === o1);

console.log('shallow[1] is equal to o1[1]? ',shallow[1] === o1[1]);
console.log('deep[1] is equal to o1[1]? ', deep[1] === o1[1]);