// 구조 분해 할당
var colors = ['yellow', 'green', 'blue'];
var [one, two, three, four = 'red'] = colors;

console.log(one);
console.log(two);
console.log(three);
console.log(four); //undefined

// React
// 구조분해할당 전
// const countState = useState(0);
// console.log(countState[0]);
// countState[1](countState[0] + 1);
// 구조분해 후
// const [count, setCount] = useState(0);

// var kim = { userName: '김철수', userAge: 35 };
// var { userName, userAge: age } = kim;
// console.log(userName);
// console.log(age);

// 선언된 변수에 적용
var first, second;
[first, second] = [100, 200, 300];
console.log(first);
console.log(second);
({ first, second } = { first: 'orange', second: 'green', third: 'yellow' });
console.log(first, second);

// 기본값 할당(undefined 대체)
// var { userName, userAge } = { userName: '이용복', userAge: '24' };
var { yourName, userAge = 24 } = { yourName: '이용복' };

console.log(yourName, userAge);

// 변수명 변경과 기본값 할당
// var { userName: accountName = '게스트', userAge: age = 24 } = {
//   userAge: '30',
// };
// console.log(accountName, age);

// 변수값 교환
var a = 100;
var b = 200;
var temp = a;
a = b;
b = temp;
console.log(a, b);

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a];
console.log(a, b);

// 복합 객체에서 사용
var userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기',
    },
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기',
    },
  },
];

// 이름과 코스명만 출력
// 기본적으로 꺼내는 방법
// for (var elem of userList) {
//   console.log(elem.name, elem.course.name);
// }

// 구조분해할당
for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName);
}
