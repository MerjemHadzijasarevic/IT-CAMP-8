/*unos = prompt("Unesite sifru");

sifra = "1234";

if (unos === sifra) {
  console.log("Sifra je tacna");
}

*/

/*n = prompt("Unesite broj");

if (n % 2 === 0) {
  console.log("a je parno");
} else {
  console.log("a je neparno");
}
/*if (n % 2 !== 0) {
  console.log("a je neparno");
}
*/
/*
unos=prompt("Unesite broj:");
if( unos>=0 ){
  console.log("broj je pozitivan");
}
else{
  console.log("broj je negativan");
}
*/
unos = prompt("Unesite godinu:");

if (
  (unos % 400 === 0 && unos % 100 === 0) ||
  (unos % 4 === 0 && unos % 100 === 0)
) {
  console.log("godina nije prestupna");
} else {
  console.log("godna je prestupna");
}
