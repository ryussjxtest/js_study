////////////////////////////////////////////////////////////////////////////////
// call, apply, bind : 
// 함수 호출 방식과 관계없이 this를 지정할수 있다.

// ////////////////////////////////////////////////////////////////////////////////
// // call : 
// // fn.call(obj, ...args)
// //       call의 첫번째 인자는 fn을 method인것 처럼 사용할 객체.
// //       그 이후 인자는 fn이 사용할 인자들이다.
// // call method는 모든 함수에서 사용할수 있음.
// // this를 특정값으로 지정할수도 있음.

// const mike = {  name : "Mike", };
// const tom = {  name : "Tom", };
// const jin = {  name2 : "jin", };

// function showThisName(){
//   console.log(this.name);
// }

// // 아무 동작도 안일어남. 
// showThisName(); // undefined, codepen의 경우 'CodePen'이 찍힘.

// // call을 통해 객체를 전달하면...
// // 해당 함수(showThisName)가 해당 객체의 method 인것 처럼 사용가능.
// // 해당 함수(showThisName)가 해당 객체의 method 인것 처럼 사용가능.
// // 해당 함수(showThisName)가 해당 객체의 method 인것 처럼 사용가능.
// showThisName.call(mike);
// showThisName.call(tom);
// showThisName.call(jin); // undefined : jin은 name없다. name2가 있다. 
// // call의 첫번째 인자는 this로 사용할 값이다.   

// function update(birthYear, occupation){
//   // 누가 호출할지 모르지만. 출생년도와 직업을 update한다.
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.call(mike, 1973,'whiteColor');
// console.log(mike);
// update.call(tom, 2000,'gamer');
// console.log(tom);
// update.call(jin, 2002,'singer');
// console.log(jin);



// ////////////////////////////////////////////////////////////////////////////////
// // apply : 
// // fn.applay(obj, [...args])
// // apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 동일.
// // call은 일반적인 함수와 마찬가지로 매개변수를 직접 받는다.
// //    --> fn.call(obj, ...args)
// // 하지만, apply는 매개변수를 배열로 받는다.


// // 위의 call에서 사용한 code를 그대로 apply로만 적용해 본자.
// const mike = {  name : "Mike", };
// const jin = {  name2 : "jin", };

// function showThisName(){
//   console.log(this.name);
// }

// // 아무 동작도 안일어남. 
// showThisName(); // undefined, codepen의 경우 'CodePen'이 찍힘.

// // apply 통해 객체를 전달하면...
// // 해당 함수(showThisName)가 해당 객체의 method 인것 처럼 사용가능.
// showThisName.apply(mike);
// showThisName.apply(jin); // undefined : jin은 name없다. name2가 있다. 
// // apply의 첫번째 인자는 this로 사용할 값이다.   

// function update(birthYear, occupation){
//   // 누가 호출할지 모르지만. 출생년도와 직업을 update한다.
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// // 정확하게 update가 사용할 매개변수 전달부분만 다르다.
// update.apply(mike, [1973,'whiteColor']);
// console.log(mike);
// update.apply(jin, [2002,'singer']);
// console.log(jin);




// ////////////////////////////////////////////////////////////////////////////////
// // apply 예제
// // apply를 배열의 인자를 
// const nums = [3, 10, 1, 6, 4];
// // const minNum = Math.min(nums); // NaN
// // const maxNum = Math.max(nums); // NaN

// const minNum = Math.min(...nums); // spread syntax
// const maxNum = Math.max(...nums); // spread syntax
// console.log(nums);
// console.log(minNum); 
// console.log(maxNum); 

// // 배열의 요소를 함수의 인자로 사용할때 유용하다.
// // 배열의 요소를 함수의 인자로 사용할때 유용하다.
// // 배열의 요소를 함수의 인자로 사용할때 유용하다.
// // min, max는 this를 사용하지 않기에 첫번째 인자로 아무거나 넣어도 무관.
// // apply니까. array로 받는다. 라임.. a.a
// const minNum2 = Math.min.apply(null,nums);
// console.log(minNum2); 

// // call은 인자가 차례로 나와야 하므로 spread연산자...사용..
// // call과 apply의 차이점이다.   유의하자.
// const maxNum2 = Math.max.call(null, ...nums);
// console.log(maxNum2); 




// ////////////////////////////////////////////////////////////////////////////////
// // bind : 함수의 this값을 영구히 바꾼다.
// // 추후 this에 해당 하는 객체를 지정하지 않아도 된다는 의미.

// const mike = {  name : "Mike", };
// // const jin = {  name2 : "jin", };
// function update(birthYear, occupation){
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }
// // updateMike 함수는 항상 this를 mike로 고정한다.
// // 추후 this에 해당 하는 mike를 지정하지 않아도 된다는 의미.

// const updateMike = update.bind(mike);
// updateMike(1973, 'designer');
// console.log(mike); // {name: 'Mike', birthYear: 1973, occupation: 'designer'}




////////////////////////////////////////////////////////////////////////////////
// bind : 사용예제

const mike = {
  name : 'Mike',
  showName : function(){
    console.log( `Hello!!, ${this.name}`);
  },
};

mike.showName();
let fn = mike.showName; //user.showName() 하면 함수가 실행된다.
console.log(typeof fn); // function
// 의도와 달리 Mike가 찍히지 않는다.  this를 잃어버린것이다.
fn(); // Hello!!, undefined

fn.call(mike);  // this를 전달하기 위해 call
fn.apply(mike); // this를 전달하기 위해 apply

let bindFn1 =  mike.showName.bind(mike); // bind
let bindFn2 =  fn.bind(mike); // bind
console.log('bindFn1');
bindFn1();
console.log('bindFn2');
bindFn2();
