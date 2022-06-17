ocena = prompt("Unesite broj:");

if (0 < ocena && ocena < 20) {
  console.log("Ocena je 1");
} else if (21 < ocena && ocena <= 40) {
  console.log("Ocena je 2 ");
} else if (41 < ocena && ocena <= 60) {
  console.log("Ocena je 3");
} else if (61 < ocena && ocena <= 80) {
  console.log("Ocena je 4");
} else {
  console.log("Ocena je 5");
}
