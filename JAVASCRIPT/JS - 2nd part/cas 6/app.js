//destruktori

person = {
  ime: "Amina",
  prezime: "Besirovic",
  starost: 18,
  bojaOciju: "braon",
  polozenC: true,
};
person = person2;

osoba = {
  ime: "Amina",
  prezime: "Besirovic",
  starost: 18,
  bojaOciju: "braon",
  polozenC: true,
};

//freeze( ) metoda cini objekat immutable (nema promena,brisanja...)
person.prezime = "Marovac";
console.log(person);
/*Object.freeze(person);
person.prezime ="Besirovic"; //ne menja se jer je obj freezed
console.log(person);
person.godinaRodjena = 2003;
console.log(person); 
*/

//seal( ) metoda cini objekat promenjljivim  ali nije dozvoljeno dodavanje niti brisanje elemenata
/*
Object.seal(person);
person.godinaRodjena = 2003;
console.log(person); 
person.prezime ="Besirovic";
console.log(person); 
delete person.bojaOciju;
*/

//values( ) vraca niz vrednosti datog objekta
//values metoda za nizove****
const vrednosti = Object.values(person);
console.log(vrednosti);

//keys( ) vraca niz vrednosti datog objekta
//values metoda za nizove****
const svojstva = Object.keys(person);
console.log(svojstva);

//entries( ) metoda vraca niz nizova (svaki podniz je name:value par).
const parovi = Object.entries(person);
console.log(parovi);
const parovi2 = parovi.flat();
console.log(parovi2);

// is( ) metoda ispituje identicku jednakost.
console.log(Object.is(person, osoba));
console.log(Object.is(person, person2));
