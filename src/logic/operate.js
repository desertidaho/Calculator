import Big from "big.js";


export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1" : "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "Del" && numberOne != null) {
    return numberOne.toString().substring(0, numberOne.length - 1)
  }
  if (operation == "Del" && numberTwo != null) {
    return numberTwo.toString().substring(0, numberTwo.length - 1)
  }
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (numberTwo === "0") {
      alert("Divide by 0 error. You cannot divide by zero.");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
