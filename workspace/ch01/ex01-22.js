// TODO: 호이스팅 단원
// 배열 구조분해할당
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(30));

// TODO: IIFE pattern 즉시실행함수
// 구조 분해 할당과 같이 사용
(function () {
  function sum([x = 0, y = 0] = []) {
    return x + y;
  }

  console.log(sum([1, 2]));
  console.log(sum());
  console.log(sum([]));
  console.log(sum([1]));
})();

(function () {
  // 객체 구조분해할당ㄴ
  function sum({ x = 0, y = 0 } = {}) {
    return x + y;
  }

  console.log(sum());
  console.log(sum({}));
  console.log(sum({ x: 4 }));
  console.log(sum({ x: 5, y: 6 }));
})();
