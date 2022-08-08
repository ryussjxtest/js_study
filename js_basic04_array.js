// 배열, Array

////////////////////////////////////////////////////////////////////////////////
// // 선언  [] 이용
// // [object Array] (6)
// // 배열역시 즉 reference이다.  const를 써도 항목 접근, 삭제,변경은 가능하다.
// // 배열은 문자뿐만아니라 숫자, 객체, 함수등도 포함할수 있다.
// const students = ['철수', '영희', '바둑이', '성수', '길동이', '영수'];

// // 접근 indexing과 같다.
// // Zero base...
// console.log(students[0]);
// console.log(students[2]);
// console.log(students[4]);
// students[1] = '영자';
// students[5] = 100;
// console.log(students[1]);
// console.log(students[5]);
// console.log(students) // [object Array] (6)



// ////////////////////////////////////////////////////////////////////////////////
// // 배열은 문자뿐만아니라 숫자, 객체, 함수등도 포함할수 있다.
// let arr = [
//   '민수',  // 문자열
//   30,      //숫자
//   false ,  //불리언
//   {        //객체
//     name : '민수',
//     age : 30,
//     hobby : 'soccer',
//   },
//             // 함수
//   function(){
//     console.log("test");
//   },
// ];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3].name);
// console.log(arr[3].age);
// console.log(arr[3]['hobby']);
// // console.log(arr[4]) ;  // 함수 자체가 그대로 찍힘.
// console.log(arr[4]()) ;// 함수 실행 후. undefined가 찍힌다. 뭐지???나중에 알아 보자.






////////////////////////////////////////////////////////////////////////////////
// etc.
let days = ['월', '화','수','목','금','토',];

// //길이. arr.length
// console.log(days.length);

// // 추가. arr.push('item')   - stack 동작
// days.push('일')
// console.log(days.length, days[days.length-1]);
// console.log(days);


// // 복수개 추가.
// days.push('일',0)
// console.log(days.length, days[0], days[days.length-1]);
// console.log(days);

// // arr 추가. 
// let days_en = ['mon', 'tue',];
// days.push(days_en);
// console.log(days.length, days);

// // 삭제 pop 뒤에서 pop된다. 
// // push가 뒤에서 추가 되듯이....

console.log('days.pop()',days.pop());
console.log(days.length, days);
console.log('days.pop()',days.pop());
console.log(days.length, days);
days.pop(2); // 왜지???  개수도 index도 아니고..그냥 pop()과 동일하다.
console.log(days.length, days);


// // 앞쪽 추가(unshift), 제거(shift)  - 큐 동작
// days.unshift('일');
// console.log(days.length, days);

// days.unshift('금','토');
// console.log(days.length, days);

// days.shift();
// console.log(days.length, days);



// ////////////////////////////////////////////////////////////////////////////////
// // 반복문.
// // 회수를 알면 for,  모르면 while이 좋다.
// // 그런면에서 배열 접근은 for가 좋다.

// let days = ['월', '화','수','목','금','토',];

// // for문
// for (let i = 0; i < days.length ; i ++ ){
//   console.log(days[i]);
// } // for i in range(len(days)): //python



// // for .. of,           // Ojbect의 for....in과 혼동하지 말자. 사용은 가능하다. 단점이 많다.
// // for (변수 of Array)  .. 
// // python의 for문의 value가져오기와 유사. 개수를 몰라도 배열내의 값을 하나씩 읽어온다.
// for(let v of days){
//   console.log(v);
// } // for v in days: //python //혼동하지 말자.

//기본 for문을 사용할지... for...of를 사용할지는 index가 필요한지. 값만 알면 되는지 이다.

