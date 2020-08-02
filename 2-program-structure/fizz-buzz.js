function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    decideWhatToPrint(i);
  }
}

function decideWhatToPrint(value) {
  if (isDivisibleBy3(value) && isDivisibleBy5(value)) {
    printFizzBuzz();
    return;
  }

  if (isDivisibleBy3(value)) {
    printFizz();
    return;
  }

  if (isDivisibleBy5(value)) {
    printBuzz();
    return;
  }

  print(value);
}

function isDivisibleBy3(value) {
    return value % 3 === 0;
}

function isDivisibleBy5(value) {
    return value % 5 === 0;
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
