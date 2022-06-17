/*red = Number(prompt("Unesite broj redova:"));

for (i = 1; i < red; i++) {
  str="";
  for (j = 1; j <=i; j++) {
str+=j;
  
}
console.log(str);
}
*/
/*
red = Number(prompt("Unesite broj redova:"));

for (i = 1; i < red; i++) {
  str = "";
  for (j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
}
*/
/*
red = Number(prompt("Unesite broj redova"));
str = "";
space = "";
for (i = 1; i < red; i++) {
  space += " ";
}
for (i = 1; i <= red; i++) {
  str += "* ";
  console.log(space + str + space);
  space = space.slice(1);
}
*/
/*
kraj = Number(prompt("Unesite krajnji broj:"));

for (i = 1; i <= kraj; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else {
    console.log(i);
  }
}
*/
unos = prompt("Unesite broj:");
sum = 0;
broj = "";
for (i = 1; i <= unos; i++) {
  broj += 1;
  sum = sum + parseInt(broj);
}
console.log(sum);
