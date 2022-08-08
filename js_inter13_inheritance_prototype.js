// ////////////////////////////////////////////////////////////////////////////////
// // 상속과 prototype(__proto__)

// // hasOwnProperty('property')  property를 가지고 있는가? T/F.
// const user = {name : 'Mike'};
// console.log(user.name);
// console.log(user.hasOwnProperty('name'));
// console.log(user.hasOwnProperty('age'));
// // 그런데 hasOwnProperty()선언한 적이 없다.
// // 즉 상속받은 것이다. 없으면 부모에게 가서 찾는다.
// // user에 __proto__로 숨겨진 Object가 있다. brower console에서는 확인 가능.



// const user2 = {
//   name : 'Jane',
//   hasOwnProperty : function(name){
//     console.log(`HAHAHA ${name}`);
//   },
// };
// console.log(user2.name);
// user2.hasOwnProperty('name'); // HAHAHA name, override되어 새로 만든 fn이 실행됨.

// 함수 축약
// const user3 = {
//   name : 'Tom',
//   hasOwnProperty (name){
//     console.log(`함수 축약 ${name}`);
//   },
// };
// console.log(user3.name);
// user3.hasOwnProperty('name'); // HAHAHA name, override되어 새로 만든 fn이 실행됨




// ////////////////////////////////////////////////////////////////////////////////
// // prototype 예제
// // 이해를 돕기 위해 상속을 이용
// // 아래.. 객체들을 보면 겹치는 부분이 많음을 알수 있다. 

// // const bmw = {
// //   color : 'red',
// //   wheels : 4,
// //   navigation : 1,
// //   drive: function(){
// //     console.log('drive...');
// //   },
// // };
// // const benz = {
// //   color : 'black',
// //   wheels : 4,
// //   drive: function(){
// //     console.log('drive...');
// //   },
// // };
// // const audi = {
// //   color : 'blue',
// //   wheels : 4,
// //   drive: function(){
// //     console.log('drive...');
// //   },
// // };

// //상위객체 car를 만들고 상속하자.
// const car ={
//   wheels : 4,
//   drive: function(){
//     console.log('drive...');
//   },  
// };
// const bmw = { company:'bmw', color : 'red',  navigation : 1,};
// const benz = { company:'benz', color : 'black',};
// const audi = {  company:'audi',color : 'blue',};
// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;
// console.log(bmw);  // {color: 'red', navigation: 1}. car 부분은 숨겨져 있다.
// console.log(benz);
// console.log(audi);

// // prototype chain
// //상속은 계속된다.
// const x5 ={
//   color:'white',
//   name:'x5',
// };
// x5.__proto__ = bmw;
// console.log(bmw.company);
// console.log(x5.company); // x5 없다. __proto__ 인 bmw에서 찾는다.
// console.log(x5.color);   // x5에 있다. 자신의 white를 출력한다.
// x5.drive(); // x5없다. __proto__인 bmw에도 없다. 그위 car에 있다.
// // prototype chain...  
// // 결국 상속해준 상위 부모 객체로 찾아간다.

// // 객체 순회.
// console.log('객체 순회............');
// for (p in x5){ //숨겨져 있지만 사용자가 선언하고, 상속한 것들은 출력된다.
//   if (x5.hasOwnProperty(p)){
//     // 내가 추가로 선언한것인가?
//     console.log("Mine ",p);
//   } else {
//     console.log("Inherited ",p);
//   }
  
// }

// // Object.keys(), Object.values()에서는 나오지 않는다.
// // 이점을 잘 유의해서 사용해야 한다.
// console.log('Object.keys(x5)............');
// for (k of Object.keys(x5)){
//   console.log(k);
// }
// console.log('Object.values(x5)............');
// for (v of Object.values(x5)){
//   console.log(v);
// }





// ////////////////////////////////////////////////////////////////////////////////
// 생성자 함수를 이용해서도 비슷한 객체를 생성할수 있다.
// const Bmw = function(color){
//   this.company = 'BMW',
//   this.color = color;
//   this.wheels = 4;
//   this.drive = function(){
//     console.log('drive..');
//   }
// };

// const x5 = new Bmw('white');
// const x7 = new Bmw('blue');
// console.log(x5.color);
// console.log(x7.color);
// x5.drive();

// ////////////////////////////////////////////////////////////////////////////////
// // 위에도 중복이 있다 . 더 상위 car 생성자를 추가해 본다.
// const car = {
//   wheels : 4,
//   drive(){
//     console.log('drive..');
//   },
// };

// const Bmw = function(color){
//   this.color = color;
// };

// const x5 = new Bmw('white');
// const x7 = new Bmw('blue');
// x5.__proto__ = car;
// x7.__proto__ = car;
// console.log(x5.color);
// console.log(x7.color);
// x5.drive();

// ////////////////////////////////////////////////////////////////////////////////
// // __proto__ 를 반복해야 한다.
// // 생성자 함수를 사용하는 이유가 없다.
// // 더 간단히 해보자.
// const Bmw = function(color){
//   this.color = color;
// };
// // 생성자의 prototype를 직접 명시 한다. 한번만.
// Bmw.prototype.company = "BMW";
// Bmw.prototype.wheels = 4;
// Bmw.prototype.navi = 1;
// Bmw.prototype.drive = function(){
//   console.log('drive..');
// };
// Bmw.prototype.stop = function(){
//   console.log('stop drive..');
// };

// const x5 = new Bmw('white');
// const x7 = new Bmw('blue');

// console.log(x5.color);
// console.log(x7.company);
// x5.drive();
// x7.stop();




// ////////////////////////////////////////////////////////////////////////////////
// // instanceof,  constructor
// // 상속 관계를 확인한다. 생성자의 객체인지...
// const Bmw = function(color){
//   this.color = color;
// };
// // 생성자의 prototype를 직접 명시 한다. 한번만.
// Bmw.prototype.company = "BMW";
// Bmw.prototype.wheels = 4;
// Bmw.prototype.navi = 1;
// Bmw.prototype.drive = function(){
//   console.log('drive..');
// };
// Bmw.prototype.stop = function(){
//   console.log('stop drive..');
// };

// const x5 = new Bmw('white');
// const x7 = new Bmw('blue');

// console.log(x5 instanceof Bmw);      // true
// console.log(x5.constructor == Bmw);  // true




// ////////////////////////////////////////////////////////////////////////////////
// // instanceof,  constructor
// // 상속 관계를 확인한다. 생성자의 객체인지...
// const Bmw = function(color){
//   this.color = color;
// };
// // 생성자의 prototype를 이렇게 객체형식으로 묶어서 쓸수 있다. 
// // 하지만....  // constructor가 동작하지 않아.fale가 된다.
// Bmw.prototype = {
//   constructor : Bmw, // x5.constructor == Bmw ; True가 되기 위해 추가..
//   // 그래서 불편해도 위처럼 Bmw.prototype.xxxxxxx 로 직접 해주는것이 좋음.  
//   company : "BMW",
//   wheels : 4,
//   navi : 1,
//   drive() {
//     console.log('drive..');
//   },
//   stop() {
//     console.log('stop drive..');
//   },
// };
// const x5 = new Bmw('white');
// const x7 = new Bmw('blue');

// console.log(x5 instanceof Bmw);     // true
// console.log(x5.constructor == Bmw); // false가 됨.




////////////////////////////////////////////////////////////////////////////////
// Closure... 은닉하자.

const Bmw = function(color){
  this.color = color;
};

const x5 = new Bmw('red');
console.log(x5.color);
x5.color = 'black';  // 누구든지 변경가능하다.
console.log(x5.color);

const Bmw_closure = function(color){
  const c = color;
  this.getColor =  function(){
    console.log(c);
  };
};

const x7 = new Bmw_closure('red');
x7.getColor();
for (p in x7){
  console.log(p);
}

