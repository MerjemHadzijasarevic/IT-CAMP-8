//JavaScript moduli (modules)

//Moduli nam dozvoljavaju da podelimo kod u vise fajlova.
//Za pravljenje modula koristi se :
//1.import i export i statements (naredbe)

//Postoje 2 nacina ya export
//export zbir
//export default zbir (koristi se samo jednom u fajlu, moze samo jednom da se iskoristi)

import zbir from "./functions.js";
import { br } from "./functions.js";

console.log(zbir(4, 6));
console.log(br);
