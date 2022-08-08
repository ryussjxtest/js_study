////////////////////////////////////////////////////////////////////////////////
// 클로저(Closure)
// 변수와 hoistiong. 함수 선언문...의 선행학습 필요.


// // JS는 어휘적 환경을 갖는다.
// // 어휘적 환경(Lexical Environment)
// let one;
// one = 1;
// function addOne(num){
//   console.log(one + num);
// }
// addOne(5);

// // 위의 코드는 시작하자 마자. 
// // hositing으로... Lexcial 환경에 올라 간다.
// // one:초기화 안된상태.. 따라서 사용은 못한다.
// // addOne:function , 함수는 바로 초기화되어 어디서든 사용가능.
// // let one; -> one:undefined 할당. 사용가능하나 undefined
// // one = 1; -> one:1 할당, 사용가능. 1.
// // function addOne(num){ -> hoisting으로 시작할때 초기화
// // addOne(5); -> 새로운 내부 Lexical환경 (addOne용)이 만들어 진다.
// //                num:5 생성됨.(인자 5를 num이 받음.) <- addOne(num)
// // console.log(one + num); -> num은 내부 Lexical 환경에서
// //                   -> one이 없으므로 전역 Lexical 환경에서 읽어온다.



// ////////////////////////////////////////////////////////////////////////////////
// // Lexical 환경 예제 하나더.
// function makeAdder(x){
//   return function(y){
//     return x+y;
//   }
// }
// const add3 = makeAdder(3);
// console.log( add3(2));
// // 최초 실행시 전역Lexical환경에는
// // makeAdder:function 초기화, add3:초기화x. 사용못함. 이 올라간다.
// // const add3 = makeAdder(3); 구문에서 makeAdder용 Lexical환경 만들어짐.
// // makeAdder용 Lexical환경 => x:3이 만들어짐.(인자로 넘어옴.)
// // 전용 Lexical 환경 => add3:function으로 할당됨. makeAdder()의 리턴값
// // 여기가 중요함/
// // console.log( add3(2)); 구문에서..익명함수용lexical이 또 만들어 진다.
// // 익명 Lexical 환경 => y:2,  add3(2)에서 인자로 2가 넘어온다.
// //               -> x+y를 하려고 x를 찾는데 없다.
// //               -> makeAdder를 참조하여 3을 가져 온다.
// //               -> 둘을 더해 5를 리턴한다.
// // 다시 정리하면.
// // function(y) 익명함수는 y를 가지고 있고,
// // 상위함수는 makeAdder의 x에 접근 간능하다.

// const add10 = makeAdder(10);
// console.log( add10(5)); // 15 => y:5 => x:10
// console.log( add3(1));  // 4  => y:1 => x:3

// /////////// Closure
// // 함수와 Lexical 환경의 조합
// // 함수가 생성될 당시의 외부 변수를 기억 하고
// // 생성 이후에도 계속 접근 가능
// // 외부 함수의 호출이 완료되어도 내부 함수는 외부 함수의 환경을 참조.
// // 위의 add10, add3이 각각 다른 x를 참조 하는 것이다.



////////////////////////////////////////////////////////////////////////////////
// 예제로 더 살펴보자.
// Clouser 예제
function makeCounter(){
  let num = 0;
  return function(){
    return num++;
  }
}
// counter() 내부 함수는 외부 함수 makeCounter() num을 참조 한다.
// counter, counter2 가지고 있는 num이 각각다른 num이다.
// 그리고 선언된 num을 수정할수 없다. == 은닉화 성공.
// 선언된 counter를 통해 num을 하나씩 증가시킬수 있다.
let counter = makeCounter();
let counter2 = makeCounter();
console.log("counter  : ",counter());
console.log("\tcounter2 : ",counter2());
console.log("counter  : ",counter());
console.log("counter  : ",counter());
console.log("\tcounter2 : ",counter2());



