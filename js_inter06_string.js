// ////////////////////////////////////////////////////////////////////////////////
// // 작은따옴표('), 큰따옴표("), 백틱(`)
// // 작은따옴표('), 큰따옴표(")  : 문자열에 나오는 기호에 따라 사용한다.   기능은 동일하다.

// // 작은따옴표(') : 인용문이나, html에서 만이 사용한다.
// let html = '<div class="box_title"> 제목 영역</div>';
// let quot = 'He said, "Hi"';
// console.log(html);
// console.log(quot);

// // 큰 따옴표(') : 일반적인 문자.
// let desc = "It's 3 o'clock. I'm good... ";
// console.log(desc);

// // String안에 작은따옴표('), 큰따옴표(") 다 나오면????   \', \"  와 같이 역슬래쉬(\)와 같이 사용한다.
// let reverseSlash = 'I\'m good. He said "Hi"';
// console.log(reverseSlash);

// // 백틱(``) formating문자열... python의 f'', ''.format()과 유사.
// // 여러줄 표현에 용이함.
// let name = "Mike";
// let result = `my name is ${name}`
// let add = `2더하기 3은
// ${2+3}입니다.` // 백틱은 여러줄에도 용이하다.
// console.log(name);
// console.log(result);
// console.log(add);




// ////////////////////////////////////////////////////////////////////////////////
// // length : 문자열 길이, 한글도 1자..로..
// let add = `2더하기 3은
// ${2+3}입니다.` // 백틱은 여러줄에도 용이하다.

// // 문자열 접근 array와 같다.
// console.log(add.length);
// for (let i = 0 ; i < add.length; i++){
//   console.log(i, add[i]);
// }

// add[add.length-1] = '!'
// console.log(add); // python과 유사하게.. string은 상수..이므로 변경이 안된다.




// ////////////////////////////////////////////////////////////////////////////////
// // toUpperCase() : 대문자로
// // toLowerCase() : 소문자로

// ////////////////////////////////////////////////////////////////////////////////
// // String.indexOf() : 인자가 나타나는 index.. zero base.
// // zero base. if문에서 주의 해야 한다.
// let desc = 'Hi guys. Nice to meet you'
// console.log(desc.indexOf('y'));   // 처음 나타나는 index를 리턴.
// console.log(desc.indexOf('g'));   
// console.log(desc.indexOf('guy')); // 문자열은 완벽하게 일치해야 함.
// console.log(desc.indexOf('to')); // 문자열은 완벽하게 일치해야 함.

// console.log(desc.indexOf('Hi'));   // 0 리턴됨. 주의 할것.
// console.log(desc.indexOf('man')); // -1, 없으면 ... 역시 주의 할것.

// if(desc.indexOf('Hi')){
//   // 0, if문에서 0은 fasle. 의되와 다르게 출력되지 않는다.
//   console.log('Hi가 포함된 문장입니다.'); 
// }

// // 따라서 아래와 같이 -1 보다 큰지 비교해야 한다. 0도 포함되므로..
// if(desc.indexOf('Hi') > -1){
//   console.log('Hi가 포함된 문장입니다.'); 
// }




// ////////////////////////////////////////////////////////////////////////////////
// // str.slice(start, end)  : slicing...  start ~ end-1 까지 
// // 주의 할것 
// // end : 없으면 즉, 인수가 하나이면.. 문자열 끝까지
// //     : 양수이면,,,그 숫자 앞 인덱스까지...즉 end-1 까지.
// //     : 음수 이면... 끝에서 부터
// let desc = '0123456789'
// console.log(desc.slice(3));    // end 생략시 끝까지.
// console.log(desc.slice(3,5));
// console.log(desc.slice(3,-2)); // -1이 n번재, -2는 n-1번째   



// ////////////////////////////////////////////////////////////////////////////////
// // str.substring(start, end)  : slice 와 유사.
// // 주의 할것 
// // start와 end가 바뀌어도 상관없다.  즉, 두수 사이의 글자이다.
// // 음수 불가.  음수는 0으로 인식..
// // 작은수 ~ 큰수-1 까지... 인덱스임...
// let desc = '0123456789'
// console.log(desc.substring(3));    // end 생략시 끝까지.
// console.log(desc.substring(3,5));
// console.log(desc.substring(3,-2)); // 음수는 0으로  
// console.log(desc.substring(3,0));  // 위와 같다.
// console.log(desc.substring(0,3));  // 위와 같다.





// ////////////////////////////////////////////////////////////////////////////////
// // str.substr(start, cnt)  : 개수 만큼 가져온다.
// // cnt는 개수 이므로 양수 여야 한다.
// let desc = '0123456789'
// console.log(desc.substr(3));    // cnt없으면 끝까지.
// console.log(desc.substr(3,1));  // [3] 부터 1개
// console.log(desc.substr(3,2));  // [3] 부터 2개
// console.log(desc.substr(3,-1)); // 음수는 오류. Error는 아니고. '' 리턴되는듯.
// console.log(desc.substr(0,3));  // [0] 부터 3개위와 같다.




// ////////////////////////////////////////////////////////////////////////////////
// // str.trim() : 앞뒤 공백제거
// // str.repeat() : 반복
// console.log('str.repeat()',"Hi!..\n".repeat(10));




// ////////////////////////////////////////////////////////////////////////////////
// // 실습
// let list = [
//   '01. 들어가며',
//   '02. JS의 역사',
//   '03. 자료형',
//   '04. 함수',
//   '05. 배열',
// ];
// console.log(list);

// // 숫자를 떼고 제목만 넣고 싶다면...
// let newList = []

// // for(let l in list){ // object에서.. for in
// for(let l of list){    // array에서는 for of
//   // console.log(l);
//   console.log(l.slice(4));
//   newList.push(l.slice(4));
// }
// console.log(newList);




// ////////////////////////////////////////////////////////////////////////////////
// // 금칙어 : 콜라     를 찾아라..
// // 해결 1. str.indexOf('콜라') > -1
// function hasCola (str){
//   // if (str.indexOf('콜라')){  // 이렇게만 하면. 논리적 오류에 빠진다.
//   // 반드시 -1보다 큰지 체크해야 한다.
//   if (str.indexOf('콜라') > -1){  // 없으면 -1,   처음이면0 리턴됨. 주의 하자.
//     console.log('금칙어가 있습니다.');
//   } else {
//     console.log('통과');
//   }
// }
// hasCola('와 사이다 맛있다.'); // -1. 콜라 없음.
// hasCola('아냐. 콜라야');      // 양수 0 리턴.
// hasCola('콜라');             // 0 리턴

// // 해결2 str.indexOf('콜라') == -1
// // 이게 논리적일수 있다.
// function hasCola2 (str){
//   if (str.indexOf('콜라') == -1){  //없는것에 대해 처리
//     console.log('통과');
//   } else {
//     console.log('금칙어가 있습니다.');
//   }
// }
// hasCola2('와 사이다 맛있다.'); // -1. 콜라 없음.
// hasCola2('아냐. 콜라야');      // 양수 0 리턴.
// hasCola2('콜라');             // 0 리턴


// // 해결3. includes
// // 포함되면 true, 아니면 false
// function hasCola3 (str){
//   if (str.includes('콜라') ){ //포함되면 true 리턴...
//     console.log('금칙어가 있습니다.');
//   } else {
//     console.log('통과');
//   }
// }
// hasCola3('와 사이다 맛있다.'); // -1. 콜라 없음.
// hasCola3('아냐. 콜라야');      // 양수 0 리턴.
// hasCola3('콜라');             // 0 리턴




// ////////////////////////////////////////////////////////////////////////////////
// // split
// const str = 'Hello, World';

// const splited = str.split('')
// console.log(typeof splited);
// console.log(splited);

// const splited2 = str.split(', ')
// console.log(splited2);


// ////////////////////////////////////////////////////////////////////////////////
// // join
// const nums = [1,2,3,4]
// const joined = nums.join(':');

// console.log(joined);


// ////////////////////////////////////////////////////////////////////////////////
// // arr.reverse
// const str = 'Hello, World';

// console.log(str.split(''));
// console.log(str.split('').reverse());
// console.log(str.split('').reverse().join(''));