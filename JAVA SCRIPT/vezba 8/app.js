/*function Mojafunkcija() {
  unos = prompt("Unesite broj");
  console.log(unos);
}
Mojafunkcija();
*/

/* funkcija za sabiranje brojeva
function sum(unos1, unos2) {
  console.log("Unos je", unos1 + unos2);
}

sum(2, 5);
sum(Number(prompt("Unesite broj:")), 5);
*/

/* da li je broj paran/neparan
function checkNumber() {
  a = prompt("Unesite broj");
  if (a % 2 == 0) {
    console.log("Broj je paran");
  } else {
    console.log("Broj je neparan");
  }
}
checkNumber();
*/
/* max element
function findlargest(arr) {

  max=arr[0];

  for (el of arr) {
    if (el>max) {
      max = el;
    }
    console.log("Najveci je" ,max);
  }
}
findlargest(arr = [1, 2, 7, 3];);
*/
/*
function anagram(a, b) {
    isAnagram=true;
    if(a.length!==b.length){
        
    }

  if (word1.includes(word2)) {
    console.log("rec je anagram");
  } else {
    console.log("rec nije anagram");
  }
}
anagram("spear", "pears");
*/
/* average number
function avgvalue(a, b, c) {
  sum = 0;
  sum = (a + b + c) / 3;
  console.log("Prosecna vrednost je:", sum);
}
avgvalue(5, 4, 5);
*/
/*
function matrica(unos) {
  
  for (i = 0; i <= unos; i++) {
    str = "";
    for(j=0; j<unos; j++)
  }
  console.log(str + str);
}

matrica(5);
*/
/*
//twice as old
function twiceasold(yearsOfFather, yearsOfSon) {
  return Math.abs(yearsOfSon - (yearsOfFather - yearsOfSon));
}
res = twiceasold(36, 7);
console.log(res);
*/

//takes 2 int as str = sum as str
/*function sumString(a, b) {
  unos1 = parseInt("5");
  unos2 = parseInt("4");
  sum = parseInt(a + b);

  return sum;
}
*/

/*function positiveOddBelowN(n) {
 count = 0;
for(i=1; i<count; i+=2;)
return count;
*/
/*
function checkSameCase(a, b) {

  if (a == a.toLowerCase()===a &&  b.toLowerCase()===b) {
    return 1;

  } if (a == str1.toUpperCase() && str2 == str2.toUpperCase()) {
    return 1;
  }
  else if ( Number(a)|| Number(b)){
    return -1;
  }
}
*/

/*function multiplesofanumber(a, b) {
  array = [];
  for (i = 0; i <= b; i++) {
    if (array[i] % a === 0) {
      array.push(b[i]);
    }
  }
  console.log(array);
}
multiplesofanumber(5, 25);
*/

/*niz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [12,15,18],
]; */
/*
niz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

pomarr = [];

for (i = 0; i < niz; i++) {
  console.log(niz);
}
*/
/* ispis elemenata / CALL BACK FUNCTIONS-----------------------------------------
arr = [3, 9, 1, 27, 54, 23];
arr.forEach((el) => {
  console.log(el);
});
*/
/* suma elemenata
arr = [3, 9, 1, 27, 54, 23];
sum = 0;
arr.forEach((element) => {
  sum += element;
  console.log(sum);
});
*/
// ocistiti niz od vrednosti
/*
data = [0, 1, false, 2, undefined, " ", null];
arr = [];
data.forEach((el) => {
  if (el) {
    arr.push(el);
  }
  console.log(arr);
});

*/
/*
arr = [1, 2, 3, 2, 1, 5, 6, 9];
arr2 = [];
arr.forEach((el) => {
  if (el !== 1 && el !== 2) {
    arr2.push(el);
  }
});
console.log(arr2);
*/
/*
function multiple(number) {
  if (number % 2 == 0) {
    console.log(8 * number);
  } else console.log(9 * number);
}
multiple(5);
*/
/*
function fakeBin(str) {
  for (el of str) {
    if (Number(str) >= 5) {
      str += "1";
    } else {
      str += "0";
    }
  }
  console.log(str);
}
fakeBin(45389125586);
*/
/*
function isPalindrome(word) {
  wsens = word.replaceAll("  ", " ").toLowerCase();
  lastletter=word-1;
}
*/
/*
function isPalindrome(x) {
str="";
for(i=x.length-1; i>=0, i--;){
  str+=x[i];
}
return str.toLowerCase()===x.toLowerCase();
}*/
/* // bez znakova !
function withoutmarks(s) {
  str2 = " ";
  for (el of s) {
    if (el !== "!") {
      str2 += el;
    }
  }
  console.log(str2);
}

withoutmarks("hello!");
*/
/*
function nonnegativeint(n) {
  arr = [];
  for (i = 0; i < n; i++) {
    arr.push(2 ** i);
  }
  console.log(arr);
}
nonnegativeint(2);
*/
/* filtriranje niza
data = [1, true, " ", "daris", false, 23, null, undefined, 123, 0, 77];
//[1,true, "daris", 23, 123 , 77];

arr = data.filter((el) => {
  return el; // return !el (suprotno/returna false)
});
console.log(arr);
*/
/*
res=[1,10,5,4,8,9,6]
  res = num.filter((num) => {
    return num > 5;
  });
*/
/*
  characters=["dog", "wolf", "family", "eaten"];

  arr=characters.filter((el)=>{
    return el.length<=5;
  }
  console.log(arr);*/
/*
arr1 = [10, 20, 30];
arr2 = arr1.map((el) => {
  return el * 2;
});
console.log(arr2);
*/
/* num to str
arr1 = [1, 2, 3, 4, 5];
arr2 = arr1.map((el) => {
  return String(el);
});
console.log(arr2);
*/
/*
arr1 = ["john", "JACOBS", "jack"];
arr2 = arr1.map((el) => {
  return el[0].toUpperCase + el.slice(1).toLowerCase;
});
console.log(arr2);
*/
//arr.some metoda vraca true/false ako jedan ili vise ispunjava uslov /ili izmedju svakih elemenata
//arr.every ako svi ispunjavaju uslov
//forEach poziva funkciju ya svaki element prosledjuje se el index i arr
//filter vraca novi array filtriran
//map vraca array iste duzine
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = arr1.every((el) => {
  return el > 0;
});
console.log(arr2);

//domaci w3school array iteration
