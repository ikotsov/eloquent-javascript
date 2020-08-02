function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    decideWhatToPrint(i);
  }
}

function decideWhatToPrint(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    printFizzBuzz();
    return;
  }

  if (value % 3 === 0) {
    printFizz();
    return;
  }

  if (value % 5 === 0) {
    printBuzz();
    return;
  }

  print(value);
}

function print(value) {
  console.log(value);
}

function printFizz() {
  console.log("Fizz");
}

function printBuzz() {
  console.log("Buzz");
}

function printFizzBuzz() {
  console.log("FizzBuzz");
}

fizzBuzz();
