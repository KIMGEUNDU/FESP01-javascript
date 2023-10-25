// 전개 연산자
var colors = ['two', 'three', 'four'];

var newColors2 = colors;
console.log(newColors2 === colors); //true

// 값이 복사가 되면 주소값이 달라지고 리랜더링이 일어난다
var newColors3 = [...colors];
console.log(newColors3 === colors); //false

if (colors !== newColors3) {
  console.log('리랜더링');
}

var newColors = ['one', ...colors, 'five'];

var user = { name: '김철수', age: 30, done: false };
var newUser = { ...user, phone: '01022223333', age: user.age + 1, done: true };
console.log(newUser);

// 함수에서 사용
function sum(x, y) {
  console.log(x + y);
}

var numbers = [10, 20];
sum(...numbers); //30

// 배열 결합

// 객체 결합
