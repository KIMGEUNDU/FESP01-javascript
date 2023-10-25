// ex02-15.js 복사
// 화살표함수는 this를 사용할 수 없다. 없으면 나의 부모에서 this를 찾는다.
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; //this = counter
    var visit2 = () => {
      this.count++; //this = counter
    };
    visit2();
  },
};

counter.visit();
counter.visit();
console.log('합계', counter.count);
