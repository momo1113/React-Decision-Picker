let nameLet = "jen";
let name = "jen";

var fullName = "Momo Sun";
if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}

const squareArrow = x => x * x;

const getFullName = fullName => {
  let firstName = fullName.split(" ")[0];
};

const getFullName = fullName => fullName.split(" ")[0];

const add = (a, b) => {
  return a + b;
};

const user = {
  name: "Andrew",
  cities: ["San Francisco", "New York", "Dublin"],
  prinPlacedLived() {
    const city = this.cities.map(city => {
      return city;
    });
  }
};


const multiplier = {
 numbers = [1,2,3,4],
 mulitplyBy = 3,
 
 muliply(){
     return this.numbers.map((number) => this.mulitply * number)
 }
}
