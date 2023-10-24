var stack = [];
// Last In Last Out
// 100, 200, 300 저장
stack.push(100, 200, 300);

// 300, 200, 100 출력
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
var queue = [];
// First In First Out
// 100, 200, 300 저장
queue.unshift(100, 200, 300);

// 100, 200, 300 출력
console.log(queue);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(stack, queue);
