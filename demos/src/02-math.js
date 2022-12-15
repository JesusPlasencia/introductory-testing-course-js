function sum(a, b) {
  return a + b;
}

function sustraction(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function average(a, b) {
  return (a + b) / 2;
}

module.exports = {
  sum,
  sustraction,
  product,
  divide,
  average,
};
