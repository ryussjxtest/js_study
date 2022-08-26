////////////////////////////////////////////////////////////////////////////////
// Optional chaining operator, ?. 연산자
// objects.banana와 number 사이에 있는 구문의 이름은 optional chaning 연산자다. 이 연산자는 null이나 undefined와 같은 빈 값에 대한 예외처리를 자동화해준다. 
// 정확히는, 객체가 undefined 또는 null일 때 연산의 결과 대신 undefined를 반환한다

// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)

// const objects = {
//   apple: {
//       number: 3
//   },
//   melon :20
// };

// const numberOfBanana1 = objects.banana?.number ?? 0;
// console.log(numberOfBanana1); 
// // 위의 코드  const numberOfBanana1 = objects.banana?.number ?? 0;
// // 아래와 같이 풀어 쓸수 있다.
// // 결국 undefined이거나 null이면 undefeined를 return한다.
// // 여기 까지가 ?.  
// const numberOfBanana2 = (
//   (objects.banana === undefined || objects.banana === null)
//   ?
//       undefined
//   :
//       objects.banana.number
// ) ?? 0;
// console.log(numberOfBanana2);

// console.log("typeof objects ",typeof objects);
// console.log("typeof objects.apple ",typeof objects.apple);
// console.log("typeof objects..apple.number ",typeof objects.apple.number);
// console.log("typeof objects ",typeof objects.melon);

// console.log(objects);



// ////////////////////////////////////////////////////////////////////////////////
// // Suppose that you have a function that returns a user object:
// function getUser(id) {

//   if(id <= 0) {
//       return null;
//   }

//   // get the user from database
//   // and return null if id does not exist
//   // ...
  
//   // if user was found, return the user
//   return {
//       id: id,
//       username: 'admin',
//       profile: {
//           avatar: '/avatar.png',
//           language: 'English'
//       }
//   }
// }


// let user = getUser(1);
// let profile = user.profile;
// console.log(user.id, user.username, profile);

// let user2 = getUser(0);
// // let profile2 = user2.profile;
// // user가 없으면(id==0) user가 null..profile로 젒근시 오류
// // let porfile2 = user2 && user2.profile;
// let profile2 = user2?.profile;
// // ?.(optional chaining op)로 Error는 막았으나 undefined가 리턴됨.
// console.log( profile2); //
// let user = getUser(2);
// let profile = (user !== null || user !== undefined)
//             ? user.profile
//             : undefined;







// ////////////////////////////////////////////////////////////////////////////////
// // Stacking the optional chaining operator
// function getUser(id) {

//   if(id <= 0) {
//       return null;
//   }

//   // get the user from database
//   // and return null if id does not exist
//   // ...
  
//   // if user was found, return the user
//   return {
//       id: id,
//       username: 'admin',
//       profile: {
//           avatar: '/avatar.png',
//           language: 'English'
//       }
//   }
// }
// let user = getUser(-1);
// let avatar = user ?. profile ?. avatar;
// console.log(avatar);
// let user2 = getUser(2);
// let avatar2 = user2 ?. profile ?. avatar2;
// console.log(avatar2);




// ////////////////////////////////////////////////////////////////////////////////
// // Using optional chaining operator with function calls
// // Suppose that you have a file API as follows:

// let file = {
//     read() {
//         return 'file content';
//     },
//     write(content) {
//         console.log(`Writing ${content} to file...`);
//         return true;
//     }
// };

// // This example calls the read() method of the file object:
// let data = file.read();
// console.log(data);
// // Code language: JavaScript (javascript)
// // If you call a method that doesn’t exist in the file object, you’ll get a TypeError:

// // let compressedData1 = file.compress();
// // Error:
// // Uncaught TypeError: file.compress is not a function

// // However, if you use the optional chaining operator with the method call, the expression will return undefined instead of throwing an error:
// let compressedData2 = file.compress?.();
// // Code language: JavaScript (javascript)
// // The compressedData is now undefined.
// console.log(compressedData2);
// // Summary
// // The optional chaining operator (?.) returns undefined instead of throwing an error if you attempt to access a property of an null or undefined object: obj ?. property.
// // Combine the optional chaining operator (?.) with the nullish coalescing operator (??) to assign a default value.
// // Use functionName ?. (args) to avoid explicitly checking if the functionName is not undefined or null before invoking it.






// ////////////////////////////////////////////////////////////////////////////////
// // ?.앞의 변수는 꼭 선언되어 있어야 합니다.
// // 변수 user가 선언되어있지 않으면 user?.anything 평가시 에러가 발생합니다.

// // ReferenceError: user is not defined
// user?.address;
// user?.anything을 사용하려면 let이나 const, var를 사용해 user를 정의해야 하죠. 이렇게 옵셔널 체이닝은 선언이 완료된 변수를 대상으로만 동작합니다.




////////////////////////////////////////////////////////////////////////////////
// Nullish coalescing operator, ?? 연산자
// A nullish value is a value that is either null or undefined.

// Introduction to the JavaScript nullish coalescing operator
// ES2020 introduced the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:

// value1 ?? value2
// The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined. Technically, the bullish coalescing operator is equivalent to the following block:
let value2 = 10;
let value1 = null;
let value = value1 ?? value2;
console.log(value);