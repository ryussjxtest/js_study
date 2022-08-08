// ////////////////////////////////////////////////////////////////////////////////
// // Promise
// // 요청사항이 완료되면 알려준다. event driven.. android의 provider같은거인듯
// // ..callback함수라고..

// // const pr = new Promise((resolve, reject) =>{
// //   // code
// //   // resolve(성공시 실행), reject (실패시 실행)
// // });

// // Promise의 property. {state, result}
// //                         state              result
// // new로 선언시         => pending(대기)      undefined
// // resolve(value) 호출 => fulfilled(이행됨)   value
// // reject(error) 호출  => rejected(거부됨)    error
 
// // 예제
// // 3초 실행됨. 
// // 판매자
// const pr = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     let test = Math.floor(Math.random()*10)+1
//     console.log(test)
//     if (test > 5){
//       resolve('OK.............')
//     }else{
//       reject('FAIL .............')
//     }
    
//   }, 3000)
  
// });

// // 소비자
// // pr.then(
// //   function(result){console.log(result);}, // 이행(resolve) 되었을때 실행, 인자는 resolve()가 넘기는값
// //   function(err){console.log(err);} // 거부(reject) 되었을때 실행, 인자는 reject()가 넘기는값. error
// // );

// // // catch  구문, 가독성도 좋고.. 오류 체크하지 좋다.
// // pr.then(
// //   function(result){console.log(result);},
// // ).catch( // 거부(reject) 되었을때 실행, 인자는 reject()가 넘기는값. error
// //   function(err){console.log(err);} 
// // );

// // then~catch~finally     try~exception처럼.
// pr.then(
//   function(result){console.log(result);},
// ).catch( // 거부(reject) 되었을때 실행, 인자는 reject()가 넘기는값. error
//   function(err){console.log(err);} 
// ).finally( // resolve, reject와 무관하게 항상 수행.
//   function(){console.log('Promise 완료............');}
// );
  
  


// ////////////////////////////////////////////////////////////////////////////////
// // Promise 사용 예.
// const pr = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     let test = Math.floor(Math.random()*10)+1
//     if (test > 5){
//       resolve('OK.............')
//     }else{
//       reject(new Error('Error.......... TT'))
//     }
//   },1000);
// });
// console.log('------------------------------');
// console.log('스크립트 시작');
// pr.then(
//   function(result){
//     console.log(result);
//   }
// ).catch(
//   function(error){
//     console.log(error);
//   }
// ).finally(
//   function(){
//     console.log('스크립트 완료');
//     console.log('------------------------------');
//   }
// )




// ////////////////////////////////////////////////////////////////////////////////
// // Promise 사용 예.2

// // 아래 callback hell을 promise를 활용하여. 방지한다.
// // const f1 = (callback)=>{
// //   setTimeout(()=>{
// //     console.log("1번 주문 완료")
// //     callback();
// //   }, 1000);
// // };
// // const f2 = (callback)=>{
// //   setTimeout(()=>{
// //     console.log("2번 주문 완료")
// //     callback();
// //   }, 3000);
// // };
// // const f3 = (callback)=>{
// //   setTimeout(()=>{
// //     console.log("3번 주문 완료")
// //     callback();
// //   }, 2000);
// // };
// // console.log('------------------------------');
// // console.log('스크립트 시작');
// // // callback hell
// // f1(function(){
// //   f2(function(){
// //     f3(function(){
// //       console.log('스크립트 완료');
// //       console.log('------------------------------');
// //     })
// //   })
// // });

// //위코드와 달리.. callback이 아닌 Promise chain이라고 한다.
// const f1 = ()=>{
//   console.log("f1 function");
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("1번 주문 완료");
//     },1000);
//   });  
// };

// const f2 = (message)=>{
//   console.log("f2 function");
//   console.log(message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("2번 주문 완료");
//     },3000);
//   });  
// };

// const f3 = (message)=>{
//   console.log("f3 function");
//   console.log(message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("3번 주문 완료");
//     },4000);
//   });  
// };

// console.log('------------------------------');
// console.log('스크립트 시작');
// console.time('s');
// f1()
//   .then((res)=> f2(res))
//   .then((res)=> f3(res))
//   .then((res)=> {console.log(res)})
//   .catch(console.log)
//   .finally(()=>{
//     console.timeEnd('s');
//     console.log('스크립트 종료.......終');
//     console.log('------------------------------');
//   })
    





// ////////////////////////////////////////////////////////////////////////////////
// // Promise.all.  chain이 아닌 동시에 전부 실행.
// // 주의사항 : 전부 성공해야 실행됨. 하나라도 오류나면 catch로 넘어간다.
// // 위의 예저는 총 1초 -> 3초 -> 4초.. 8초 소요됨.
// const f1 = ()=>{
//   console.log("f1 function");
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("1번 주문 완료");
//     },1000);
//   });  
// };

// const f2 = (message)=>{
//   console.log("f2 function");
//   console.log(message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("2번 주문 완료");
//     },3000);
//   });  
// };

// const f3 = (message)=>{
//   console.log("f3 function");
//   console.log(message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("3번 주문 완료");
//     },4000);
//   });  
// };

// // promise.all
// //함수 배열로 받는다.  f1,2,3가 전부 완료되어야 then 실행.
// // promise.all은 하나라도  reject되면 ERROR난다.
// // 전부 성공해야 보여주는 것에 사용하면 된다.
// console.time('x');
// Promise.all([f1(), f2(), f3()])
//   .then((res)=>{
//     console.log(res); // ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']    
//     console.timeEnd('x');
//   });

    



////////////////////////////////////////////////////////////////////////////////
// Promise.race.
// 말 그대로 race, 경주. 하나라도 완료되면 종료된다.
const f1 = ()=>{
  console.log("f1 function");
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res("1번 주문 완료");
    },1000);
  });  
};

const f2 = (message)=>{
  console.log("f2 function");
  console.log(message);
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res("2번 주문 완료");
    },3000);
  });  
};

const f3 = (message)=>{
  console.log("f3 function");
  console.log(message);
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res("3번 주문 완료");
    },4000);
  });  
};

// promise.race   : 말그대로 경주
// 이미지같은거 로딩시 하나라도 완료되면 보여주기 시작할수 있다.
// 함수 배열로 받는다.  f1,2,3중 하나라도 완료되면 바로 종료된다.
console.time('x');
Promise.race([f1(), f2(), f3()]) // f1,2,3중 하나라도 완료되면 바로 종료된다.
  .then((res)=>{
    console.log(res); 
    console.timeEnd('x');
  });
  // 1번 주문 완료
  // x: 1008.21484375 ms
  // x: 1.008s