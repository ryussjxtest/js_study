// ////////////////////////////////////////////////////////////////////////////////
// // setTimeout(fn, msec) : 일정시간이 진나후 함수를 실행
// function fn(){
//   console.log('함수 선언. fn 실행됨..');
// }
// console.log('before call setTimeout(fn, 3000)');
// setTimeout(fn, 3000);
// console.log('after call setTimeout(fn, 3000)');


// console.log('before call setTimeout(함수식, 5000)');
// setTimeout(function(){
//   console.log('함수식. 실행됨.');
// }, 5000);
// console.log('after call setTimeout(함수식, 5000)');


// ////////////////////////////////////////////////////////////////////////////////
// // setTimeout(fn, msec, args) : 일정시간이 진나후 함수를 실행
// function showName(name){
//   console.log(name);
// }
// console.log('before call setTimeout');
// const tId = setTimeout(showName, 3000, 'Mike') // 3번째 부터 인자들은 showName으로 전달
// console.log('after call setTimeout',tId);

// console.log('before call setTimeout');
// const tId2 = setTimeout(function(name){
//   console.log(name);
// }, 5000, 'Jane') // 3번째 부터 인자들은 showName으로 전달
// console.log('after call setTimeout', tId2);

// ////////////////////////////////////////////////////////////////////////////////
// // clearTimeout(tId); timeout 해제.  즉 실행전 scheduling 취소.
// // tId = setTimeout(fn, msec, args);    
// clearTimeout(tId2);
// console.log('clearTimeout(tId2)')




// ////////////////////////////////////////////////////////////////////////////////
// // setInterval : 일정 시간 간격으로 함수를 반복
// // 지속 반복하는 것을 제외 하면 setTimeout과 동일하다.
// // setInterval(fn, msec, args) : 일정시간이 진나후 함수를 실행
// // delay = 0으로 설정해도 현재 script가 완료된후 실행된다.
// function startShowName(name){
//   let today = new Date(); 
//   console.log(today.toLocaleDateString(), today.toLocaleTimeString());
//   console.log(name);
// }
// const tId = setInterval(startShowName, 3000, 'Mike') // 3번째 부터 인자들은 showName으로 전달

// function endShowName(tId){
//   let today = new Date(); 
//   console.log('End setInterval');
//   console.log(today.toLocaleDateString(), today.toLocaleTimeString());
//   clearTimeout(tId);
// }
// setTimeout(endShowName, 15000, tId);




// ////////////////////////////////////////////////////////////////////////////////
// // setTimeout, setInterval
// // delay = 0으로 설정해도 현재 script가 완료된후 실행된다.
// setTimeout(function(){
//   console.log(1);
// }, 0); // delay = 0으로 설정해도 현재 script가 완료된후 실행된다.
// console.log(2);



////////////////////////////////////////////////////////////////////////////////
// 실습 예제
let num = 0;
function showTime(){
  console.log( `안녕하세요. 접속하신지 ${num++}초 지났습니다.`);
  if (num > 10){
    clearTimeout(tId);
  }
}

tId = setInterval(showTime, 1000);