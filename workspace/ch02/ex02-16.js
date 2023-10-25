console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  var min = nums[0];
  for (var i = 0; i < nums.length; i++) {
    // 첫번째 방법
    if (nums[i] < min) {
      min = nums[i];
    }
    // 두번째 방법
    // min = Math.min(min, nums[i])
  }
  return min;
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest([100, 20, 60, 50, 70])); // 20
