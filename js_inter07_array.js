////////////////////////////////////////////////////////////////////////////////
//  Array

// // arr.push()    : 배열의 맨뒤에 삽입
// // arr.pop()     : 배열의 맨뒤에 삭제
// // arr.unshift() : 배열의 맨앞에 삽입
// // arr.shift()   : 배열의 맨앞에 삽제
// let days = ['mon', 'tue'];
// console.log(days);
// days.push('wed');
// console.log(days);
// days.pop();
// console.log(days);
// days.unshift('sun');
// console.log(days);
// days.shift();
// console.log(days);


// ////////////////////////////////////////////////////////////////////////////////
// // arr.splice(start, cnt)  ; 특정 요소를 지운다.
// // start는 index(zero base), cnt는 index부터 지울 개수.
// let nums = [0, 1, 2, 3, 4, 5, 6, 7 ];
// console.log(nums);
// nums.splice(1,3);
// console.log(nums);
// nums.splice(1,2);
// console.log(nums);

// ////////////////////////////////////////////////////////////////////////////////
// // arr.splice(start, cnt, arr...)  ; 특정 요소를 지운후 arr...(들)을 추가 한다.
// // start는 index(zero base), cnt는 index부터 지울 개수
// // arr... 추가될 인자들.
// // return값도 있다.  삭제된 인자들이 리턴된다.
// let nums = [0, 1, 2, 3, 4, 5, 6, 7 ];
// console.log(nums);

// nums.splice(0, 0); // nothing happens.
// console.log(nums);

// nums.splice(0, 0, 'a', 'b'); // 0번부터 0개 지우고, 0번에 추가.
// console.log(nums);

// nums.splice(0, 1, 2, 3, 4); 
// console.log('0번 부터 1개 지우고, 0번에 2,3,4 추가'); 
// console.log(nums);

// let dels = nums.splice(0, 5, 100, 101); 
// console.log('0번 부터 5개 지우고, 0번에 100,101 추가'); 
// console.log(nums);
// console.log('삭제된 것들 : ', dels);

// let dels2 = nums.splice(0, 0); 
// console.log(nums);
// console.log('삭제된 것들 : ', dels2); // 삭제된것이 없다. (0) [] 리턴됨.




// ////////////////////////////////////////////////////////////////////////////////
// // arr.concat(arr2, arr3, ... )   : 배열을 합친다.
// let arr = [1, 2];
// let arr2 = arr.concat([3,4]);
// console.log(arr);
// console.log(arr2);

// let arr3 = arr.concat(arr2);
// console.log(arr3);

// let arr4 = arr.concat(arr2,  [9,9], [[1,2,3,4],[5,6,7,8]]);
// console.log("Length of arr4",arr4.length);
// for(let l of arr4){
//   // if (typeof l == typeof []){
//   //   for(let nestedl of l){
//   //     console.log('nested array')
//   //     console.log(nestedl);
//   //   }
//   // } else {
//     console.log(l);
//   // }
  
// }



// ////////////////////////////////////////////////////////////////////////////////
// // arr.forEach(fn)  : 배열 반복 (python의 apply같은거..)
// // arr.forEach( (item, index, arr) =>{
// //   // todo.. ...
// // });
// let users = ['Mike', 'Jane', 'Tom'];
// users.forEach((item, idx)=>{
//   console.log(idx, item.toUpperCase())
// })




// ////////////////////////////////////////////////////////////////////////////////
// // arr.indexOf(item, start=none)  //두번째 인자는 찾고자 하는 시작 위치.
// // arr.lastIndexOf
// // 문자열의 것과 거의 유사하다. 찾고자 하는 item의 index를 반환한다.
// let nums = [0,1,2,3,4,5,6,7,8,9,3];
// console.log(nums.indexOf(3));
// console.log(nums.indexOf(3, 5));  //index[5] 부터 찾아라.
// console.log(nums.indexOf(10));    //없으면 -1을 리턴한다.
// console.log(nums.lastIndexOf(3));




// ////////////////////////////////////////////////////////////////////////////////
// // arr.includes(item)  //index는 필요 없고... 포함여부만 true, false로 알고 싶을때
// // string.includes와 거의 유사.
// let nums = [0,1,2,3,4,5,6,7,8,9,3];
// console.log(nums.includes(3));
// console.log(nums.includes(10));





// ////////////////////////////////////////////////////////////////////////////////
// // arr.find(fn)      : 함수가 인자.  value를 리턴   없으면 undefined 리턴
// // arr.findIndex(fn) : 함수가 인자.  index를 리턴   없으면 -1 리턴

// // 첫번째 true인..즉, 찾는 값만 반환하고 끝
// // 만약 없으면 undefined를 반환.
// let nums = [1,2,3,4,5,6,7,8,9,3];
// const result = nums.find((item)=>{
//   return (item % 3 == 0) && (item % 20 == 0);
// }); //함수가 함수식으로 들어감.
// console.log(result)

// const result2 = nums.findIndex((ll)=>{
//   return (ll % 3 == 0) && (ll % 20 == 0);
// }); //함수가 함수식으로 들어감.   함수식의 인자는 item을 받는다.
// console.log(result2)




// ////////////////////////////////////////////////////////////////////////////////
// // array의 요소가 object. object를 이용하여 미성년자를 찾아라.
// let users =[
//   {name:'Mike', age : 33},
//   {name:'Jane', age : 27},
//   {name:'Tom', age : 13},
//   {name:'Ross', age : 23},
//   {name:'Rose', age : 18},
// ];

// // 방법 1. 그냥 for문.
// // 2개 이상도 찾아낸다.
// for(let obj of users){
//   if (obj.age < 19){
//     console.log(`${obj.name}이 나이 ${obj.age}로 미성년자입니다.`)
//   }
// }

// // 방법 2. arr.find로?  하나만 리턴되는뎅.
// // 처음 만나는 Tom만 찾아냄
// let result = users.find((item)=>{
//   return item.age < 19;
// });
// if(result){ // 없으면 undefined... undefined는 false.
//   console.log(`미성년자는 ${result.name}`)
// }

// // 방법 3 arr.forEach
// // forEach를 현재 배열을
// users.forEach((item,idx)=>{
//   if (item.age < 19){
//     console.log(`${item.name}이 나이 ${item.age}로 미성년자입니다.`)
//   }
// })

// // 방법 4 arr.map
// // map은 새로운 배열을 생성.  return이 있다.
// let result4 = users.map((item,idx)=>{
//   if (item.age < 19){
//     // console.log(`${item.name}이 나이 ${item.age}로 미성년자입니다.`)
//     return true;
//   }
//   return false;
// })
// console.log(result4);

// for (let idx = 0 ; idx < users.length ; idx ++){
//   if(result4[idx]){
//     console.log(`미성년자는 ${users[idx].age}살의 ${users[idx].name}입니다.`)
//   }
// }





// ////////////////////////////////////////////////////////////////////////////////
// // arr.filter(fn)  : 조건을 만족하는 모든 요소를 찾는다.
// // find, findIndex의 확장판
// const nums = [1,2,3,4,5,6,7,8,9];
// const result = nums.filter((item)=>{
//   return item % 2 == 0;
// })
// console.log(result);




// ////////////////////////////////////////////////////////////////////////////////
// // reverse  역순으로 변경한다.
// const nums = [1,2,3,4,5,6,7,8,9];
// console.log(nums);
// console.log(nums.reverse());




// ////////////////////////////////////////////////////////////////////////////////
// // map
// let users =[
//     {name:'Mike', age : 33},
//     {name:'Jane', age : 27},
//     {name:'Tomy', age : 13},
//     {name:'Ross', age : 23},
//     {name:'Rose', age : 18},
//   ];
  
// let detailUser = users.map((item, idx)=>{
//   return Object.assign({}, item, {
//     id : idx +1,
//     isAudult : item.age > 19,
//   }); // 새로운 객체를 만들어  property를 추가 한다.
// });
// console.log(detailUser); //[{…}, {…}, {…}, {…}, {…}]
// // 풀어서 찍어보자
// for (ll of detailUser){
//   console.log(ll);
// }
// // 결과
// // {name: 'Mike', age: 33, id: 1, isAudult: true}
// // {name: 'Jane', age: 27, id: 2, isAudult: true}
// // {name: 'Tomy', age: 13, id: 3, isAudult: false}
// // {name: 'Ross', age: 23, id: 4, isAudult: true}
// // {name: 'Rose', age: 18, id: 5, isAudult: false}




// ////////////////////////////////////////////////////////////////////////////////
// // forEach, map, reduce
// // 각 원소에 제곱한 결과값.
// const nums = [1,2,3,4,5];
// console.log(nums);

// let newNums_4_forEach = [];
// let sum_4_forEach = 0;
// nums.forEach((item, idx)=>{
//   // forEach는 return하지 않으므로 그 결과를 직접 push한다.
//   newNums_4_forEach.push(item**2);
//   sum_4_forEach += item**2;
// });
// console.log('forEach :', newNums_4_forEach);
// console.log('forEach :', sum_4_forEach);

// let sum_4_map = 0;
// let newNums_4_map = nums.map((item)=>{
//   sum_4_map += item**2;
//   // map은 리턴가능하다.
//   return (item**2);
// });
// console.log('map :', newNums_4_map);
// console.log('map :', sum_4_map);

// let sum_4_reduce = nums.reduce((preItem, currItem)=>{
//   console.log('preItem : ' + `${preItem}`.padStart(3,' ')  
//   + '    currItem : ' + `${currItem}`.padStart(3,' ') );
//   return preItem + currItem;
// });
// console.log('reduce :', sum_4_reduce);

// alpha = ['a', 'b', 'c'];
// let concat_4_reduce = alpha.reduce((preItem, currItem)=>{
//   console.log('preItem : ' + `${preItem}`.padStart(3,' ')  
//   + '    currItem : ' + `${currItem}`.padStart(3,' ') );
//   return preItem + currItem;
// });
// console.log('reduce :', concat_4_reduce);





// ////////////////////////////////////////////////////////////////////////////////
// // Array.isArray(arr) 배열인지 아닌지 확인한다.
// // Array method이다.
// let user ={
//   name : 'Mike',
//   age : 33,
// }
// let userList = ["Mike", "Jane", "Tomy"];

// // object, array둘다 type은 object
// console.log(typeof user); 
// console.log(typeof userList);

// // Array.isArray()로 배열 여부를 확인한다.
// console.log(Array.isArray(user)); 
// console.log(Array.isArray(userList));




// ////////////////////////////////////////////////////////////////////////////////
// // arr.sort()
// // 배열을 정렬한다.
// // 주의 사항 : 배열 자체가 변경된다.
// // 인수로 정렬 로직을 담은 함수를 받을수 있다. 마치 python의 lambda 처럼...
// let num = [1,5,2,2,3,6];
// console.log('before sort : ',num); 
// num.sort();
// // 배열 자체가 변경된다.
// console.log('after  sort : ',num);  // 잘처리 된것처럼 보일뿐.


// let num2 = [1,5,12,2,3,6];
// console.log('before sort : ',num2); 
// num2.sort();
// // 문자열로 바꿔서 정렬하기 때문에 12가 2 앞에 나온다.
// console.log('after  sort : ',num2);  // [1, 12, 2, 3, 5, 6]


// console.log("return a - b; 숫자 크기비교")
// let num3 = [1,5,12,2,3,6];
// console.log('before sort : ',num3); 
// num3.sort((a, b)=>{
//   return a - b;
// });
// // 이제야 정상으로 나온다.
// console.log('after  sort : ',num3); //[1, 2, 3, 5, 6, 12]


// let num4 = [1,5,12,2,3,6];
// console.log("return -(a - b); // 역순으로 출력된다.")
// console.log('before sort : ',num4); 
// num4.sort((a, b)=>{
//   return -(a - b); // 역순으로 출력된다.
// });
// // 이제야 정상으로 나온다.
// console.log('after  sort : ',num4); //[1, 2, 3, 5, 6, 12]




// ////////////////////////////////////////////////////////////////////////////////
// // arr.sort()
// // 문자열 정렬
// let user = ["mike", "Janes", "aB","zoo","Tom","Ab"];
// console.log(user); 

// user.sort();
// console.log('단순정렬. 원본도 수정된다.');
// console.log(user); 

// user.sort((a,b)=>{
//   // if (a.length - b.length == 0){
//   //   // 길이가 같으면
//   //   return -(a-b);    
//   // }
//   return -(a.length - b.length);  
// });
// console.log("길이순서로 역정렬 return -(a.length - b.length);")
// console.log(user); 





// ////////////////////////////////////////////////////////////////////////////////
// // arr.sort(fn)의 fn 정의가 어렵다.
// // 잘 만들어진 lib를  이용한다. Lodash.
// // 뭔가 package를 설치해야 한다. 나중에 해보자.
// let user = ["mike", "Janes", "aB","zoo","Tom","Ab"];
// _.sortBy(user);
// console.log(user); 




// ////////////////////////////////////////////////////////////////////////////////
// // arr.reduce(fn, initail값.)
// // 인수로 함수를 받는다.
// // (누적된 계산값, 현재값) ==> {return 계산값;}
// let num = [2,3,4,5];
// // 모든 수의 제곱값을 합치기
// // for, for of , forEach
// // 1. for
// let result_for = 0;
// for( let i = 0; i < num.length; i ++){
//   result_for += num[i]**2;
// }
// console.log('for :',result_for); 

// // 2. for .. of
// let result_forOf = 0;
// for( let v of num){
//   result_forOf += v**2;
// }
// console.log('for of :',result_forOf); 

// // 3. forEach
// let result_forEach = 0;
// num.forEach((item)=>{
//   result_forEach += item**2;
// });
// console.log('forEach :',result_forEach); 

// // 4. reduce, 결과값 하나.
// // 초기값 설정에 주의 하자. arr.reduce(fn, initial)
// let result_reduce = num.reduce((prev,curr)=>{
//   // 초기값을 넣어야... (초기값, 첫번째값)이 한번 비교되며 함수 실행된다.
//   // console.log(`prev[${prev}], curr[${curr}], 결과[${prev + curr**2}]`)
//   return prev + curr**2;
// },0); // 초기값을 넣어야... (초기값, 첫번째값)이 한번 비교되며 함수 실행된다.
// console.log('reduce :',result_reduce); 




// ////////////////////////////////////////////////////////////////////////////////
// // reduce 실습.
// // 성인만 뽑아서 별도의 adult 배열을 작성하라.
// const users =[
//     {name:'Mike', age : 33},
//     {name:'Jane', age : 27},
//     {name:'Tom', age : 13},
//     {name:'Ross', age : 23},
//     {name:'Jin', age : 18},
//   ];
// // reduce
// const adult = users.reduce((prev, curr)=>{
//   if(curr.age > 19){
//     prev.push(curr);//  여기가 중요. prev는 초기값이다. 즉 최초에는  빈 [] 이다.
//   }
//   return prev;
// },[])
// console.log(adult); 
// // [
// //   { name: 'Mike', age: 33 },
// //   { name: 'Jane', age: 27 },
// //   { name: 'Ross', age: 23 }
// // ]

// // filter는???
// const adult2 = Object.assign({},users.filter((user)=>{
//   return user.age > 19;
// }));
// console.log(adult2); 
// // {
// //   '0': { name: 'Mike', age: 33 },
// //   '1': { name: 'Jane', age: 27 },
// //   '2': { name: 'Ross', age: 23 }
// // }

// const adult3 = users.filter((user)=>{
//   return user.age > 19;
// });
// console.log(adult3);
// // [
// //   { name: 'Mike', age: 33 },
// //   { name: 'Jane', age: 27 },
// //   { name: 'Ross', age: 23 }
// // ]



// ////////////////////////////////////////////////////////////////////////////////
// // reduce 실습.
// // 여러가지 방식이 가능. 여기서는 reduce 만으로
// const users =[
//     {name:'Mike', age : 33},
//     {name:'Jane', age : 27},
//     {name:'Tom', age : 13},
//     {name:'Ross', age : 23},
//     {name:'Jin', age : 18},
//   ];

// // 2. 나이 합산. 
// const ageSum = users.reduce((prev, curr)=>{
//   return prev + curr.age;
// },0);
// console.log(ageSum); // 114.

// // 3. 이름이 4글자.
// const lenOfName = users.reduce((prev, curr)=>{
//   if(curr.name.length == 4){
//     prev.push(curr);
//   }
//   return prev;
// }, []);
// console.log(lenOfName);



// ////////////////////////////////////////////////////////////////////////////////
// // reduceRight 
// // prev가 오른쪽이라는 것만 제외 하고 동일 하다.
// // 여러가지 방식이 가능. 여기서는 reduce 만으로
// const users =[
//   {name:'Mike', age : 33},
//   {name:'Jane', age : 27},
//   {name:'Tom', age : 13},
//   {name:'Ross', age : 23},
//   {name:'Jin', age : 18},
// ];

// // 3. 이름이 4글자.
// const lenOfName1 = users.reduce((prev, curr)=>{
// if(curr.name.length == 4){
//   prev.push(curr);
// }
// return prev;
// }, []);
// console.log(lenOfName1);
// // [
// //   { name: 'Mike', age: 33 },
// //   { name: 'Jane', age: 27 },
// //   { name: 'Ross', age: 23 }
// // ]

// const lenOfName2 = users.reduceRight((prev, curr)=>{
//   if(curr.name.length == 4){
//     prev.push(curr);
//   }
//   return prev;
//   }, []);
// console.log(lenOfName2);
// // reduceRight..  뒤에서 부터 비교해 나간다.
// // [
// //   { name: 'Ross', age: 23 },
// //   { name: 'Jane', age: 27 },
// //   { name: 'Mike', age: 33 }
// // ]
  


////////////////////////////////////////////////////////////////////////////////
// 
console.log(); 