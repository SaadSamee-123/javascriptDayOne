// write a program which declares two variables amd perfprm +,-,*,/,==,===

function firstProgram(a, b) {
  const sum = a + b;
  const substract = a - b;
  const multiply = a * b;
  const divide = a / b;
  console.log(
    "sum is",
    sum,
    "substract is",
    substract,
    "multiply is",
    multiply,
    "divide is",
    divide,
    "loose operator",
    a == b,
    "strict operator",
    a === b
  );
}

firstProgram(2, 2);

//  Write ap program which declares an object and prints its value on screen
const person = {
  firstName: "Saad",
  age: 25,
  stack: "MERN Stack",
};

console.log(
  ` ${person.firstName} is ${person.age} years old and is studying ${person.stack} stack`
);

// write a program which declares an array and then sorts it in ascending order

const rray = [9, 8, 76, 5, 54, 4];

function incArray(Arr) {
  console.log(Arr.sort((a, b) => (a < b ? -1 : 1)));
}

// function incArray(Arr) {
//   for (let i = 0; i <= Arr.length; i++) {
//     for (let j = i + 1; j <= i; j++) {
//       if (i < j + 1) {
//         console.log(j);
//       }
//     }
//   }
// }
// //
// incArray(rray);

let numbersArray = [4, 55, 77, 3, 5, 09, 788];

function incSort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

incSort(numbers);
console.log(numbers);
