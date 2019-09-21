class Calculator {
  static sum(x, y) {
    return x + y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}
const CalculatorObject = new Calculator();
console.log(Calculator.sum(1, 2));
// console.log(CalculatorObject.sum(2, 3));
console.log(CalculatorObject.multiply(1, 1));
console.log(CalculatorObject.multiply(2, 3));
console.log(CalculatorObject.multiply(10, 20));
