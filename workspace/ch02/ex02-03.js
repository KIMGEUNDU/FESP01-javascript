// 함수의 결과 값으로 함수가 반환될 수 있다.
function foo() {
  console.log('foo 호출.');
  return function () {
    console.log('bar 호출');
    return function () {
      console.log('baz 호출');
      return foo;
    };
  };
}

// 함수 안에 함수 호출 연결 첫번째 출력방법
// 함수 체이닝
foo()()();

// 두번째 출력방법
var bar = foo();
var baz = bar();
baz();
