var sum = function (x, y, z) {
  return x + y + z;
};

// Function에 partial 기능 추가
// prototype(함수에 메소드를 추가), this(나를 호출한 함수),
// arguments, 전개연산자, 고차함수(함수가 함수를 리턴한다),
// 일급객체, apply, closure(내부함수가 외부함수의 지역변수를 사용하는 상태)를 볼 수 있는 함수
Function.prototype.partial = function () {
  var fn = this;
  var preArgs = [...arguments]; //[20, 80]

  return function () {
    var args = [...preArgs, ...arguments]; //[20,80 ...30]

    // return fn(...args)
    return fn.apply(this, args);
  };
};

var sum100 = sum.partial(20, 80);
console.log(sum100(30)); //130
console.log(sum100(50)); //150
