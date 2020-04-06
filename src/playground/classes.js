// Car

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getGretting() {
    return `hi. I am ${this.firstName}`;
  }
}

const me = new Person("momo", "sun");

console.log(me.getGretting());

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }
}
