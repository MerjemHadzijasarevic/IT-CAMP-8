/*const form = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");

console.log(name);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  console.log(name.value);
});
*/
/*
fetch("https://catfact.ninja")
  .then((res) => {
    console.log("fetch finished");
    return res.json();
  })
  .then((res) => {
    console.log(res);
  });
*/
//ispisi niz i izmeni elemente u nizu
async function getData() {
  const res = await fetch("https://catfact.ninja/facts");
  const resJson = await res.json();
  const { data } = resJson;
  data.forEach((el) => {
    a = document.createElement("h1");
    a.innerText = el.fact;
    a.style.backgroundColor = "pink";
    a.style.border = "1px solid black";

    document.body.appendChild(a);
    //console.log(el);
  });
}
getData();
