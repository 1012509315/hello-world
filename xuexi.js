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
// var a = 10;
// var b = 0;
// b===0?b=a-1:null;
// b === 0 ? b = a - 1 : null;
// console.log('b :>> ', b);
// var num = [1,2,3]
// var arr = num.map((params)=>{
//     console.log('this', typeof this)
//     return params*2;
// })
// console.log('global', global)
//console.log('arr', arr)

// var regex = /a/g;
// console.log( regex.test("a"),regex.lastIndex)
// console.log( regex.test("aba"),regex.lastIndex)
// console.log( regex.test("ababb"),regex.lastIndex)

// var regex = /a/g;

// for (var i = 0; i <5; i++) {
//     regex = /a/g;
//     console.log(regex.test("ababb"), regex.lastIndex)
// }
// var regex = /c(?<=a)/
// console.log(regex.test("cab"))
// console.log("cab".replace(regex,"1"))
// console.log(regex.test("ab"))
// var a= {n:10};
// var b = a;
// b.m = b = {n:20};
// // b={n:20}
// // var c = a ={n:30}
// console.log(b.m)
// console.log(b)
// // console.log(c)
// console.log(a)
// console.log("123456".replace(/(?!^)(?=(\d{3})+$)/g, ","))
// const foo = {
//     a:1,
//     1:1,
//     1.0:2,
//     "1":3,
//     "1.0":4
// }
// console.log(foo[1.0])
// console.log(foo["1.0"])

// let foo = [1,2,3]
// foo["12"]=4
// console.log(foo[12])
// foo.length = 8
// console.log(foo[12])
// console.log(foo.a)

// (function a(params) {
//     console.log(a);
//     var a=3;
//     console.log(a);
// })()
// import sum from "./ceshi01"

// console.log(sum(1,1))
// var obj = { name0: "11", name1: "22", name2: "33" };
// for (var key in obj) {
//     console.log(key)
// }

// let a = {x:1}
// // const b = [a]
// const b = [ a]
// // b[0].x = 2
// a=1
// console.log(b)
// const foo = {
//     name:"zhangsan",
//     say(){
//         console.log(this.name)
//     }
// }
// foo.say();
// (foo.say)();
// (0,foo.say)();
// var a = ["1","2","3","22"].map(parseInt)
// console.log(a)
// console.log(parseInt("1",0))
// console.log(parseInt("2",1))
// console.log(parseInt("3",2))
// console.log(Number(null))
// let arr = [,1,,2,,3];
// arr = arr.map((i)=> ++i)
// console.log(arr)
// var s = ""
// console.log(s instanceof Object)
// console.log(s instanceof String)
// console.log(typeof s)
// console.log(s is String)

// var a = [1,2,3].indexOf(3)
// var b = [1,2,NaN].indexOf(NaN)
// var c = [1,2,"qi"].includes(NaN)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(NaN === NaN)

// function foo(){
//     // if(this.__proto__ === foo.prototype){
//     //     console.log("yes")
//     // }else{
//     //     console.log("no")
//     // }
//     if (this instanceof foo) {
//         console.log("yes")
//     } else {
//         console.log("no")
//     }
// }
// new foo();
// foo();
// console.log(foo instanceof Object)

// var set = new Set([1,2,3])
// var set = new Map();
// set.set(1,"111")

// var a = [].slice.apply(set)
// var b = [].map.call(set,o=>o)
// console.log(a)
// console.log(Array.from(set))
// console.log([...set])
// console.log(b)

// for(var i=0;i<10;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }

// var a = {q:1,w:2};
// var b = a;
// console.log(Object.assign({},a, { e: 3 }))

// console.log(b)

// var a = (res) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(res)
//         }, 1000);
//     })
// }
// new Promise((res)=>{
//     console.log(1)
//     res(1)
// }).then((res)=>{
//     console.log(res)
//     return "2";
// }).then(a
// ).then((res)=>{
//     console.log(res)
// })

// let a = setTimeout(() => {
//     console.log(a)
// }, 1000);
// console.log("1",a)

// var a = [1]
// console.log(a.valueOf())
// console.log(a.toString())
// console.log(a)

// var a = [10,2,3,5,7,2,3,1,6,4]
// var b = a.sort((i,j)=>{
//     return i-j
// })
// console.log(b)
// console.log(b[4])

// function name() {
//     this.a = 11;
//     var b = 2;
//     c = 2;
//     this.addB=function(){
//         b++;
//         console.log(b)
//         // console.log(this.b)
//     };
//     this.addA=()=>{
//         this.a++;
//         console.log(this.a)
//         // console.log()
//     }
// }
// var copyA = new name();

// // copyA.addA();
// copyA.addB();

// var copyB = new name();

// // copyB.addA();
// // copyA.addA();
// // copyB.addA();
// copyB.addB();
// copyB.addB();
// copyB.addB();
// copyA.addB();
// copyB.addB();


// var a = [1,2,[3,4]]
// console.log([].concat(...a))
// console.log(...a)
// console.log(Infinity)
// console.log(1+1+"1a")

var {3:a} = {'3':1}    //[0,1,2,3,4]
console.log(a)