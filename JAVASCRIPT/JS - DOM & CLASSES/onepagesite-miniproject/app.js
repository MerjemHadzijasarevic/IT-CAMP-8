var backgroundChange = document.getElementsByClassName("backgroundChange");
var textEdit = document.getElementsByClassName("textEdit");
var inputText = [];

buttonAdd.addEventListener("click", function () {
  var newInput = {
    id: idCreator(10),
    value: randomInput.value,
  };
  inputText.push(newInput);
  renderList();
  randomInput.value = " ";
});
