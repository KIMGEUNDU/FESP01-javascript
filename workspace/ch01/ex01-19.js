// TODO: HOISTING 단원. var로 선언한 변수가 함수단위의 접근이 가능한 이유

// 지정한 두 값의 최대값을 반환한다.
function max(n1, n2) {
  // var maxNum;
  // let maxNum
  // const maxNum

  if (n1 > n2) {
    var maxNum = n1; //var는 함수 영역 안에서만 가능
  } else {
    let maxNum = n2; //let은 블록 영역안에서만 가능
  }

  return maxNum;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200
