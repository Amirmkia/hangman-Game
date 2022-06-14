const myArray = [0, 0, 0, 0, 0, 0];
const QuestionCategory = ["asdfgh", "qwerty"];
let Str = "";
console.log(QuestionCategory);
function storeVar(el) {
  var amount = el.getAttribute("value");
  for (i in myArray) {
    if (myArray[i] !== 0) {
      continue;
    } else {
      document.getElementById(`${i}`).value = amount;
      document.getElementById(el.id).disabled = true;
      myArray[i] = amount;
      Str += amount;
      break;
    }
  }
  if (i == 5) {
    console.log(Str);
    if (myArray[i] == 1) {
      console.log("end");
      for (x in QuestionCategory) {
        if (QuestionCategory[x] == Str) {
          console.log("You Choose Correct");
        } else {
          console.log("You Choose incurrect");
        }
      }
    }
  }
}
