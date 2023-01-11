for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
//var se deklarise za global scope a let i const su u jednom block scopeu
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
