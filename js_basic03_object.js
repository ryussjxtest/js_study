// //////////////////////////////////////////////////////////////////////////////
// object
// key: value 조합.  python의 dictionary..형태.
//마지막 콤마는 추후 key 추가시 용이함. 넣는 습관을 갖자
// const superman = {
//   name : 'clark',
//   age : 33,  //마지막 콤마는 추후 key 추가시 용이함. 넣는 습관을 갖자
// }

// //접근.  이는 pandas의컬럼 접근과 유사함.
// console.log(superman.name);
// console.log(superman['age']);

// // 추가
// superman.gender = 'male';
// superman['hairColor'] = 'blonde';
// console.log(superman.hairColor);
// console.log(superman['gender']);

// // 삭제
// // delete keyword 사용
// console.log('before delete superman');
// console.log(superman);

// delete superman.hairColor;
// delete superman['gender']

// console.log('after delete superman');
// console.log(superman);



// //////////////////////////////////////////////////////////////////////////////
//for ...in...
// for ( let key in superman){
//   let result  = key.padStart(10, ' ') + ' : ' + superman[key]
//   console.log(result)
// }



// ////////////////////////////////////////////////////////////////////////////////
// const superman = {
//   name : 'clark',
//   age : 33,  //마지막 콤마는 추후 key 추가시 용이함. 넣는 습관을 갖자
//   // birthDay : '1006'
// }
// // 없는 property에 접근시 undefined 리턴됨을 이용하여...
// let msg = superman.birthDay || 'Sorry, there is no dirthDay property.'
// console.log(msg)



// ////////////////////////////////////////////////////////////////////////////////
// const superman = {
//   name : 'clark',
//   age : 33,  //마지막 콤마는 추후 key 추가시 용이함. 넣는 습관을 갖자
// }

// if ('birthDay' in superman){
//   console.log(superman.birthDay);
// } else {
//   console.log('Sorry, there is no dirthDay property.');
// }




// ////////////////////////////////////////////////////////////////////////////////
//????   const 인데 object property 추가 가능??
// const superman = {
//   name : 'clark',
//   age : 33,  //마지막 콤마는 추후 key 추가시 용이함. 넣는 습관을 갖자
// }
// //아래가 오류가 안나는 것은 superman이 C의 pointer 같은 것이고.
// // superman이 담고 있는 주소값이 변경된것이 아니라 그 주소값은 안 바뀜.
// // 다만, 그 주소가 가르키고 있는 object가 변겸됨. 
// //그래서 const여도 수정가능.
// superman.age2 = 50
// console.log(superman)

// const 변수 수정시 에러
// const age = 20
// age=30 //Uncaught TypeError: Assignment to constant variable. 
// console.log(age)





// ////////////////////////////////////////////////////////////////////////////////
// Object를 return 하는 함수.
// function createObject (name, age, gender='male') {
//   return {
//     name : name,
//     age : age,
//     gender : gender,
//   };
// }

// const Mike = createObject('Mike',30)
// Mike.age = 40
// console.log(Mike)




// ////////////////////////////////////////////////////////////////////////////////
// function createObject (name, age, gender='male') {
//   return {
//     name : name,
//     age : age,
//     gender : gender,
//   };
// }



// ////////////////////////////////////////////////////////////////////////////////
// const createObject = (name, age, gender='male') => {
//   return {
//     name : name,
//     age : age,
//     gender : gender,
//   }; 
// }

// Jane = createObject('Jane', 24, 'female')
// console.log(Jane)


// function makeObject(name, age,hobby='soccer'){
//   return {
//     name:name,
//     age:age,
//     hobby:hobby,
//   };
// }

// const Mike = makeObject('Mike',22,'biliard')
// let result = `Hi. my name is ${Mike.name}. I\'m a ${Mike.age}years old. 
// My hobby is ${Mike.hobby}`
// console.log(result)






// ////////////////////////////////////////////////////////////////////////////////
// // 키와 파라미터 이름이 같을때는 파라미터 명을 생략해도 된다.
// function makeObject(name, age,hobby='soccer'){
//   return {
//     age,
//     name,
//     // age,
//     hobby,
//   };
// }

// const Mike = makeObject('Mike',22,'biliard')
// let result = `Hi. my name is ${Mike.name}. I\'m a ${Mike.age}years old. 
// My hobby is ${Mike.hobby}`
// console.log(result)

// console.log('age' in Mike)
// console.log('pet' in Mike)




// ////////////////////////////////////////////////////////////////////////////////
// // 인자가 Object,
// // 없는 property를 써야 할때....
// function isAdult(user){
//   // if문의 조건은 항상 괄호로 묶자 오류난다.
//   if (user.age < 20) {
//     // age라는 property가 없으면.. undefined가 되어 항상 false가 된다.
//     // 따라서 조건문과 상관없이 무조건 실행되지 않는다.
//     // 이점을 유의 해야 한다.
//     return false;
//   }
//   return true;
// }

// const Mike = {
//   name : 'Mike',
//   age : 30,
// }
// const Jane = {
//   name : 'Jane',
//   // age : 25, // age property가 없을때
// }

// console.log(isAdult(Mike))
// console.log(isAdult(Jane))




// ////////////////////////////////////////////////////////////////////////////////
// // 인자가 Object,
// // 위의 코드는 아래와 같이 in을 사용해 property가 있는지 먼저 확인한다.
// function isAdult(user){
//   // if문의 조건은 항상 괄호로 묶자 오류난다.
//   if ('age' in user ){
//     if (user.age < 20) {    
//       return false;
//     }
//   } else{
//     return false;
//   }  
//   return true;
// }





// ////////////////////////////////////////////////////////////////////////////////
// // 너무 복잡. 결국 나이확인가능하고 20세 이상만 true. 
// // 나머지 즉, 나이가 없거나, 있어도 20세 미만이면 false.  
// // 아래가 간단하다.
// function isAdult2(user){
//   if (('age' in user ) && (user.age >= 20)) {    
//     return true;
//   }
//   return false;
// }

// const Tom = {
//   name : 'Tom',
//   age : 19,
// }
// const Mike = {
//   name : 'Mike',
//   age : 30,
// }
// const Jane = {
//   name : 'Jane',
//   // age : 25, // age property가 없을때
// }
// console.log('isAdult ======================================')
// console.log('Tom ',isAdult(Tom))
// console.log('Mike ',isAdult(Mike))
// console.log('Jane ',isAdult(Jane))
// console.log('isAdult222 ======================================')
// console.log('Tom ',isAdult2(Tom))
// console.log('Mike ',isAdult2(Mike))
// console.log('Jane ',isAdult2(Jane))





// ////////////////////////////////////////////////////////////////////////////////
// //for...in
// const Mike = {
//   name : "Mike",
//   age : 30,
// }

// for (x in Mike){
//   // key값만 가져온다.
//   // console.log(x);
//   // value도 가져와 보자.
//   // 키가 문자열로 넘어 온다. 이점을 유의해 []로 접근한다.
//   console.log(x.padStart(6,' ')+ ' : '+Mike[x]) ;
// }






// ////////////////////////////////////////////////////////////////////////////////
// // 객체에 method...함수 추가.
// // Object Method this
// // Method : 객체 프로퍼티로 할당된 함수
// const superman = {
//   name : 'Clark',
//   age : 33,
//   power : Number(this.age)*1000,
//   fly : function(){
//     // property(멤버)에 대한 접근은 this...를 이용한다.
//     console.log(this.name + '이/가 '+ '날아간다.');
//   },
//   // 아래와 같이 function key word를 생략할수 잇다. 
//   status (){
//     console.log('Power : ' + this.power);
//   }, 
// }

// // Method 호출 : 객체 프로퍼티로 할당된 함수를 호출한다.
// superman.fly();
// superman.status();



// ////////////////////////////////////////////////////////////////////////////////
// // Method 접근. this로 자신만의 sayHello를 호출한다.
// // 그러나, 화살표 함수는 일반함수와는 달리 자신만의 this를 가지지 않음.
// // 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 가져온다.
// let boy = {
//   name : "Mike",
//   sayHello : function(){
//     console.log( `Hello, I'm ${this.name}`)
//   },
// }
// let girl = {
//   name : "Jane",
//   // function key word 생략.
//   sayHello (){
//     console.log( `Hello, I'm ${this.name}`)
//   },
// }

// // this로 자신만의 sayHello를 호출한다.
// // 실행시 자신의 객체를 가리키는게 this이다.
// boy.sayHello(); 
// girl.sayHello();




// ////////////////////////////////////////////////////////////////////////////////
// // this
// // js에서 this는 어렵다.
// // 아래 처럼 ()화살표 함수를 사용하면 this는 object를 가르키는게 아니라...
// // 전역객체를 가리킨다.
// // 브라우저 환경에서는 window를
// // Node js 환경에서는 global이 된다.
// // codepend에서는 this.name 이 'CodePen' 임을 확인할수 잇다.
// let boy = {
//   name : "Mike",
//   sayHello : ()=>{
//     console.log( `Hello, I'm ${this.name}`);
//   },
// }
// // codepend에서는 this.name 이 'CodePen' 임을 확인할수 잇다.
// // 즉 boy object에서 사용하는 this 이지만 ... 
// // 화살표 함수를 사용함으로써 그 의도가 달라지게 된다. 이를 주의 하자.
// boy.sayHello(); // "Hello, I'm CodePen"



// ////////////////////////////////////////////////////////////////////////////////
// // boy object 선언.
// let boy = {
//   name : 'Mike',
//   showName : function(){
//     console.log(boy.name);  //사실 여기가 문제...boy.name?????
//   },
// };

// // object 변수는 reference이다.
// // 다시 말해, boy는 Mike가 저장된 주소를 가르킨다.


// let man = boy;    // man=boy에 의해 man도 Mike를 가르킨다. 
// man.name = 'Tom'; // man이 가르키는 Mike의 이름을 man.name='Tom'으로 변경했다.
// man.showName();
// boy.showName();   // boy가 가르키고 있던 object 이름이 Tome으로 같이 변경된다.










// ////////////////////////////////////////////////////////////////////////////////
// // boy object 선언.
// let boy = {
//   name : 'Mike',
//   showName : function(){
//     // console.log(boy.name);  // 위의 원래 코드는...boy.name
//                                // boy가 null 되면 오류
//     console.log(this.name);    // 자기 자신을 가리키도록 this를 이용한다.
//   },
// };

// let man = boy;    // man=boy에 의해 man도 Mike를 가르킨다. 
// boy = null; // boy는 null로 만들고 man만 남김.
// man.showName()  // ==> 여기서 오류남. showName보면 boy.name을 찍게 되어 있음.
//                 // this.name으로 수정해야 "Mike"가 정상출력됨.





// ////////////////////////////////////////////////////////////////////////////////
// // boy object 선언.   화살표 함수 
// let boy = {
//   name : 'Mike',
//   // 화살표 함수를 사용하면
//   // 아래 this가 object가 아닌 Codepen을 가리키게 된다.
//   showName : () => {
//     console.log(this.name);    // 자기 자신을 가리키도록 this를 이용한다.
                
//   },
// };

// let man = boy;    // man=boy에 의해 man도 Mike를 가르킨다. 
// boy = null; // boy는 null로 만들고 man만 남김.
// man.showName();  // ==> CodePen
// // this의 의미가 달라짐...
// // 따라서 ... Object나 method를 구현할때는 ()=> (화살표함수)를 사용하지 않는다.




