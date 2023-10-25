// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i + ' : ' + arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr = {
  0: 'orange',
  1: 'yellow',
  2: 'green',
  length: 3,

  push: function (elem) {
    // 마지막 인덱스에 지정한 element를 추가
    // length를 1 증가시킨다.
    this[this.length] = elem;
    this.length++;
  },

  shift: function () {
    // 첫번째 요소를 삭제하고 반환한다.
    // length를 1 감소시킨다.
    var first = this[0];
    for (var i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    delete this[this.length];
    return first;
  },

  pop: function () {
    // 마지막 요소를 삭제하고 반환한다.
    // length를 1 감소시킨다.
    var last = this[this.length - 1];
    this.length--;
    delete this[arr.length];
    return last;
  },
};

arr.push('black');
arr.push('white');

console.log(arr.shift());
console.log(arr.pop());

printArr(arr);
console.log(arr);
// 0 orange
// 1 yellow
// 2 green
// length 3
