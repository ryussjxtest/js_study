////////////////////////////////////////////////////////////////////////////////
// methods/ computed property.

// ////////////////////////////////////////////////////////////////////////////////
// // Computed property
// let a = 'age';
// const user = {
//     name : 'Mike',
//     // age:30,
//     [a] : 30, // a의 결과 즉 age:30과 동일하다.
//               // 이를 computed property라고 한다.
// }
// console.log(user);


// ////////////////////////////////////////////////////////////////////////////////
// const user = {
//     name : 'Mike',
//     age : 30,
//     [1+4] : 9,
//     3:7,
//     ['안녕'+'하세요'] : 'hello',
//     // [ ] 안의 결과가 변수가 된다.
// }
// console.log(user);
// for (let x in user){
//     console.log(x, typeof x);
// }
// console.log(user[3]);
// // console.log(user.3); // 이거는 ERROR난다.
// console.log(user['안녕하세요']);



// ////////////////////////////////////////////////////////////////////////////////
// // 실용적인 예제
// // 어떤 것이 key될지 모르는 객체를 만들때 computed property가 용이하다.
// function makeObj(k, v){
//   return {
//     [k]:v,
//   };
// }
// const obj = makeObj('성별','male');
// obj2 = Object.assign(makeObj('name','Mike'),obj)
// console.log("obj", obj)
// console.log("obj2", obj2)



////////////////////////////////////////////////////////////////////////////////
// Methods.   
// Object.assign()  : 복사... referece가 아닌 또하나의 복제..  python의 .copy()
// Object.keys()    : python dict.keys()
// Object.values()  : python dict.values()
// Object.entries() : python dict.items()
// Object.fromEntries()


// ////////////////////////////////////////////////////////////////////////////////
// // 일반 복사... referce가 복사됨.
// const user = {
//     name : 'Mike',
//     age : 30,
// }
// const newUser  = user;        // 단순 할당은 reference만 복사한다. 둘이 같은 메모리를 가리킨다.
// newUser.name = 'Jane';  // newUser의 이름을 바꾸었지만.
// console.log(user.name); // 결국 같은 메모리를 가르키므로... user도 바뀐다.
// console.log(newUser.name);

// ////////////////////////////////////////////////////////////////////////////////
// // Object.assign()  : 복사... referece가 아닌 또하나의 복제..  python의 .copy()
// const user = {
//     name : 'Mike',
//     age : 30,
// }
// // Object.assign()
// const newUser  = Object.assign({},user); //{} object초기화후, user로 복사.
// newUser.name = 'Jane';     // newUser의 이름을 바꾸었지만.
// console.log(user.name);    // Mike
// console.log(newUser.name); // Jane..  



// ////////////////////////////////////////////////////////////////////////////////
// // Object.assign()  : 인자로 property추가.
// const user = {
//     name : 'Mike',
//     age : 30,
// }
// // Object.assign({hobby:'soccor'},user)
// const newUser  = Object.assign({hobby:'soccor'},user); // property 추가.
// newUser.name = 'Jane';
// console.log(user);
// console.log(Object.keys(user));    // (2) ['name', 'age']
// console.log(newUser);
// console.log(Object.keys(newUser)); // (3) ['hobby', 'name', 'age']



// ////////////////////////////////////////////////////////////////////////////////
// // Object.assign()  : 인자로 property추가.  인자가 겹치면 덮어쓴다.
// // 결과가 예상과 다르다...주의 하자.
// const user = {
//     name : 'Mike',
//     age : 30,
// }
// // property 추가. 겹침.
// const newUser1  = Object.assign({name:'Jane',age:22}, user); 
// // newUser1 :  Jane,22 할당한후 user로 덮어씀.    Mike, 30
// const newUser2  = Object.assign(user, {name:'Tom'});  
// // newUser2 : Mike,30로 초기화후 Tom덮어씀. Tom,30... 덮어쓴다음 초기화 하나???
// // 이때 user의 name도 Tom으로 변경된다. 주의 하자.

// console.log('user' , user);             // user {name: 'Tom', age: 30}
// console.log('newUser1' , newUser1);     // newUser1 {name: 'Mike', age: 30}
// console.log('newUser2' , newUser2);     // newUser2 {name: 'Tom', age: 30}






// ////////////////////////////////////////////////////////////////////////////////
// // Object.assign() : 겍체 복제
// const user = {
//     name : 'Mike',
// }
// const info1 = {
//     age : 30,
// }
// const info2 = {
//     hobby:'soccor',
// }
// const newUser1  = Object.assign(user, info1, info2); 
// console.log(newUser1); //{name: 'Mike', age: 30, hobby: 'soccor'}

// // 크게 중요하진 않지만...  object의 순서에 따라 결과도 순서가 다르다.
// const newUser2  = Object.assign(info2,info1, user); 
// console.log(newUser2); //{hobby: 'soccor', age: 30, name: 'Mike'}

// console.log(newUser1.name == newUser2.name);    // true
// console.log(newUser1.age == newUser2.age);      // true
// console.log(newUser1.hobby == newUser2.hobby);  // true





// ////////////////////////////////////////////////////////////////////////////////
// const user = {
//     name : 'Mike',
//     age : 30,
//     gender : 'male',
// }
//
// // Object.keys()    : 키 배열을 반환하다.  마치 python dict.keys()와 유사.
// // 다만, 사용 방법이 다름. Object.keys(object)
// console.log(Object.keys(user)); //(3) ['name', 'age', 'gender']
//
// // Object.values()    : 값 배열을 반환하다.  마치 python dict.values()와 유사.
// // 다만, 사용 방법이 다름. Object.values(object)
// console.log(Object.values(user)); //(3) ['Mike', 30, 'male']
//
// // Object.entries()    : 키/값 배열을 반환하다.  마치 python dict.items()와 유사.
// // 다만, 사용 방법이 다름. Object.entries(object)
// console.log(Object.entries(user)); 
// // [
// //     ['name', 'Mike'],
// //     ['age', 30],
// //     ['gender', 'male'],
// // ]
// // console.log(Object.entries(user)[0]); 
// console.log(Object.entries(user)[1]);
// console.log(Object.entries(user)[2]);



// ////////////////////////////////////////////////////////////////////////////////
// // Object.fromEntries()
// // Object.entries()와 반대로   [key,value] 조합의 배열들로 object를 생성한다.
// const arr = [
//     ['name', 'Mike'],
//     ['age', 30],
//     ['gender', 'male'],
// ];
// const user = Object.fromEntries(arr);
// console.log(user, typeof user); // {name: 'Mike', age: 30, gender: 'male'} object










