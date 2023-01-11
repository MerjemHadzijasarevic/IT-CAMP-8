//JavaScript moduli (modules)

//Moduli nam dozvoljavaju da podelimo kod u vise fajlova.
//export const zbir = function (arg1, arg2) {  --direktno ispred
const zbir = function (arg1, arg2) {
  return arg1 + arg2;
};

const br = 5;
export default zbir;
export { br };

//Postoje 2 nacina za export
//export zbir
//export default zbir (koristi se samo jednom u fajlu, moze samo jednom da se iskoristi)
