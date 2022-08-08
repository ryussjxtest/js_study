////////////////////////////////////////////////////////////////////////////////
// 생성자

// ////////////////////////////////////////////////////////////////////////////////
// // 객처 리터럴
// let user = {
//   name : 'Mike',
//   age = 30,
// }


// ////////////////////////////////////////////////////////////////////////////////
// // 여러개 필요할 경우 생성자 함수를 이용한다.  (마치 python등 class와 유사..)
// // 첫글자는 다른 함수와 다르게 대문자로 쓴다.
// function User(name, age){
//   this.name = name;
//   this.age = age;
// }

// // new연산자를 사용해서 호출 한다.
// let user1 = new User('Mike', 30);
// let user2 = new User('Jane', 22);
// let user3 = new User('John', 36);
// console.log(user1)
// console.log(user2)
// console.log(user3)



// ////////////////////////////////////////////////////////////////////////////////
// // 동작 방식
// function User(name, age){
//   // 1. object 선언
//   // this = {}  // 실제론 없음. 생략
  
//   // 2. 변수 할당
//   this.name = name;
//   this.age = age;
  
//   // 3. 객체 return
//   // return this; // 여기도 생략
// }
// new User();




// ////////////////////////////////////////////////////////////////////////////////
// // 생성자 함수
// // method
// function User(name, age){
//   this.name = name;
//   this.age = age;
//   this.sayName = function(){
//     console.log(`My name is ${this.name}`);
//   }
// }

// let user5 = new User('Ross', 50);
// user5.sayName(); //"My name is Ross"



// ////////////////////////////////////////////////////////////////////////////////
// 실습
function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
      console.log(`${this.title}의 가격은 ${this.price}입니다.`);
    }
  }
  
const item1 = new Item('인형', 3000);
const item2 = new Item('과자', 2000);
const item3 = new Item('가방', 5000);
console.log(item1);
console.log(item2);
console.log(item3);
item1.showPrice();
item2.showPrice();
item3.showPrice();
  
  
  
  
