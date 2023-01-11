const punoletnost = new Promise((resolve, reject) => {
  const osoba = {
    ime: "Dzenan",
    prezime: "Kosuta",
    godine: 26,
  };
  if (osoba.goodine > 17) {
    resolve("Vi ste punoletni.");
  } else {
    reject(osoba.godine);
  }
});

punoletnost
  .then((arg) => console.log(arg))
  .catch(() => console.log("Imate ${godine) godina."));
