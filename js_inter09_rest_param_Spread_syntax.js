// ////////////////////////////////////////////////////////////////////////////////
// // 나머지 매개변수(rest parameters)와 전개 구문(Spread syntax)
// // JS는 인자(parameter, args)개수를 맞출 필요가 없다.
// // 정상적으로 동작이 안할뿐이다.
// function showName(name, name2){
//   console.log(name);
//   console.log(name2);
// }

// console.log("인자가 더 많을때");
// showName('Mike', 'Tom','Jane');

// console.log("인자가 더 적을때, 없을때");
// showName('Mike'); // Error는 안나지만,, undefined...




// ////////////////////////////////////////////////////////////////////////////////
// // arguments
// // 함수로 넘어 온 모든 인수에 접근
// // 함수내에서 이용가능한 지역 변수
// // length / index
// // Array 형태의 객체
// // 배열의 내장 메서드 없음(forEach, map 등은 사용못한다.)
// function showName(name){
//   // 넘어온 name과 무관하게 arguments 로 접근가능 (다른언어 args, kargs 등등)
//   console.log(arguments.length);
//   for (let idx = 0; idx < arguments.length ; idx ++){
//     console.log(arguments[idx]);
//   }
// }
// showName()
// showName("Mike");
// showName("Mike","Jame");
// showName("Mike","Jame","Tom");




// ////////////////////////////////////////////////////////////////////////////////
// // ES6 이상에서는 나머지 매개변수를 이용한다.
// // rest parameters     ...
// function showName(...names){ //names가 args list를 받는다.
//   console.log(names);
// }
// showName();                     // []
// showName("Mike");               // ['Mike']
// showName("Mike","Jame");        // ['Mike', 'Jame']
// showName("Mike","Jame","Tom");  // ['Mike', 'Jame', 'Tom']




// ////////////////////////////////////////////////////////////////////////////////
// // ES6 이상에서는 나머지 매개변수를 이용한다.
// // rest parameters     ...
// // 나머지 매개변수는 forEach, map, reduce 전부 사용가능하다.
// // 실용예제
// // 전달받은 모든 수를 합산한다.
// function add(...args){
//   let tot = 0;
//   // //////////////////
//   // // 1. for
//   // for(v of args){
//   //   // console.log(typeof v);  
//   //   tot += v;
//   // }

//   // /////////////////
//   // // 2. forEach
//   // args.forEach((num)=>{tot += num });

//   ///////////////////
//   // 3. reduce
//   tot = args.reduce((prev,curr)=>{return prev+curr;},0);
//   console.log(tot);
// }

// add(1,2,3);
// add(1,2,3,4,5,6,7,8,9,10);











// ////////////////////////////////////////////////////////////////////////////////
// // rest parameters     ...
// // 실용예제 2
// // User객체를 만들어 주는 생성자 함수를 구현하라.
// // 나머지변수(rest parameters는 마지막에 배치해야한다.)


// // 나머지변수(rest parameters는 마지막에 배치해야한다.)
// // 뒤에 다른 변수가 나오면 안된다.
// function User(name, age, ...skills){ 
//   this.name = name;
//   this.age = age;
//   this.skills = skills
// }
// user1 = new User('Mike', 30, 'html');
// user2 = new User('Jane', 23, 'html', 'js', 'css');
// user3 = new User('Tom', 20) 

// // 나머지 변수는 배열 형태로 User객체가 만들어 진다.
// // 나중에 접근할때 주의 하자.
// console.log(user1) // User { name: 'Mike', age: 30, skills: [ 'html' ] }
// console.log(user2) // User { name: 'Jane', age: 23, skills: [ 'html', 'js', 'css' ] }
// console.log(user3) // User { name: 'Tom', age: 20, skills: [] }





// ////////////////////////////////////////////////////////////////////////////////
// // 전개구문   Sperad syntax : 배열

// // 배열관련  arr.push(), arr.splice(), arr.concat() 할때 매우 유용하다.
// let arr1 = [1,2,3,4];
// let arr2 = [5,6];
// let spreadArr = [0, ...arr1, ...arr2, 7];
// console.log(spreadArr); //[0, 1, 2, 3, 4, 5, 6, 7]



// ////////////////////////////////////////////////////////////////////////////////
// //  전개구문. : 복제
// let arr = [1,2,3];
// console.log(arr)
// // let arr2 =arr;     // reference만 복제되어 같은 메모리 공간을 가르키게 된다.
// // arr2[0] = 10;      // arr도 변경된 값을 가르키케됨.
// // console.log(arr);  // [10,2,3]
// // console.log(arr2); // [10,2,3]

// let arr3 = [...arr];
// arr3[0] = 10;       // 복제된 값만 변경됨.
// console.log(arr);   // [1,2,3] 변함없음.
// console.log(arr3);  // [10,2,3]

// let user = {name:'Mike', age:30,};
// // let user2 = user;
// // user2.name = 'Jane';
// // console.log(user);  // {name: 'Jane', age: 30} 으로 변경됨.
// // console.log(user2); // {name: 'Jane', age: 30}
// let user3 = {...user};
// user3.name = 'Jane';
// console.log(user);  // {name: 'Mike', age: 30} 그대로 유지됨.
// console.log(user3); // {name: 'Jane', age: 30}




// ////////////////////////////////////////////////////////////////////////////////
// // 전개구문 예제
// // arr1을 [4,5,6,1,2,3] 으로
// arr1 = [1,2,3];
// arr2 = [4,5,6];
// // console.log(arr2.length);

// // // 1. for
// // cnt = arr2.length;
// // for(let idx=0; idx < cnt ; idx++){
// //   // console.log(idx, arr2.pop(), arr2);
// //   arr1.unshift(arr2.pop());
// // }
// // console.log(arr1);

// // // 2. forEach
// // // arr2.forEach((item)=>{
// // //   arr1.unshift(item);  // [6, 5, 4, 1, 2, 3] //의도 하지 않은결과.
// // // });

// // // 뒤에서 부터 넣어야 한다.  reverse() 를 이용한다.
// // // console.log(arr2.reverse());
// // arr2.reverse().forEach((item)=>{
// //   arr1.unshift(item);  // [4, 5, 6, 1, 2, 3]
// // });
// // console.log(arr1); 

// // 3. 전개구문
// arr1 = [...arr2, ...arr1];
// console.log(arr1);  // 매우 simple하다. 




////////////////////////////////////////////////////////////////////////////////
// 전개구문 예제, 객체
let user = {name : "Mike",};
let info = {age : 30,};
let skill = ['JS', 'React',];
let lang = ["Kor","Eng",];

// //1. Object.assign()
// let user1 = Object.assign({}, user, info,{skills:skill});
// // { name: 'Mike', age: 30, skills: [ 'JS', 'React' ] }
// let user2 = Object.assign({}, user, info,{skill:skill},{lang:lang});
// console.log(user);
// console.log(info);
// console.log(user1);
// console.log(user2);

// 2. 전개구문.
// const user1 = {...user, ...info,skill:skill,lang:lang};
const user1 = {
  ...user,
  ...info,
  skill:[...skill, ...lang],  // skill에서 한번더 전개구문 써보자.
};
console.log(user1);
