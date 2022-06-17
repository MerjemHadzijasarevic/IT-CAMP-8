/*cars = [3, 5, 10, 21, 42, 22, 1];
sum = 0;

for (i = 0; i < cars.length; i++) {
  sum += cars[i];
}
console.log(sum);
*/

/*numbers = [3, 5, 10, 21, 42, 22, 1];          NACIN1

unos = prompt("Unesite vrednost");

for (i = 0; i < numbers.length; i++) {
  if (unos == numbers[i]) {
    console.log("vrednost postoji");
  } else {
    console.log("vrednost ne postoji");
  }
   
  numbers = [3, 5, 10, 21, 42, 22, 1];          NACIN TACAN
 unos = prompt("Unesite vrednost");
 founded=true;
for (i = 0; i < numbers.length; i++) {
    if (unos == numbers[i]) {
  founded=true;
  break;
   }
}

if (unos) {
  console.log("vrednost postoji");
} else {
  console.log("vrednost ne postoji");
*/

/* najveci i najmanji broj
numbers = [3, 5, 10, 21, 42, 22, 1];
maxNum = numbers[0];
minNum = numbers[0];

for (i = 0; i < numbers.length; i++) {
  
  if (numbers[i]>maxNum) {
maxNum=numbers[i];
  }
  if (numbers[i]<minNum) {
    minNum=numbers[i];
  }
}
console.log(maxNum);

console.log(minNum);

*/
/* drugi najveci broj
numbers = [3, 5, 10, 21, 42, 22, 1];
maxNum = numbers[0];
secondmax = numbers[0];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
  if (numbers[i] > secondmax && numbers[i] < maxNum) {
    secondmax = numbers[i];
  }
  console.log(secondmax);
}
*/
/* razlika brojeva
numbers = [3, 5, 10, 21, 42, 22, 1];
maxNum = numbers[0];
minNum = numbers[0];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
  if (numbers[i] < minNum) {
    minNum = numbers[i];
  }
}
console.log(maxNum - minNum);
*/
