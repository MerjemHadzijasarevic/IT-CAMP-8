//rekurzija je pozivanje funkc unutar iste funkc
//Moze se postici efekat petlje
//unutar obicnih zagrada je parametar
function Ispisivanje(n) {
  console.log(n);
  if (n - 1 > 0) {
    return Ispisivanje(n - 1);
  }
}
Ispisivanje(10);

//callback funkc je funkcija koja se nadje kao arg neke druge funkc ili (metode)
let talib = "Talib";

function main(func) {
  console.log("ovo je kod koji se izvrsava unutar glavne funkcije");
  func(talib);
}

//callback funkcija:
function callBack(arg1) {
  console.log(`Pozdrav ljudi ja sam novi clan,${arg1}`);
}
main(callBack);

//Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funnkciji, ali ispred toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koji predstavlja argumente callback funkcije.

/*function aritmetickaSredina(a, b, c) {
  var sum;
  sum = (a + b + c) / 3;
}
function main() {
  console.log("Ovo je glavna funkcija");
}
main(aritmetickaSredina);
*/
// OBJEKTI SU GLAVNA STVAR U JAVASCRIPTU.
// Objekti su promenljive koje mogu sadrzati vise vrednosti.
// Oni se zapisuju u name:value paru. Jedan takav par se zove svojstvo.

const car = {
  marka: "BMW",
  godiste: 2004,
  boja: "crna",
};

console.log(car); // ispisivanje objekta

// Svojstvima objekta mozemo da pristupimo na 2 nacina:
// 1.
console.log(car.boja);
// 2.
console.log(car["marka"]);

// Objekti takodje mogu sadrzati metode.
// Metode su sadrzane unutar objekta kao definicija funkcije.

const person = {
  JMBG: 1306005783971,
  ime: "Muhamed",
  prezime: "Krkmisevic",
  mesto: "Lug",
  imeIPrezime: function () {
    return this.ime + " " + this.prezime;
  },
};
// this predstavlja referencu na neki objekat.
// this nije promenljiva, vec keyword (rezervisana rec) u JavaScript_u.
// Vrednost this se ne moze promeniti.

console.log(person);
console.log(person.JMBG);
console.log(person.imeIPrezime());

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek datih ocena).
