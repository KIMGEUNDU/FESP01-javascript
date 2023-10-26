var todolist = [
  {
    _id: 1,
    title: 'Javascript 공부',
    done: true,
  },
  {
    _id: 2,
    title: 'Typescript 공부',
    done: false,
  },
  {
    _id: 3,
    title: 'React 공부',
    done: false,
  },
  {
    _id: 4,
    title: 'React 프로젝트',
    done: true,
  },
];

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(function (v) {
  if (v.done) {
    doneList.push(v);
  }
});
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter(function (v) {
  return v.done;
});

console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록
var reaminList = todolist
  .map(function (v) {
    if (!v.done) {
      return v;
    }
  })
  .filter((v) => v);

console.log('map() 남은 할일 목록', reaminList);

// reduce() 남은 할일 수
var reaminCount = todolist.reduce(function (arr, cur) {
  return !cur.done ? (arr += 1) : (arr += 0);
}, 0);

console.log('reduce() 남은 할일 수', reaminCount);

// find() _id=2인 할일
var todo = todolist.find(function (v) {
  if (v._id === 2) {
    return v;
  }
});

console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
var todoIndex = todolist.find(function (v) {
  return v._id === 3;
});

todoIndex = todolist.indexOf(todoIndex);

console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(function (v) {
  if (reaminCount > 0) {
    return true;
  } else {
    return false;
  }
});

console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(function (v) {
  return v.done;
});
console.log('every() 할일이 모두 완료 되었는가?', busy);
