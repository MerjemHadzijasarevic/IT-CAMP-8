// 1. Zadatak

const radnik = {
  first_name: "Dzenan",
  last_name: "Kosuta",
  fullname: function () {
    return this.first_name + " " + this.last_name;
  },
  adresa: {
    ulica: "Avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return this.grad + " " + this.ulica + " " + this.grad; //`${radnik.firstname} ${radnik.lastname} stanuje na adresi ${this.ulica} ${this.broj}
    },
  },
};

console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

//2. zadatak
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "automatik",
  km: 240000,
  vlasnik: [062321552],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17h free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (pocetniDatum, krajnjiDatum) {
      const pocetniDan = pocetniDatum.getDate();
      const krajnjiDan = krajnjiDatum.getDate();
      const ukupnoDana = krajnjiDan - pocetniDan;
      return ` Cena parkinga za dati period je ${
        ukupnoDana * this.dnevnaKarta
      } RSD`;
    },
  },
};
console.log(
  automobil.garaza.platiZa(new Date(2022, 10, 16), new Date(2022, 10, 21))
);

//Date.parse( ) daje razliku datuma izmedju 1970 i novog datuma
