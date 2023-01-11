const person = {
  JMBG: 1404003783933,
  firstname: "Ahmed",
  lastname: "Krkmisevic",
};

//Objekti su promenljivi ! (Mutable)
//Bilo koja promena na x objektu ce promeniti vrednost na person obj.
//Ovo vazi za neprimitivne tipove podataka, tj. na novoj promenljivoj x dodeljujemo referencu na obj person (a ne vrednost.)
//Identicko izjednacavanje.
const x = person;

console.log(x);

x.firstname = "Muhamed";
console.log(x);
console.log(person);
//Brisanje svojstva iz objekta se vrsi preko delete keyworda:

//delete person["JMBG"];
delete person.JMBG;
console.log(person);
//delete brise i name i value.

//vrednost u objekat moze biti: neki drugi objekat, niz, metoda-funkcija itd(string, num. boolean)

//JSON.stringify() metoda sluzi za prevodjenje objekta u JSON, nakon toga JSON formata u string.

const stringObjekta = JSON.stringify(person);
console.log(stringObjekta);
console.log(typeof stringObjekta);

console.log(JSON.parse(stringObjekta));
console.log(typeof JSON.parse(stringObjekta));

//JSON.parse nam vraca (ako moze) objekat iz poslatog argumenta

//ZADatak
// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};
