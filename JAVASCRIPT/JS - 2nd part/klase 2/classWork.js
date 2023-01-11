//sta je node?

//file for class subject
/*
class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  fullname( ){
    return console.log( this.name + " " + this.type);
  }
}

const newCar = new Car("Audi", "Limo");

console.log(newCar);

newCar.fullName();
*/
/*
class Person {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  imeiPrezime() {
    return console.log(this.ime + " " + this.prezime);
  }
}
const newPerson = new Person(" Merjem", "Hadzijaasarevic");
console.log(newPerson);

newPerson.imeiPrezime();
*/
//create a new class User with data : lName(last Name), yearOfBirth,
//Create a method which will calculate how old is user

class User {
  constructor(lName, yearOfBirth) {
    this.lName = lName;
    this.yearOfBirth = yearOfBirth;
  }
  calculateYears() {
    return 2022 - this.yearOfBirth;
  }
}
//super( ) metoda koja uzima iz prethodne i dodaje na sledecu klasu
class AdditionalInfo extends User {
  constructor(street, city, state, phoneNumber) {
    super(newUser.lName, newUser.yearOfBirth);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.number= this.numberHandler (this.state, this.phoneNumber);
  }
  numberHandler(state, phoneNumber) {
    findState= this.statesArr.find(s=> s.state === state);
    return phoneNumber.replace(phoneNumber[0], this.findState.cId);
   // phoneId = this.phoneNumber.replace();
  }
}

const newUser = new User(" Hadzijasarevic", 2001);
console.log(newUser);

newUser.calculateYears();

const additional= new AdditionalInfo ("rifata b", "Srb", "Novi Pazar", '0623589415');
console.log(additional);

statesArr = [
  { state: "USA", cId: "+1" },
  { state: "UK", cId: "+44" },
  { state: "Mexico", cId: "+52" },
  { state: "India", cId: "+91" },
  { state: "China", cId: "+86" },
  { state: "Serbia", cId: "+381" },
];
