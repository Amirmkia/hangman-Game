const myArray = [0, 0, 0, 0, 0, 0];
function storeVar(el) {
  var amount = el.getAttribute("value");
  for (i in myArray) {
    if (myArray[i] !== 0) {
      continue;
    } else {
      document.getElementById(`${i}`).value = amount;
      document.getElementById(el.id).disabled = true;
      myArray[i] = 1;
      break;
    }
  }
}
