//call( ), apply ( ), bind ( ) - ovo su funkcije koje koristimo u slucajevima kada zelimo da se neka funkcija primeni na objekat koji je izvan date funkcije.
//Primeri za svaku:

const person = {
  firstName: "Muhamed",
  lastName: "Krkmisevic",
  dateOfBirth: new Date(2005, 5, 13),
  fullName: function () {
    return `${this.first.name} ${this.lastname}`;
  },
};
console.log(person.fullName());

const person2 = {
  firstName: "Musa",
  lastName: "Zecirovic",
  dateOfBirth: new Date(2006, 8, 12),
};
console.log(person2);

//Sintaksa za koriscenje ovih funkcija: prvo ide pozivanje funkc, pa onda kao argumenti funkc idu:
//1. Objekat koji zelimo da se primeni data metoda;
//2.eventualnee argumente funkc ( ako funkc to zahteva)

console.log(person.fullName.call(person2));

const restoran = {
  hrana: "Pizza",
  gosti: "zadovoljni",
  lokacija: "uzi centar grada",
};
const restoran2 = {
  hrana: "supa",
  gosti: "zgrozeni",
  lokacija: "Mur",
};

function poruka(grad, drzava) {
  return `Hrana je vecerasnji specijalitet naseg restorana je ${this.hrana}. Sa ponosom mozemo reci da su gosti ${this.gosti}. Nas restoran se nalazi u ${this.lokacija} u ${grad}, ${drzava}.`;
}

console.log(poruka.call(restoran, "Beograd", "Srbija"));
console.log(poruka.call(restoran2, "Novi Pazar", "Srbija"));

//apply( ) je vrlo slicna samo sto se argumenti funkc stavljaju unutar niza
//ako nemaju argumente apply i call su potpuno iste
console.log(poruka.applyl(restoran, ["Beograd", "Srbija"]));

//bind( ) funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj promenjljivoj i onda tu promenljivu (funkciju) pozovemo sa potrebnim arg.

const bindFunction = poruka.bind(restoran2);
console.log(bindFunction("Sarajevo", "BIH"));
