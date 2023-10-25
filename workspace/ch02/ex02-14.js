var name = 'global';
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '이용복';
kim.age = 24;
kim.getName = returnName;

var lee = new Object();
lee.name = '표지훈';
lee.age = 31;
lee.getName = returnName;

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(kim.getName(), kim.getName.call(lee));
console.log(lee.getName(), lee.getName.apply(window));
console.log(returnName(), returnName.call(kim));
