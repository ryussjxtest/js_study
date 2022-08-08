//변수

// let, const, var

// ////////////////////////////////////////////////////////////////////////////////
// var
// var 같은 변수를 2번 이상 선언 가능
// var name = "Mike";
// console.log(name);

// var name = "Jane";
// console.log(name);


// ////////////////////////////////////////////////////////////////////////////////
// // let 같은 변수를 2번 이상 선언 하면 오류난다.
// let name = "Mike";
// console.log(name);

// let name = "Jane";  // Uncaught SyntaxError: Identifier 'name' has already been declared 
// console.log(name);





// ////////////////////////////////////////////////////////////////////////////////
// // var. 함수처럼 선언전에 사용 해도 Error 안남.  다만, 오동작.
// console.log(name);  // 에러는 안나지만.... 오동작...  undefined.
// var name = "Mike";  // 호이스팅. hoisting.  파일 가장위에 var name;이 선언된거 처럼 동작.
//                     // 그러나 함수와 달리 선언은 hoisting되어 에러는 안나지만,,, 
//                     // 할당(assign) 은 hoisting 되지 않아 undefined처리된다. codepan에서는 "CodePen"이 찍힌다.



// ////////////////////////////////////////////////////////////////////////////////
// // TDZ (Temporal Dead Zone)
// let age = 30;
// function showAge(){
//   console.log(age);  // global age를 사용.  에어 없이 잘 동작
// }
// showAge();           // global age를 사용.  에어 없이 잘 동작

// function showAge2(){
//   ////////////////////// TDZ(Temporal Dead Zone)
//   console.log(age);  // 아래 구문에 의해 age가 TDZ에 hoisting되고, 할당되지 않은 age 사용으로 Error!!!!!
//                      // Cannot access 'age' before initialization
//   let age = 20;      // Hoisting .. let도 hoisting됨을 보여준다. 
//                      // Hoisting은 scope단위로 일어난다. 여기서는 function showAge2안에서..Hoisting됨.
                    
// }
// showAge2();          // let이 hoisting되기 떄문에 


// ////////////////////////////////////////////////////////////////////////////////
// 변수의 생성과정
// 1. 선언단계
// 2. 초기화 단계
// 3. 할당 단계

// var는 1. 선언및 초기화 단계 (초기화: undefienced를 항당 해주는 단계)
//       2. 할당단계.
      
// let은 1. 선언단계
//       2. 초기화 단계
//       3. 할당 단계
// const는 1. 선언 + 초기화 + 할당이 한번에.  
//         ** 초기화 이후 변경이 불가함.

// ////////////////////////////////////////////////////////////////////////////////
// var name1;
// name1 = 'Mike';
// console.log(name1);

// let name2;
// name2 = 'Mike';
// console.log(name2);

// const name3;    // 여기서 에러남. const 선언,초기화,할당이 한번에 되어야함 - 값을 바꿀수 없다.
//                 // Missing initializer in const declaration
//                 // const 역시 hoisting됨을  위의 출력문이 출력되기 전에 error난다.
// name3 = 'Mike';
// console.log(name3);



// ////////////////////////////////////////////////////////////////////////////////
// // 스코프 (Scope)
// // var : 함수 스코프(function-scoped)
// // let, const  : 블록 스코프(block-scoped)
// // -> 함수, if, for, while, try/catch문 등등.


// // var : 함수 스코프(function-scoped)
// function add(){
//   // Block-level  Scope
// }

// // let, const  : 블록 스코프(block-scoped)
// // -> 함수, if, for, while, try/catch문 등등.
// function add(){
//   // Block-level  Scope
// }
// if(){
//   // Block-level  Scope
// }
// for (let i = 0 ; i < 10 ; i ++){
//   // Block-level  Scope
// }






////////////////////////////////////////////////////////////////////////////////
// 스코프 (Scope)
// var : 함수 스코프(function-scoped)
// let, const  : 블록 스코프(block-scoped)
// -> 함수, if, for, while, try/catch문 등등.

// ////////////////////////////////////////////////////////////////////////////////
// // var는 function scope이기 때문에 함수 밖에서 못씀.
// function add(num1, num2){
//   var result = num1 + num2;
// }
// add(2,3);
// console.log(result);   // result is not defined .. ERROR
//                        // var는 function scope이기 때문에 함수 밖에서 못씀.



// ////////////////////////////////////////////////////////////////////////////////
// // var.  함수 scope이기 때문에 if 블럭 안에서 선언되었지만 사용가능.
// const age = 30;
// if(age > 19){
//   var var_txt = '성인';
// }
// console.log(var_txt);  // '성인'  정상동작
//                        // var_txt var.  함수 scope이기 때문에 if 블럭 안에서 선언되었지만 사용가능.



// ////////////////////////////////////////////////////////////////////////////////
// // const 는 block scoped  이므로... {} 안에 선언된 변수는 {} 밖에서 사용 못함
// const age = 30;
// if(age > 19){
//   const const_txt = '성인';
// }
// console.log(const_txt);  // const_txt is not defined ..   ERROR!!!!!!
//                          // const 는 block scoped  이므로... {} 안에 선언된 변수는 {} 밖에서 사용 못함



// ////////////////////////////////////////////////////////////////////////////////
// // let역시 ocnst와 마찬가지로  block scoped  이므로... {} 안에 선언된 변수는 {} 밖에서 사용 못함
// const age = 30;
// if(age > 19){
//   let let_txt = '성인';
// }
// console.log(let_txt);  // let_txt is not defined ..   ERROR!!!!!!
//                        // let역시 ocnst와 마찬가지로  block scoped  이므로... 
//                        // {} 안에 선언된 변수는 {} 밖에서 사용 못함







