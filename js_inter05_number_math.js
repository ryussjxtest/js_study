////////////////////////////////////////////////////////////////////////////////
// number. math.
// 진수.
// toString(digit)


// ////////////////////////////////////////////////////////////////////////////////
// // toString()
// // 10진수를 2/16진수로 변환 
// let num = 10
// console.log('num.toString()  : ', num.toString());   // 인자가 null이면 문자열로.
// console.log('num.toString(2) : ', num.toString(2));  // 인자가 있으면, 그 진수로...  2진수
// console.log('num.toString(8) : ', num.toString(8));  // 8 진수
// console.log('num.toString(16): ', num.toString(16)); // 16 진수

// let num2 = 255
// console.log('num.toString(256): ', num2.toString(16)); // 16 진수




// ////////////////////////////////////////////////////////////////////////////////
// // Math

// // Math.PI
// console.log('Math.PI', Math.PI);  // 3.141592653589793

// // Math.E  
// console.log('Math.E', Math.E);    // 2.718281828459045

// let num1 = 5.1;
// let num2 = 5.7;
// // Math.ceil() : 올림. python의 roundUp와 유사.
// console.log('Math.ceil(num1) : ',Math.ceil(num1));  // 6
// console.log('Math.ceil(num2) : ',Math.ceil(num2));  // 6

// // Math.floor() : 내림(버림). python의 roundDown와 유사.
// console.log('Math.floor(num1) : ',Math.floor(num1));  // 5
// console.log('Math.floor(num2) : ',Math.floor(num2));  // 5

// // Math.round() : 반올림 python의 round와 유사.
// console.log('Math.round(num1) : ',Math.round(num1));  // 5
// console.log('Math.round(num2) : ',Math.round(num2));  // 6


// ////////////////////////////////////////////////////////////////////////////////
// //  특정 소수 자리수에서 반올림?   이거 안되넹...
// let userRate = Math.PI;
// // 소수점 4자리에서 반올림 하려면...
// let digit = 4; // 반올림할 자리수.
// num3 = Math.round(userRate*10**digit)/10**digit;
// console.log(`Math.round(userRate * 10**${digit})/10**${digit}`, Math.round(userRate * 10**digit)/10**digit);
// console.log('num3 ',num3) // 3.1416




// ////////////////////////////////////////////////////////////////////////////////
// // toFixed() : 소수점 자리수...  자동으로 반올림 된다.
// // 다만 return값이 string이다. Number()로 변환해야 한다.

// // 소수점 둘째자리 까지 표현하라.. <- 소수점 3째 자리에서 반올림하라.
// let userRate = 30.123456;

// // 방법1. 1000을 곱해. round() 하고 다시 1000으로 나눈다.
// let result1 = Math.round(userRate*1000)/1000;
// console.log('Math.round(userRate*1000)/1000  : ', result1);   //30.123

// // 방법2. toFixed() 이용.
// console.log(`userRate            : ${userRate}`);
// console.log('userRate.toFixed(5)  : ',userRate.toFixed(5)); // 30.12346, 작으면 반올림
// console.log('userRate.toFixed(0)  : ',userRate.toFixed(0)); // 30.12346, 작으면 반올림
// console.log('userRate.toFixed(9)  : ',userRate.toFixed(9)); // 30.523456000 자리수가 크면 0으로 채운다.

// let result2 = userRate.toFixed(5);
// console.log('result2  : ', typeof result2); //string
// console.log(result2 + 0.1);         //30.123460.1
// console.log(Number(result2) + 0.1); // 30.223460000000003




// ////////////////////////////////////////////////////////////////////////////////
// // isNaN()   : NaN 인지 판다.
// let x = Number('x');  // x :  NaN

// // NaN과의 비교는 무조건 전부 false.   
// console.log(' x == NaN   : ', x == NaN);  // false
// console.log(' x === NaN  : ', x === NaN); // false
// console.log(' NaN == NaN : ', NaN == NaN); // false, 심지어 NaN과 NaN의 비교도 false...
// console.log(' isNaN(x)   : ', isNaN(x));  // true 따라서 NaN 인지 보려면... isNaN밖에 없다.






// ////////////////////////////////////////////////////////////////////////////////
// // parseInt() : 문자열도 숫자로 반환... 문자를 만날때 까지 앞에서 부터 읽어서 리턴한다.

// let margin = '10px'; // HTML, JSX에서 픽셀단위...여기서 수만 읽어 오려면...
// console.log('parseInt(margin)  : ',parseInt(margin)); // 10
// console.log('Number(margin)    : ',Number(margin));   // NaN  , Number()는 숫자로되 문자열만.

// let redColor = 'f3';  //16진수
// console.log('parseInt(redColor)  : ',parseInt(redColor)); // NaN , 숫자가 먼저 나와야 한다.
// console.log('parseInt(redColor16)  : ',parseInt(redColor,16)); // 243 , 인자로 진수 표기





// ////////////////////////////////////////////////////////////////////////////////
// // parseFloat() : float형 문자를 float로 변환.

// let padding = '18.5%'; // HTML, JSX에서 픽셀단위...여기서 수만 읽어 오려면...
// console.log('parseInt(padding)  : ',parseInt(padding));         // 18
// console.log('parseFloat(padding)    : ',parseFloat(padding));   // 18.5



// ////////////////////////////////////////////////////////////////////////////////
// // Math.random() : 0~1 사이의 숫자 생성
// console.log('Math.random()  : ',Math.random());
// console.log('Math.random()  : ',Math.random());
// console.log('Math.random()  : ',Math.random());
// console.log('Math.random()  : ',Math.random());

// // 1~100  사이의 숫자를 뽑고 싶다면
// console.log('Math.floor(Math.random()*100)+1  : ',Math.floor(Math.random()*100)+1);

// let total = 0;
// let cnt = 10000000;

// for(let i = 0 ; i < cnt; i++) {
//   total += Math.floor(Math.random()*100)+1
//   if (i % 500000 == 0){
//     console.log(`${i}`.padStart(8,' '), `${total}`.padStart(8,' '), total/cnt)
//   }
// }




////////////////////////////////////////////////////////////////////////////////
// 그 밖의...Math.
console.log(Math.max(1,3,5,8,2,4,10));
console.log(Math.min(1,-3,5,8,2,-4,10));
console.log(Math.pow(2,10))   //Math.pow(n,m) => n**m  제곱.
console.log(Math.sqrt(1024))  //Math.sqrt(n) => 루트. 제곱근




