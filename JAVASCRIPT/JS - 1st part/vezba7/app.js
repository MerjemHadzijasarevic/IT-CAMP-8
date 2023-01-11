/*numbers = [1, 2, 3];

unos = parseInt(prompt("Unesite broj"));
numbers.push(unos);
console.log(numbers);
*/

//push - ubacuje na poslednje mesto
//pop - izbacuje poslednji el
//shift - izbacuje prvi
//unshift - dodaje na pocetak

//arr.slice( ukljucje prvi index, ali ne i poslednji)
//arr.splice(prvi argument odakle brise, drugi koliko brise, treci dodaje)

/* zameniti pozicije elementima u nizu
numbers = [1, 2, 3, 4];
reversearray = [];

for (el of numbers) {
  reversearray.unshift(el);
}
console.log(reversearray);
*/
/*
niz = [];
unos = parseInt(prompt("Unesite duzinu niza"));

for (i = 0; i < unos; i++) {
  broj = parseInt(prompt("Unesite broj"));
  niz.push(broj);
}
console.log(niz);
*/
/*
arr1 = ["Red", "Green", "White", "Black"];
str = " ";

for (i = 1; i < arr1; i++) {
  str += "+" + arr1;
}
console.log(str);
*/
/*
str = "The Quick Brown Fox";
//"ThE QuIcK bRoWn FoX"
res = "";
for (i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    res += str[i].toUpperCase();
  } else {
    res += str[i].toLowerCase();
  }
}
console.log(res);
*/
/*
arr = [42, 25, 56, 47, 32];
poz = [];
neg = [];

for (el of arr) {
  if (el % 2 == 0) {
    poz.push(el);
  } else {
    neg.push(el);
  }
}
console.log(poz);
*/
/*
unos = prompt("Unesite broj");

str = unos.toString();

result = [str[0]];

for (let x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));
*/
