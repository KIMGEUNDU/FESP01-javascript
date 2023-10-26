// ex03-05.js 복사
(function () {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }

    avg() {
      return this.sum() / 2;
    }
  }

  var s1 = new HighSchool(100, 91);
  console.log(s1.sum());
  console.log(s1.avg());

  class College extends HighSchool {
    constructor(kor, eng) {
      super(kor, eng);
    }

    // 학점 계산 메서드
    grade() {
      var grade = 'F';
      var avg = this.avg();
      if (avg >= 90) {
        grade = 'A';
      } else if (avg >= 80) {
        grade = 'B';
      } else if (avg >= 70) {
        grade = 'C';
      } else if (avg >= 60) {
        grade = 'D';
      }
      return grade;
    }
  }

  var s2 = new College(80, 71);
  console.log(s2.sum());
  console.log(s2.avg());
  console.log(s2.grade());
})();
