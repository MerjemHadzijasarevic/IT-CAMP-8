/*const timeoutId = setTimeout(konzlog, 3000, "Merjem", "Hadz");
console.log("hello");
//clearInterval(timeoutId);

function konzlog(ime) {
  console.log("ovo je log ${ime}");
}
let counter = 0;
const increment = () => {
  counter += 1;
  console.log(counter);
};

const intervalId = setInterval(() => increment(), 1000);

const stop = () => {
  clearInterval(intervalId);
};
*/
let sec = 0;
let min = 0;
let h = document.getElementById("stopwatch");

const increase = () => {
  if (sec === 60) {
    min++;
    sec = 0;
  }
  sec++;
  h.innerHTML = sec;
};
setInterval(increase, 500);
//camil-p