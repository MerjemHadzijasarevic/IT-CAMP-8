/*console.log(1);
console.log(2);
setTimeOut(() => console.log(3), 10);
console.log(4);
setTimeOut(() => console.log(5), 15);
*/
//promise
//PROMISE je Java Script objekat koji predstvalja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.
//dva stanja (ima i trece- na cekanju)
/*
const imaticas = new Promise((resolve, reject) => {
    const response= 200; //404
    if (response===200){
        resolve();
    }else{
        reject();
    }
}
);
imaticas
.then(( ) => console.log("Odrzan je cas."))
.catch(( ) => console.log("Nije odrzan cas."))
.finally(( ) => console.log("Poruka koja se ispisuje u svakom slucaju."));
*/
//imaticas.then().catch().finally()
//Ispisati poruku da li je dobijen niz ili nije.

//resolve i reject su callback funkcije
//setTimeout ima 2 argumenta : callback i delay
//var se deklarise za global scope a let i const su u jednom block scopeu
//razlika izmedju mape  i objekta  je sto kljucevi kod mape mogu biti string

const isArray = new Promise((resolve, reject) => {
  const arr = [1, 2, 3];
  if (arr.length > 0) {
    resolve();
  } else {
    reject();
  }
});

isArray
  .then(() => console.log("It is array."))
  .catch(() => console.log("Is not an array"))
  .finally(() => console.log("Check it again"));
