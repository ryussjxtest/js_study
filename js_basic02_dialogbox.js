////////////////////////////////////////////////////////////////////////////////
// alert 알려줌
// prompt('출력문','defalut값') 입력받음, 무조건 문자형(string)
// confirm 확인받음
// -> 단점 1.스크립트 일시정시
// 2. 스타일링 X
// -> 장점. 빠르고 간단핟.

// alert("틀림");

// const name = prompt('이름을 입력하세요');
// alert(`${name}님은 게임을 너무 오래 하고 있습니다. 주의 하세요`);

// const name2 = prompt('이름을 입력하세요','홍길동');

// const isAdult = confirm('당신은 성인입니까?','예','아니오');
// alert(isAdult);
// console.log(isAdult)

// alert('안녕하세요! 빌리블입니다<br>info@billible.co.kr로 궁금한 점은 문의하세요',{em:'Billible',title:'인사'})



////////////////////////////////////////////////////////////////////////////////
// String() -> 문자형으로 변환
// Number() -> 숫자형으로 변환
// Boolean() ->불린형으로 변환

// const mathScore = prompt('수학 점수를 넣으시오');
// console.log(typeof mathScore);
// const engScore = prompt('영어 점수를 넣으시오');
// const result = (Number(mathScore) + Number(engScore))/2;
// console.log(result);

// if (result > 90) {
//   console.log(result);
//   alert("축하합니다. 합격입니다");
// } else {
//   console.log(result);
//   alert('좀더 열심히 부탁합니다.');
// }

// 자동형변환, 의도적으로 변형후 계산해야 한다.   error가 나지 않으므로..
// console.log('-------------------------------------------------')
// console.log('6'+'2')
// console.log('6'+2)
// console.log('6'*2)
// console.log('6'*'2')



////////////////////////////////////////////////////////////////////////////////
// String()
// let aaa
// console.log('-------------------------------------------------')
// console.log(
//   String(3),
//   String(true),
//   String(5<4),
//   String(null),
//   String(NaN),
//   String(aaa)
//   )



////////////////////////////////////////////////////////////////////////////////
// Number()
// let aaa
// console.log('-------------------------------------------------')
// console.log(
//   Number('3'),   // -> 3
//   Number(true),  // -> 1
//   Number(5<4),   // -> 0
//   Number(null),  // -> 0
//   Number(NaN),   // -> NaN
//   Number(aaa)    // -> NaN
//   Number(undefined),   // -> NaN
//   )




////////////////////////////////////////////////////////////////////////////////
// Boolean()
// false <- 숫자 0, 빈문자열(''), null, undeftined, NaN)
// let aaa
// console.log('-------------------------------------------------')
// console.log(
//   Boolean('3'),   // -> true
//   Boolean(true),  // -> true
//   Boolean(5<4),   // -> false
//   Boolean(null),  // -> false
//   Boolean(NaN),   // -> false
//   Boolean(aaa)    // -> false
//   )




////////////////////////////////////////////////////////////////////////////////
// 비교연산자
// == 같은지 비교
// === 같은지 type까지 비교
// let a = 1
// let b = '1'

// console.log('-------------------------------------------------')
// console.log('- 비교연산자 -')
// console.log('-------------------------------------------------')
// console.log('a == b ? ',a == b)
// console.log('a === b ? ',a === b)
// // console.log("a == b ? {0}".format(a == b))
// // console.log("a === b ? {0}".format(a === b))
// console.log('a == b ? {0}'.format(a == b))
// console.log('a === b ? {0}'.format(a === b))

// console.log('{0} + {1} = {2}'.format(4, 5, 9));
// let a = 4;
// let b = 5;
// let c = 6;
// console.log(`${a} + ${b} = ${a*b}`);


// let str = '';
// for (let a = 1 ;  a < 10 ; a ++){
//   str = '';
//   for(let b = 2 ; b < 6 ; b ++){
//     str += String(`${b} * ${a} = ${a*b} `)
//     // str += String('%2d * %2d = %2d  '.format(a,b,a*b));
//     // console.log(`${b} * ${a} = ${a*b}`);
//   }
//   console.log(str);  
// }


////////////////////////////////////////////////////////////////////////////////
// Java script는 문자열 formatting을 지원 안한다. 만들어 써야 한단당...

// String.prototype.format = function() {
//     var formatted = this;
//     for( var arg in arguments ) {
//         formatted = formatted.replace("{" + arg + "}", arguments[arg]);
//     }
//     return formatted;
// };
// console.log("{0} + {1} = {2}".format(4, 5, 9));
// console.log("{1} + {2} = {3}".format(4, 5, 9));
// console.log("{0} + {0} = {1}".format(4, 5));


// String.prototype.format2 = function() {
//     var formatted = this;
//     for (var i = 0; i < arguments.length; i++) {
//         var regexp = new RegExp('\\{'+i+'\\}', 'gi');
//         formatted = formatted.replace(regexp, arguments[i]);
//     }
//     return formatted;
// };
// console.log("{10} + {0} = {1}".format2(4, 11, 4, 8, 4, 8, 4, 8, 4, 8, 7));

// let val1 = 4, val2 = 5, val3 = 13;
// console.log(`${val1} + ${val2} + ${val1} = ${val3}`);
// console.log('${val1} + ${val2} + ${val1} = ${val3}');


// String.prototype.format3 = function() {
//     var formatted = this, i = 0;
//     while (/%s/.test(formatted))
//         formatted = formatted.replace("%s", arguments[i++]);
//     return formatted;
// }
// console.log("%s + %s = %s".format3(4, 5, 9));


// String.format4 = function(formatted) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     return formatted.replace(/{(\d+)}/g, function(match, number) { 
//         return typeof args[number] != 'undefined' ? args[number] : match;
//     });
// }
// console.log(String.format4("{0} + {1} = {2}", 4, 5, 9));


// String.prototype.format5 = function() {
//     return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
// };
// console.log('%s + %s = %s'.format5(4, 5, 9));


// Tag function   인자 순서가 중요. strings, 그다음 전달될 key....
// function template(strings, ...keys) {
  
// var person = 'Mike';
// var age = 28;
// var age2 = 1000;

// function myTag(strings, personExp, agE2, ageExp ) {

//   var str0 = strings[0]; // "that "
//   var str1 = strings[1]; // " is a "

//   // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
//   // ${age} 뒤에는 ''인 string이 존재하여
//   // 기술적으로 strings 배열의 크기는 3이 됩니다.
//   // 하지만 빈 string이므로 무시하겠습니다.
//   var str2 = strings[2];

//   console.log(str0);
//   console.log(str1);
//   console.log(str2);
//   console.log(personExp);
//   console.log(ageExp);
//   console.log(agE2);
  
//   var ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
//   return str0 + personExp + str1 + ageStr + str2 + agE2 + ageStr + ageStr;

// }

// var output = myTag`That ${ person } is a ${ age }. Nice to meet you ${age2}`;

// console.log(output);
// // that Mike is a youngster




////////////////////////////////////////////////////////////////////////////////
// padStart, padEnd
// let phone = "01012345678"
// let request1 = phone.substr(0,3) + '-' + phone.substr(3, 4) + '-' + phone.substr(7);
// let request2 = `${phone.substr(0, 3)}-${phone.substr(3, 4)}-${phone.substr(7)}`;
// console.log(request1);
// console.log(request2);
// let str = ''
// for ( let a = 0; a < 1000 ; a = a+9){
//   // console.log(String(a).padStart(5,'0').padEnd(10,' ').padStart(12,' '))
//   str += String(a).padStart(6,'0').padStart(8,'_').padEnd(10,'_')+'\n'
// }
// console.log(str)

// let age = Number(prompt('나이를 넣으세요',20));
// if (age>19){
//   console.log('환영합니다.')
// } else if( a = 19){
//   console.log('수능 잘 치세요')
// } else
// {
//   console.log('안녕히 가세요')
// }





////////////////////////////////////////////////////////////////////////////////
// function showError(){
//   alert('에러가 발생 했습니다. 새로 고침해주세요')
// }
// // showError()

// function sayHello(name){
//   // 항상 시작은 const. 수정이 필요할때 let으로 바꾸자.
//   if (!name){
//     name = 'NoBoDy'
//   }
//   const msg = `Hello ${name}`;
//   // const msg = ""
//   console.log(msg)
// }

// sayHello('Ross')
// sayHello()




////////////////////////////////////////////////////////////////////////////////
// ||를 활용하여 위의 if문을 대신한다.
// function sayHello2(name){
//   // if문이 아니더라도 OR 구문으로 처리 가능하다.
//   // 왜냐하면.. OR의 경우 처음 True이면 뒤의 구문을 처리 하지 않고..
//   // 마지막만 true이면 마지막 구문한 처리 된다.
//   // 아래구문이 함수에 name이 전달 안되면 name은 undifine이 되고..false가 되어 
//   let newName = name || 'NoBoDy'
  
//   const msg = `Hello! ${newName} .. ^^;`
//   return msg
// }

// console.log(sayHello2("Mike"))
// console.log(sayHello2())


// defalut를 활용하여 동일 동작.
// function sayHello3(name = 'NoBoDy'){
 
//   const msg = `Hello! ${name} .. ^^;`
//   return msg
// }

// console.log(sayHello3("Mike"))
// console.log(sayHello3())





////////////////////////////////////////////////////////////////////////////////
// 함수 선언식
// 선언된 위치와 무관하게 아무곳에서나 호출해서 사용가능 hoisting.
// showError이 선언되기 전에 호출해서 오류 없이 동작
// showError()
// function showError(){
//   console.log("error")
// }





////////////////////////////////////////////////////////////////////////////////
// 함수 표현식
// 함수 표현식은 선언한 후에 사용가능
// 아래 showError2() 는 표현식에서 선언하기 전에 사용하여 오류남...
// showError2()
// let showError2 = function(){
//   console.log("error")
// }



// // 함수 선언식
// // 선언된 위치와 무관하게 아무곳에서나 호출해서 사용가능 hoisting.
// function add1(num1, num2){
//   return num1 + num2;
// }

// // 함수 표현식
// // 함수 표현식은 선언한 이후에 사용가능.
// let add2 = function(num1, num2){
//   return num1 + num2;
// }




////////////////////////////////////////////////////////////////////////////////
// //화살표 함수. 표현식의 변형.  항수명 없이 바로 선언 및 실행.
// let add3 = (num1, num2) => {
//   return num1 + num2;
// }

// // return 문은 일반 ()로 묶을 수 있다. 이때 'return' 은 생략 가능
// // 그냥 마지막의 세미콜론(;)로 생략해야 에러가 안난다. 왜지?
// let add4 = (num1, num2) =>(
//     num1 + num2 
// );


// // return문이 한줄이면 괄호도  생량 가능
// let add5 = (num1, num2) => num1 + num2;

// console.log(add1(10,20)) // 함수 선언식
// console.log(add2(10,20)) // 함수 표현식
// console.log(add3(10,20)) // 함수 표현식 변화....
// console.log(add4(10,20))
// console.log(add5(10,20))

