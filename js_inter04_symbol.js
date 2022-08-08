// ////////////////////////////////////////////////////////////////////////////////
// // Symbol : 유일성 보장.
// // 유일한 식별자를 만들때 사용.    
// const a = Symbol();   // new를 사용하지 않는다.
// const b = Symbol();   // new를 사용하지 않는다.
// // console.log(typeof a);
// // console.log(typeof b);
// console.log(' a : ', a);
// console.log(' b : ', b);
// console.log('a==b',a==b)
// console.log('a===b',a===b)

// const id = Symbol('id'); // 문자열은 설명. 다른 영향은 주지 않는다.
// console.log('id : ', id);


// ////////////////////////////////////////////////////////////////////////////////
// // Symbol 활용
// const id = Symbol('id');
// const user = {
//   name : 'Mike',
//   age : 30,
//   [id] : 'myid',  // computed property로 ..
// }
// console.log(user);              // {name: 'Mike', age: 30, Symbol(id): 'myid'}
// console.log(Object.keys(user))  // ['name', 'age']  keys에서는 안나온다.
// // Object.keys(), Object.values(), Object.entries()  함수들은 Sysmbol형은 나타내지 않는다.
// // for 연산시에도 Sysbol은 건너 뛴다.
// for ( let k in user){
//   console.log(`${k} : ${user[k]}`)
// }



// ////////////////////////////////////////////////////////////////////////////////
// // Symbol.for() : 전역 symbol.  같은 Object를 가르키기 위함.
// // 하나의 심볼만 보장 받을수 있음
// // 없으면 만들고, 있으면 가져오기 때문
// // Symbol 함수는 매번 다른 symbol값을 생성 하지만,
// // Symbol.for method는 하나를 생성한 뒤 키를 통해 같은 Symbol을 보유.
// // Symbol.for method는 하나를 생성한 뒤 키를 통해 같은 Symbol을 보유.
// // Symbol.for method는 하나를 생성한 뒤 키를 통해 같은 Symbol을 보유.
// const id1 = Symbol.for('id');
// const id2 = Symbol.for('id');
// console.log('Symbol.for()')
// console.log('id1 === id2', id1===id2)
// console.log('id1 == id2', id1==id2)
// const id3 = Symbol('id');
// const id4 = Symbol('id');
// console.log('Symbol()')
// console.log('id3 === id4', id3===id4)
// console.log('id3 == id4', id3==id4)


// // Symbol.keyfor() : symbol값을 알려준다.
// // Symbol.for()로 생성한 symbol 즉, 전역 Symbol을 알려준다.
// console.log(Symbol.keyFor(id1))   // 'id'
// console.log(Symbol.keyFor(id2))   // 'id'
// console.log(Symbol.keyFor(id3))   // undefined.  Symbol.for()로 생성하지 않음.
// console.log(Symbol.keyFor(id4))   // undefined.  Symbol.for()로 생성하지 않음.

// // description
// // 전역 Symbol이 아닌 일반 Symbol의 경우 description으로 알수 있다.
// console.log(id3.description)      // 'id'
// console.log(id4.description)      // 'id'






// ////////////////////////////////////////////////////////////////////////////////
// // 숨겨진 Symbol key 보는 법.
// // 1. Object.getOwnPropertySymbols(obj) : Symbol을 보여준다.
// // 2. Reflect.ownKeys(obj) : Symbol을 포함한 모든 키를 보여준다.
// const id  = Symbol('id');
// const user = {
//   name : 'Mike',
//   age : 30,  
//   [id] : 'myid',
// }

// // 1. Object.getOwnPropertySymbols(obj) : Symbol을 보여준다.
// console.log(Object.getOwnPropertySymbols(user));    // [Symbol(id)]
// console.log(Object.getOwnPropertyDescriptor(user)); // undefined
// console.log(Object.getOwnPropertyNames(user));      // ['name', 'age']

// //2. Reflect.ownKeys(obj) : Symbol을 포함한 모든 키를 보여준다.
// console.log('Object.keys()     : ', Object.keys(user));      // ['name', 'age']
// console.log('Reflect.ownKeys() : ', Reflect.ownKeys(user));  // ['name', 'age', Symbol(id)]







// ////////////////////////////////////////////////////////////////////////////////
// // Symbol 실예.


// // ori code............................................
// // 다른 개발자가 만들어 놓은 객체
// const user = {
//   name : 'Mike',
//   age : 30,  
// }

// // .............

// // 내가 만약...showName이라는 method를 추가하면??? 
// user.showName = function () {};

//     // ori 출력문
//         // Your name is Mike
//         // Your age is 30

//     // 내 작업 이후... 출력문
//         // Your name is Mike
//         // Your age is 30
//         // Your showName is function () {}  => 의도치 않게 찍히게 된다.
// // .............

// // 사용자가 접속하면 보는 메시지
// for (let key in user){
//   console.log(`Your ${key} is ${user[key]}`);
// }




////////////////////////////////////////////////////////////////////////////////
// Symbol을 이용한 수정 code............................................
const user = {
  name : 'Mike',
  age : 30,  
}

// 내가 만약...showName이라는 method를 추가하면??? 
// user.showName = function () {};  -> 이럴때 Symbol를 활용한다.
// Symbol로 선언되면... for문, keys(), values(), entries()에서 안나온다.
// Symbol를 보고자 하는 특별한 함수가 아니면 보이지 않으므로 
// 나의 추가 작업이 이전 동작에 영향을 미치지 않는다.
const showName = Symbol('show name');
user[showName] = function(){
  console.log(this.name);
}

// 사용자가 접속하면 보는 메시지
for (let key in user){
  console.log(`Your ${key} is ${user[key]}`);
}
// 아래 추가된 함수 실행에 주의하자.
user[showName](); //'Mike'






