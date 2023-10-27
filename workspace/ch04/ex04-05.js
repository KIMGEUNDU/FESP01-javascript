// ex02-21.js 복사

// 모든 함수에 memoization 기능 추가
//isPrime(3) => 캐시X
// isPrime.memo(100000007) => 캐시X
// Function.prototype.memo = function (key) {
//   // 캐시를 위한 코드(메모이제이션)
//   this._cache = this._cache || {};

//   if (this._cache[key] !== undefined) {
//     return this._cache[key];
//   } else {
//     return (this._cache[key] = this(key));
//   }
// };

// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  // 소수 판별 코드
  var prime = true;
  for (var i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');

// 리액트 메모이제이션
// const fn = React.memo(function () {});
// const fn1 = React.useMemo(function () {});
