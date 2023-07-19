function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

function Employee(name, gender, company) {
  Person.call(this, name, gender);
  this.company = company;
}

var st = new Student("사탕", "male", "서울대");
var p = new Employee("팡이", "female", "샘숭");

console.log(st);
console.log(p);
