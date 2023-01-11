var a = "Ana";
//          0123
var wolettersandsmallspaces = a.replaceAll("  ", " ").toLowerCase();
var lastletter = wolettersandsmallspaces.length - 1;
var ispalindrom = true;

for (i = 0; i < wolettersandsmallspaces.length; i++) {
  // for ( i=0;  i< Math.ceill( wolettersandsmallspaces.length); i++ ){
  if (wolettersandsmallspaces[i] !== wolettersandsmallspaces[lastletter - i]) {
    ispalindrom = false;
    break;
  }
}
console.log(ispalindrom);

/*if (a[0] === a[16]) {
}

console.log(wolettersandsmallspaces);
*/
