////////////////////////////////////////////////////////////////////////////////
// Generator
// 함수의 실행을 중간에 멈췄다가 재개할수 있는 기능..
// function다음에 별(*) 있다. // function다음에 별(*) 있다.
// method  : next(), return(), throw() 등이 있다.
// Iterable - Symbol.iterator 메서드가 잇다.
//          - Symbol.iterator는 iterator를 반환해야 한다.
// iterator - next 메서드를 가진다.
//          - next 메서드는 value와 done 속성을 가진 객체를 반환한다.
//          - 작업이 끝나면 done은 true가 된다.

// ////////////////////////////////////////////////////////////////////////////////
// function* genFn() {
//   yield 42;
// }
// const gen = genFn();
// console.log(gen === gen[Symbol.iterator]());

// // 이 말인 즉슨, 제너레이터의 이터러블은 다음과 같은 방식으로 구현되어 있을 거라는 것을 암시한다.
// // generator[Symbol.iterator] = () => this;




////////////////////////////////////////////////////////////////////////////////
// yield / next
// yield는 제너레이터 함수의 실행을 일시적으로 정지시키며, 
// yield 뒤에 오는 표현식은 제너레이터의 caller에게 반환된다.
// 즉, 일반 함수의 return과 매우 유사하다고 볼 수 있다.

// 여기서 제너레이터 함수는 Callee이고, 이를 호출하는 함수가 Caller이며, 
// Caller는 Callee의 yield 부분에서 다음 statement로 진행을 할 지 여부를 제어한다. 
// 이는 next로 인해 재개될 수 있다.
// yield와 next의 관계를 보고 이러한 의문이 생길 수 있다. 
// 모든 yield를 처리하기 위해 그만큼의 next를 사용해야 하나?
// 그럴 수도 있고, 아닐 수도 있다.
// next를 일일이 호출하지 않고, programmitically하게 호출하게 하려면, 
// 다음과 같이 재귀 호출을 하면 된다.
// 아래 예제 코드는 홀수는 그대로 출력을 하고, 짝수에는 1을 더하여 출력하는 Runner이다
// function* sampleGFunction() {
//   console.log(yield 10); // yield 구문옆의 값이 value.이다.
//   console.log(yield 5);
//   console.log(yield 0);

//   // return 'sampleGFunction finish'
//   // return이 없으면. 아래 run func에서 done시 return되는 값이 없어 undefined가 된다.
// }

// function run(gen) {
//   const it = gen();

//   // 여기가 return이구만...뭘 이리 어렵게 짜 놓은 거냐. ㅠㅠ
//   // return {}  -> 한줄이면 ()  근데 한줄이 함수다. 헐....

//   // 아래 보면... done 이 true 즉 gen function이 다 호출될때 까지 재귀호출된다.
//   (function iterate({ value, done }) {
//     console.log(`value[${value}], done[${done}]`);
    
//     if (done) { 
//       console.log(`done is [${done}]. return value[${value}]`);
//       // 마지막 return 값이다. genFn에 return값이 없으므로 undefined가 return된다.
//       // sampleGFunction에 리턴값을 넣어 보면..알수 있다.
//       return value;
//     }
    
//     // 여기서 재귀 호출 한다.
//     if (value % 2 === 0) {
//       console.log(`value[${value}] is even so + 1. and next(${value+1})`)  ;
//       iterate(it.next(value + 1));
//     } else {
//       console.log(`value[${value}] is odd. so do nothing.and next(${value})`)  ;
//       iterate(it.next(value));
//     }
//   })(it.next());
// }

// run(sampleGFunction);
// // 11
// // 5
// // 1



// ////////////////////////////////////////////////////////////////////////////////
// // Generator는...*... * ... function* fn(){
// function* fn(){
//   console.log(1);
//   yield 1;  // yield{value, done:실행여부(T/F)} 
//   console.log(2);
//   yield 2;
//   console.log(3);
//   console.log(4);
//   yield 3;

//   return 'finish';
// }

// function run(gen){
//   const it = gen();

//   return function iterate({ value, done }) {
//   // (function iterate({ value, done }) {
//     if(done){
//       console.log(value); // 'finish'겠지??
//       return value;
//     }
//     console.log(value);
//     // 정확히 여기가 재귀
//     // 인자가 it.next().  아래 아래...함수 선언 다음에 느닷없는 it.next()를 보라. 
//     // 그것이 인자로 넘겨준것이다. 잘 보라.
//     iterate(it.next(value));  
//   }(it.next());
//   // )(it.next());

// }
// run(fn);




////////////////////////////////////////////////////////////////////////////////
// Generator는...*... * ... function* fn(){}
// 함수의실행을 중간에 멈췄다가 재개할수 있는 기능
// method  : next(), return(), throw() 등이 있다.

// Iterable - Symbol.iterator 메서드가 잇다.
//          - Symbol.iterator는 iterator를 반환해야 한다.

// iterator - next 메서드를 가진다.
//          - next 메서드는 value와 done 속성을 가진 객체를 반환한다.
//          - 작업이 끝나면 done은 true가 된다.




// ////////////////////////////////////////////////////////////////////////////////
// // 배열도 iterator이다.
// // browser > F12 > console에서 배열의 __proto__를 보면 iterator가 들어 있다.
// // 결국 value는 배열의 요들의 값이다.
// const arr = [1, 2, 3, 4, 5]
// function run(gen){
//   // const it = gen();
  
//   // 괄호의 위치....
//   const it = gen[Symbol.iterator]();

//   (function iterate({ value, done }) {
//     if(done){
//       console.log("DONE........")
//       console.log("DONE........ value : ", value)
//       return value;
//     }
//     console.log(value);
//     // 정확히 여기가 재귀
//     // 인자가 it.next().  아래 아래...함수 선언 다음에 느닷없는 it.next()를 보라. 
//     // 그것이 인자로 넘겨준것이다. 잘 보라.
//     iterate(it.next(value));  
//   })(it.next());

// }
// run(arr);
// // 배열은 Symbol.iterator method를 가지고 있고.
// // Symbol.iterator가 반환하는 값이 iterate이므로 .... 배열은 iterable하다고 할수 있다.
// // 즉 배열은 반복가능 객체이다.   
// // iterable은 for...of로 순회 확인가능하다. ........ 그래서...iterable해서....
// for( let v of arr){
//   console.log(v);
// }


////////////////////////////////////////////////////////////////////////////////
// 다시 처음.... 언급했던 코드...

// function* genFn() {
//   yield 42;
// }
// const gen = genFn();
// console.log(gen === gen[Symbol.iterator]());
// 이 말인 즉슨, 제너레이터의 이터러블은 다음과 같은 방식으로 구현되어 있을 거라는 것을 암시한다.
// generator[Symbol.iterator] = () => this;

// // 쉽게....
// function* fn(){
//   yield 4;
//   yield 5;
//   yield 6;
//   return 'finish';
// }

// const a = fn();
// // a(즉 fn)의 generator(즉, Symbol.iterator) 를 실행a[Symbol.iterator]() 한 값이 자신 a(fn)
// console.log('a === a[Symbol.iterator]() => ', a === a[Symbol.iterator]());
// console.log(a[Symbol.iterator]); // Symbol.iterator가 있는지 확인.

// // 그래서 for ...of로 순회가능하다.
// for(let v of a){
//   console.log(v)
// }




// ////////////////////////////////////////////////////////////////////////////////
// // 그렇다면 문자열은
// let test = 'is string a iterable???';
// console.log(test[Symbol.iterator]); // Symbol.iterator가  있는가?
// // for ... of를 쓸수 잇으나....뭐 있겠지..역시 있다...

// function run(gen){
//   // const it = gen(); // gerator이면...  funcrtion* genFn..(){}
//   // 근대 배열이나. 문자열은 Symbol.iterator를 불러와야 한다.
//   const it = gen[Symbol.iterator]();

//   //바로 return
//   (function iterate({value, done}){
//     if (done){
//       console.log("DONE..........");
//       console.log("DONE..........", value);
//       return value;
//     }
//     // 여기서 재귀호출들어간다.~~
//     console.log(value);
//     iterate(it.next());
//   })(it.next());
// }

// run(test);

// for (let v of test){
//   console.log(v)
// }


// ////////////////////////////////////////////////////////////////////////////////
// // Generantor
// // next()에 인수를 전달해 보자.

// function* fn(){
//   const num1 = yield '첫번째 숫자를 입력해 주세요';
//   console.log(num1);

//   const num2 = yield '두번째 숫자를 입력해 주세요';
//   console.log(num2);

//   return num1 + num2;
// }

// const a = fn()
// // 여기 아래 부분은.... 강사는 broswer  > F12 > console에서 하는데...구동이 안된다. ㅠㅠ
// a.next(1);
// a.next(2);
// a.next();



// ////////////////////////////////////////////////////////////////////////////////
// // Generantor
// // 값을 미리 만들어 두지 않는다.
// // while(true) 지만 호출될때만 한번 실행된다.

// function* fn(){
//  let index = 0;
//  while(true){
//   console.log(index);
//   yield index ++;
//  }
// }

// const a = fn()
// for(let i = 0 ; i < 10; i++){
//   // const isAdult = confirm("계속 할까요?");
//   // if(isAdult){
//     a.next();
//   // }  
// }




////////////////////////////////////////////////////////////////////////////////
// Generantor
// yield*를 이용 다른 gernerator 호출하기.
function* gen1(){
  yield "W";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2(){
  yield "Hello, ";
  yield* gen1();
  yield "!!";  
}

const a = gen2();
a.next();
a.next();
a.next();
