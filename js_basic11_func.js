// 함수 선언문과 표현식, 화살표 함수
// 함수 선언문과 표현식의 호출방법은 동일하다.
// 다만 함수 표현식의 경우 선언 위치와 호출 위치가 중요핟


// /////////////////////////////////////////////////////
// // 함수 선언문
// // 오류 안남.  Hoisting에 의해 JavaScript가 선언된 함수를 
// // 어느 곳에서도 사용 가능하게 전용 Lexical영역으로 저장(옮겨?) 한다.
// sayHello('Mike');
// function sayHello(name){
//   console.log(name);
// }




// /////////////////////////////////////////////////////
// // 함수 표현식
// // ERROR남... 찾을수 없다.
// // 함수 표현식은 먼저 사용 불가.
// // sayHello('Jane'); // Cannot access 'sayHello' before initialization
// let sayHello  = function(name){
//   console.log(name);
// }
// sayHello('Jane');



/////////////////////////////////////////////////////
// 화살표 함수(arrow function)

// // 0. 기본형
// let add = function(num1 ,num2){
//   return num1 + num2;
// }
// console.log(add(2,3));


// // 1. 화살표 함수로...  function이 => 가 되는 느낌???
// let add = (num1 ,num2)=>{
//   return num1 + num2;
// }
// console.log(add(2,3));


// // 2. 화살표 함수 
// // 본문이 return 한줄. {} 괄호 생략
// // 리턴문은 괄호()로 변경가능.
// let add = (num1 ,num2)=>(num1 + num2)
// console.log(add(2,3));


// // 3. 리턴문이 한줄이면???? 리턴문 괄호도 생략
// let add = (num1 ,num2)=>num1 + num2;
// console.log(add(2,3));


// // 4. 인자가 하나?
// // 인자 괄호도 생략
// let sqrt = num1=>num1 **2 ;
// console.log(sqrt(3));


// // 5. 인자가 없다면...
// // 인자가 없으면..괄호는 필수...
// let sqrt = ()=>'Mike' ;
// console.log(sqrt());


// // 6. return전에 다른 코드가 있다면.
// // return문의 () 사용 못함.
// let add = (num1 ,num2)=>{
//   const result = num1 + num2
//   return result;
// }
// console.log(add(2,3));
