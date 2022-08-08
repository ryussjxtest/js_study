////////////////////////////////////////////////////////////////////////////////
// async, await
// Promise의 then method를 chain으로 이용하는 것보다. 가독성이 더 좋아 진다.



// // Promise.race.
// // 말 그대로 race, 경주. 하나라도 완료되면 종료된다.
// // 아래 f2는 reject로 설정했으나..f1이 먼저 완료됨.
// const f1 = ()=>{
//   console.log("f1 function");
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve("1번 주문 완료");
//     },1000);
//   });  
// };

// const f2 = (message)=>{
//   console.log("f2 function");
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       reject("2번 주문 실패............."); 
//     },3000);
//   });  
// };

// const f3 = (message)=>{
//   console.log("f3 function");
//   return new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve("3번 주문 완료");
//     },4000);
//   });  
// };

// // promise.race   : 말그대로 경주
// // 이미지같은거 로딩시 하나라도 완료되면 보여주기 시작할수 있다.
// // 함수 배열로 받는다.  f1,2,3중 하나라도 완료되면 바로 종료된다.
// console.time('x');
// Promise.race([f1(), f2(), f3()]) // f1,2,3중 하나라도 완료되면 바로 종료된다.
//   .then((res)=>{
//     console.log(res); 
//     console.timeEnd('x');
//   });
//   // 결과. 주문2가 실패되기 전에 먼저 완료.
//   // 1번 주문 완료
//   // x: 1008.21484375 ms
//   // x: 1.005s



// // then chain.........
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
// // then chain. f1, f2, f3를 잘 보자. return.
// f1()
//   .then((res)=> f2(res))  // f1이 완료되면.... 그결과를 다시 f2전달.
//   .then((res)=> f3(res))  // f2가 완료되면.... 그결과를 다시 f3전달.
//   .then((res)=> {console.log(res)}) //f3는 그 결과를 console에..
//   .catch(console.log)   // error는 여기로.
//   .finally(()=>{        // 마치면...
//     console.timeEnd('s');
//     console.log('스크립트 종료.......終');
//     console.log('------------------------------');
//   })




// ////////////////////////////////////////////////////////////////////////////////
// // async
// // 함수앞에 async keyword를 붙이면...항상 Promise를 리턴한다.
// // getName1,2,3이 호출되면 async  구동되어 실행된다.
// async function getName(){
//   console.log('getName async function getName()')
//   return "Mike";
// }
// // // getName을 찍어보면 Promise가 리턴됨을 알수 있다  async때문...
// // console.log(getName()); // Promise { 'Mike' }

// // getName() 앞에 async가 붙어서 Promise가 리턴됨.
// // 따라서 getName()에 .then 사용가능.
// getName().then(
//   // (name)=>{    console.log(name);  } // 한줄에...풀어쓰면. 아래와 같다.
//   function(name){
//     console.log('getName then block.....................');
//     console.log(name);
//   }
// ) //getName()리턴한... 이름을 출력한다.


// // 만약 async가 붙은 fn이 Promise를 리턴하면.....
// async function getName2(){
//   console.log('getName2 async function getName2(), return Promise')
//   return Promise.resolve('Tom');
// }
// getName2().then(
//   (name)=>{    
//     console.log('getName2 then block.....................');
//     console.log(name);  
//   } 
// )

// // 예외 처리가 필요하면.... reject가 발생된다.
// async function getName3(){
//   console.log('getName3 async function getName3(), Error')
//   throw new Error('err........')
// }
// getName3().then(
//   (name)=>{    
//     console.log('getName3 then block.....................');
//     console.log(name);  
//   } 
// ).catch(
//   (err)=>{    
//     console.log('getName3 catch block.....................');
//     console.log(err);  
//   } 
// );





// ////////////////////////////////////////////////////////////////////////////////
// // await
// // await는 async가 선언된 함수 안에서만 사용가능.
// // 다른 함수에서 await를 사용하면 ERROR!!  ERROR!!  ERROR!!  ERROR!!

// function getName(name){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(name);
//     },5000);
//   });
// }

// async function showName(){
//   console.log('showName await getName')
//   const result = await getName('Mike'); 
//   // 여기서 showName()은 waiting걸림.
//   // 즉. promise가 처리 될때 까지 waiting한다.
//   // 아래 code는 await가 풀릴때 까지 즉, promise가 완료될때까지 기다려야 한다.

//   console.log('showName getName')
//   const result2 =  getName('Mike');
//   clearTimeout(tId);
//   console.log(result2)
// }
// console.log('.......................................');
// console.log('시작')

// let num = 0;
// function showTime(){
//   console.log( `안녕하세요. 접속하신지 ${num++}초 지났습니다.`);
//   if (num > 10){
//     clearTimeout(tId);
//   }
// }
// tId = setInterval(showTime, 1000);

// showName();

// console.log('완료')
// console.log('.......................................');






// ////////////////////////////////////////////////////////////////////////////////
// // 15강. promise의 then chain을 await로..
// // then chain 부분만 수정하자.
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
//   console.log('message : ', message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("2번 주문 완료");
//       // rej("2번 주문 ERROR");  //  => catch없으면 코드 error
//     },3000);
//   });  
// };

// const f3 = (message)=>{
//   console.log("f3 function");
//   console.log('message : ', message);
//   return new Promise((res,rej) => {
//     setTimeout(()=>{
//       res("3번 주문 완료");
//     },4000);
//   });  
// };

// console.log('------------------------------');
// console.log('스크립트 시작');
// console.time('s');

// // f1()
// //   .then((res)=> f2(res))
// //   .then((res)=> f3(res))
// //   .then((res)=> {console.log(res)})
// //   .catch(console.log)
// //   .finally(()=>{
// //     console.timeEnd('s');
// //     console.log('스크립트 종료.......終');
// //     console.log('------------------------------');
// //   })

// async function order(){
//   // 잘 보면... f1, 2,3각 각각 waiting걸려서 완료되어야 그 밑으로 넘어간다.
//   // 위의 then chain보다 가독성이 좋다.   더 많이 사용됨. 
//   // 잘 알아 놓자.. await.
//   try{
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//     console.log('message : ', result3);
//   } catch(errCode){
//     // f1.f2.f3중 reject되었을때를 대ㅣ하기 위함.이다.
//     // 없으면 Error난다.  f2를 rect로 수정해 보자.
//     console.log('try catch...error : ',errCode );
//   } 

//   console.timeEnd('s');
//   console.log('스크립트 종료.......終');
//   console.log('------------------------------');
// }

// order();




////////////////////////////////////////////////////////////////////////////////
// 15강. promise의 then chain을 await로..
// then chain 부분만 수정하자.
// 이번엔 Promise.all([fn1, fn2...])를 이용해 본다.
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
  console.log('message : ', message);
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res("2번 주문 완료");
      // rej("2번 주문 ERROR");  //  => catch없으면 코드 error
    },3000);
  });  
};

const f3 = (message)=>{
  console.log("f3 function");
  console.log('message : ', message);
  return new Promise((res,rej) => {
    setTimeout(()=>{
      res("3번 주문 완료");
    },4000);
  });  
};

console.log('------------------------------');
console.log('스크립트 시작');
console.time('s');
async function order(){
  try{
    // const result1 = await f1();
    // const result2 = await f2(result1);
    // const result3 = await f3(result2);
    // console.log('message : ', result3);
    const result_all = await Promise.all([f1(), f2(), f3()]);
    // 결과도 배열로... ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']

    // Promise.all은 모두 완료되어야 한다. 
    // f2를 reject로 바꾸고 test해 본다.
    // 아래 catch로 가면서 결과가 달라진다.
    
    console.log('Promise.all message : ', result_all);

  } catch(errCode){
    console.log('try catch...error : ',errCode );
  } 

  console.timeEnd('s');
  console.log('스크립트 종료.......終');
  console.log('------------------------------');
}

order();