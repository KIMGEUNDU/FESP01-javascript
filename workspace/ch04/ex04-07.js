// var alert = '출입 금지!';
// console.log(alert);

// alert('작업 완료.');

// 일반 함수이지만 전역 객체를 오염시킨다.
// function fn() {
//   var alert = '출입 금지!';
//   console.log(alert);
// }

// fn();

// 즉시 실행 함수
(function () {
  var alert = '출입 금지!';
  console.log(alert);
})();

// 일반 함수
// function fn2(alert) {
//   console.log(alert);
// }

// 즉시 실행 함수
fn2('출입 금지!')((alert) => {
  console.log(alert);
})('출입 금지!');

// window의 전역 객체
alert('작업 완료.');
