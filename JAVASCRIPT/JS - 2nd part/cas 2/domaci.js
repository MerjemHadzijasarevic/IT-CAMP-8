//Napraviti objekat student koji ce da ima vrednost (po zelji), svojstva:
//ime, prezime, broj indeksa, ocene (niz ocena koje student ima u trenutnoj godini),
//prosekOcena (funkcija na osnovu ocene vraca prosek datih ocena)
/*const ocene = [7, 7, 8, 9];
let sum = 0;
let average = 0;
function prosekOcena() {
  for (i = 0; i < ocene.length; i++) {
    sum += ocene[i];
  }
  return (average = sum / 4);
}

const student = {
  ime: "Merjem",
  prezime: "Hadzijasarevic",
  brojIndeksa: "036-004",
  ocene: [7, 7, 8, 9],
  prosek: prosekOcena(),
};
console.log(student);*/

const student = {
  ime: "Ahmed",
  prezime: "Krkmisevic",
  brojIndeksa: "035029",
  ocene: [7, 9, 10, 6, 5, 8],
  prosekOcena: function () {
    const brojOcena = this.ocene.length;
    const suma = this.ocene.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const prosek = suma / brojOcena;
    return `Prosek trenutnih ocena ${this.ime}a ${this.prezime}a je ${prosek}.`;
  },
};

console.log(student);
console.log(student.ime);
console.log(student["prezime"]);
console.log(student.prosekOcena());
