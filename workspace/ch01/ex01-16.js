// TODO: 호이스팅 단원
add(); // 함수 호이스팅에 의해서 먼저 실행해도 실행된다.

// 10 + 100의 결과를 출력한다.
function add() {
  var n1 = 10;
  var n2 = 100;
  var result = n1 + n2;
  console.log(result);
}

// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1) {
  console.log(n1 + 100);
}

// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2) {
  console.log(n1 + n2);
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  return n1 + n2;
}

add();
add100(20);
sum(20, 40);
console.log(sum2(30, 40));
