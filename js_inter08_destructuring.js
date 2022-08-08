////////////////////////////////////////////////////////////////////////////////
// Destructuring assignment   구조 분해 할당
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해하여
// 그값을 나눠 담는 것이다.

// ////////////////////////////////////////////////////////////////////////////////
// // 배열 구조 분해
// let [x, y] = [1, 2];
// console.log(x, y); 

// let users = ['Mike', 'Jane', 'Tom'];
// let [ user1, user2, user3] = users;
// // 아래와 같은 의미
// // let user1 = users[0];
// // let user2 = users[1];
// // let user3 = users[2];
// console.log(user1, user2, user3); 

// ////////////////////////////////////////////////////////////////////////////////
// // string. split()
// let str = 'Mike-Jane-Tom';
// let [ str1, str2, str3] = str.split('-');
// console.log(str1, str2, str3); 

// ////////////////////////////////////////////////////////////////////////////////
// // 개수가 안맞으면 undefined가 할당된다.
// let [a, b, c] = [1, 2];
// console.log(a, b, c); //1 2 undefined


// ////////////////////////////////////////////////////////////////////////////////
// // 이를 방지하기 위해 default 값을 줄수 있다.
// let [a=0, b=0, c=0] = [1, 2];
// console.log(a, b, c); //1 2 0


// ////////////////////////////////////////////////////////////////////////////////
// // 배열구조 분해 : 일부 반환값 무시... 공백(' ')
// let users = ['Mike', 'Jane', 'Tom', 'Johm'];
// let [ user1,  , user2 ] = users;
// console.log(user1, user2); 


// ////////////////////////////////////////////////////////////////////////////////
// // 배열구조 분해 : 값 변환
// let [a, b] = [1, 2];
// console.log(a, b); 
// [a,b] = [ b,a]
// console.log("after [a,b] = [ b,a]", a, b);  // 더이상 temp는 필요치 않다.




// ////////////////////////////////////////////////////////////////////////////////
// // 겍체 구조 분해.
// let user = { name:"Mike", age : 30};
// console.log(typeof user, user); 

// // let{name, age} = user;
// // console.log(typeof name, name); 
// // console.log(typeof age, age);  
// // 순서를 바꿔도 상관없다.
// let{age, name} = user;
// console.log(name, age)




// ////////////////////////////////////////////////////////////////////////////////
// // 겍체 구조 분해. : 새로운 변수 이름으로도 할당 가능하다.
// let user = { name:"Mike", age : 30};
// console.log(user);
// console.log(user.name, user.age);
// // 변수 이름을 바꾸려면 old:new pair로 변수를 생성한다.
// let {name: userNmae, age: userAge} = user;
// console.log(userNmae);
// console.log(userAge);



////////////////////////////////////////////////////////////////////////////////
// 겍체 구조 분해. : 개수가 다를때 , default값 설정가능
let user = { name:"Mike", age : 30};
console.log(user);

// 개수가 부족.
let {name, age, hobby} = user;
console.log(name);
console.log(age);
console.log(hobby); // undefined, 값이 부족.

// 변수이름 바꾸면서... 개수부족시 대비 초기값 설정.
// undefined일때만 default값이 적용된다.
let {name:newName, age:newAge, hobby:newHobby="soccor"} = user;
console.log(newName);
console.log(newAge);
console.log(newHobby); // undefined, 값이 부족.



