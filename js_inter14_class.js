// ////////////////////////////////////////////////////////////////////////////////
// // Class
// // ES6에 추가된 스펙.

// //생성자 함수
// const User = function (name, age){
//   this.name = name;
//   this.age = age;
//   this.showName = function(){
//     console.log(this.name);
//   }
// };

// const mike = new User('Mike', 30)
// mike.showName(); // browser console에서 보면 User내부에 showName있다.
// console.log(mike.hasOwnProperty('showName')); //true
// // 아래 class와 동일하게 __proto__ 밑으로 보내려면...
// // 생성자 함수의 showName을 막고.
// // User.prototype.showName = functio(){......}를 추가해야 한다.



// // Class
// // 생성자 함수의 초기화 부분을 constructor로 변환.   이역시 class 생성자...
// // C/C++ 등 다른 language의 class와 유사하다.
// class User2 {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;    
//   }
//   showName (){
//     console.log(this.name);
//   }
// };

// const tom =  new User2('Tom', 23)
// // const tom =  User2('Tom', 23) // Class constructor User2 cannot be invoked without 'new'
// tom.showName(); // browser cosole에서 보면... showName이 proto에 있다.
// console.log(tom.hasOwnProperty('showName')); // false
// // 그렇다면 class는 생성자 함수의 prototype을 줄이기 위해 만들어진 것인가??
// // new 라는 key word를 생략하면.... 
// // 생성자 함수는 ERROR없이 undefined를 리턴.
// // class는 new keywork없으면 코드 ERROR남...
// // 또한 class의 method는 hasOwnProperty()에서 false이다.




////////////////////////////////////////////////////////////////////////////////
// Class 상속
// Extends keyword를 이용한다.
class Car {
  constructor(color){
    this.color = color;
    this.wheels = 4;
  }

  drive(){
    console.log('Start drive....')
  }

  stop(){
    console.log('STOP drive....')
  }
  getColor(){
    return this.color;
  }
}

class Bmw extends Car{
  // 만약 자식 class에 생성자가 없다면... 아래 코드가 숨겨져 실행된다.
  // constructor(...args){
  //   super(...args);
  // }
  // 아래와 같이 생성자를 구현했다면...  super에서 필요한 인자도 같이 넘겨줘야 한다.
  constructor(color){
    super(color); // 부모의 consturctor 호출....
    this.company = "BMW";
  }  
  park(){
    console.log('Parking Here....')
  }

  // 부모의 method와 동일한 이름은 override된다.
  stop(){
    super.stop(); // 부모꺼도 실행하려면...
    console.log('STOP STOP STOPSTOP')
  }
  getCompany(){
    return this.company;
  }
}

const x5 = new Bmw('rainbow');
x5.drive();
x5.stop();
x5.park();
console.log(x5.getColor());
console.log(x5.getCompany());