var arr = [300, 400];
arr[arr.length] = 500;
arr.unshift(200);
arr.unshift(100);

console.log(arr);

// 배열의 모든 요소 출력(for)
console.log('for 문');
for (let i = 0; i < arr.length; i++) {
  console.log(i + ' : ' + arr[i]);
}

// 배열의 모든 요소 출력(for-in)
console.log('for-in 문');
for (let i in arr) {
  console.log(i + ' : ' + arr[i]);
}

// 배열의 모든 요소 출력(for-of)
console.log('for-of 문');
for (let i of arr) {
  console.log(i);
}

// 배열의 모든 요소 출력(forEach())
console.log('forEach() 문');
arr.forEach((v, i) => {
  console.log(i + ' : ' + v);
});
