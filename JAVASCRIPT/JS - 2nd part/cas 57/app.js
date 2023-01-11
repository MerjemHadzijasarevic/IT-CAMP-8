//getElementById--funkcija u js-u koja omogucava pristup elementu putem njegovog id-ja
var ime = document.getElementById("ime"); 
ime.innerText = "Merjem";
//style- je nacin pristupa i izmene css-a elementa, a color je atribut koji menjamo, moze biti bilo koji drugi
ime.style.color = "red";
ime.style.fontSize = "50px";

var secondElement = document.getElementById("secondElement");
secondElement.innerText = "Hadzijasarevic";
secondElement.style.color = "blue";
secondElement.style.fontSize = "50px"; //promena velicine fonta kroz css
var prazan = document.getElementById("prazan");
//innerText je nacin izmene ili popunjavanja texta unutar html elementa, innerHTML je za unos html elementa
prazan.innerText = "Novi tekst za prazan element";

var prazan = document.getElementById("prazan");

//image
var nature = document.getElementById("nature");
nature.style.borderRadius = "50%";
nature.style.width = "300px";
nature.style.height = "300px";
//addEventListener je funkcija koja se dodaje html elementu koji smo naznacili, on prati dogadjaje unutar ili oko naznacenog elementa  i izvrsava funkciju koja mu je zadata
//prvi argument funkcije je event (sta korisnik treba da uradi(izvrsi))
//drugi argument je funkcija koju treba program da obavi 
nature.addEventListener("click", () => {
  nature.style.display = "none";
  setTimeout(() => {
    nature.style.display = "block";
  }, 5000);
  // alert("CLICKED");
});
console.log(nature.getAttribute("src"));
//getAttribute- je funkcija koja uzima unete podatke atributa koji se nalazi unutar elementa koji se naznacili.
