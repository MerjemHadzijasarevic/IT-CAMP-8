const firstTask = () => {
  const voce = prompt("Unesite voce");
  const nizVoca = voce.split(" , ");
  if (nizVoca.includes("jagoda")) {
    return `Jagoda se nalazi na ${nizVoca.indexOf("jagoda") + 1}  mestu.`;
  } else {
    nizVoca.sort();
    nizVoca.unshift(10);
    nizVoca.push(100);
    return nizVoca;
  }
};
console.log(firstTask());
