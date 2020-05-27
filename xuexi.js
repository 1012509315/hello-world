// function a(){
//     this.a = '12'
// }
// a.prototype.b = '123'
// a.prototype = {
//     q:'123',
//     w:'234'
// }
// var c = new a()
// c.prototype = '123'
// console.log(c.construtor)
// console.log(a.prototype)
// console.log(a.__proto__)
// console.log(a.q)
//  var a = 0;
//  function adda(){

//     var a= a+1;
//  }
//  adda()
//  function b(){
//      adda()
//  }
//  b()
//  setTimeout(b,1000)
// setTimeout(()=>{
//     console.log(a)
// }, 2000)
//  console.log(a)
// function b(){
//     return new Promise((resolve,reject)=>{
//         console.log('4')
//         setTimeout(() => {
//             console.log("1")
//             resolve(1)
//         }, 0)
//     })
    
// }
// async function a(){
//     console.log('5')
//     var f
//     f = await  '1'
//     console.log("f:",f)
//     console.log('2')
// }
// a()
// console.log('3')

// const arr = [1,2,3,4]
// arr = 1 
// //arr.length = 0
// console.log(arr[0])

// var foo = 1;
// function bar(a) {
//     console.log(a);
//     foo = 2;
// }
// bar(1)
// console.log(foo);

// var a = [null]
// console.log('typeof a :>> ', a instanceof Array);
// function c() {
//     var a = b = [1];
// }
// c()
// console.log(b);
var a = 10;
var b = 0;
b===0?b=a-1:null;
b === 0 ? b = a - 1 : null;
console.log('b :>> ', b);