//배열에 min()추가
Array.prototype.min = function () {
  return Math.min(...this);
};

// 모든 함수에 memoization 기능 추가
//isPrime(3) => 캐시X
// isPrime.memo(100000007) => 캐시X
Function.prototype.memo = function (key) {
  // 캐시를 위한 코드(메모이제이션)
  this._cache = this._cache || {};

  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};

// 모든 함수에 memoization 기능 추가
// 클로저 사용한 memoization 기능
// isPrime(3) => 캐시 X
// isPrime = isPrime.memoize()
// isPrime(123123123) => 캐시O
Function.prototype.memoize = function () {
  var fn = this; //isPrime

  return function () {
    return fn.memo.apply(fn, arguments);
  };
};
