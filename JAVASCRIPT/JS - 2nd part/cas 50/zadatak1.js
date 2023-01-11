//Unose se dva stringa A i B. Kreirati novi string kombinacija iz A i B tako da se kombinuju prvi sa prvim, drugi sa drugim znakom itd.
//Ako je jedan duzi od drugog na kraju dodati ynakove viska.

const stringovi = (A, B) => {
  const duzina = A.length > B.length ? A.length : B.length;
  const C = " ";
  for (let i = 0; i <= duzina - 1; i++) {
    if (A[i] !== undefined && B[i] == undefined) {
    }
    C += A[i] + B[i];
  }
  return C;
};
console.log(stringovi("Pera", "Sladoled"));
