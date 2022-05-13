/*  zadatak1

unos= Number(prompt("Unesite broj:"));

for (i = 0; i <= unos; i++) {
  console.log(i);
}
*/

/* zadatak 2
pocetni = Number(prompt("Unesite broj:"));
krajnji = Number(prompt("Unesite broj:"));

for (i = pocetni; i <= krajnji; i++) {
  console.log(i);
}
*/

/* zadatak 3
pocetni = Number(prompt("Unesite pocetni broj:"));
krajnji = Number(prompt("Unesite krajnji broj:"));
sum = 0;
for (i = pocetni; i <= krajnji; i++) {
  sum = sum + i; //sum+=i
}

console.log(sum);
*/

/*
pocetni = Number(prompt("Unesite pocetni broj:"));
krajnji = Number(prompt("Unesite krajnji broj:"));
sum = 0;
for (i = pocetni; i <= krajnji; i++) {
    console.log(i**2);
}
*/

/* 
unos = Number(prompt("Unesite broj: "));
sum = 0;

for (i = 0; i < unos; i++) {
  unos = Number(prompt("Unesite broj: "));
  unos = sum + unos;
}

console.log(sum);
*/

red = Number(prompt("Unesite broj redova:"));
str = "";
for (i = 0; i < red; i++) {
  str += "*";
  console.log(str);
}
