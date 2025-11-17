/*
- This solution.ts file is an example; replace it with your own code.
- Use the same function names and parameter names as in the problem statement.
- Write only the code inside the function bodies and return the result.
- Do not use any console.log statements or comments.
*/

// Problem 1
function formatValue(
  input: string | number | boolean
): string | number | boolean {
  switch (typeof input) {
    case 'string':
      return input.toUpperCase();
    case 'number':
      return input * 10;
    case 'boolean':
      return !input;
    default:
      return 'Invalid input type';
  }
}

// Problem 2
function getLength(input: string | unknown[]): number {
  if (typeof input === 'string') {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new Error('Invalid input. Expected a string or an array.');
  }
}

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Problem 4
interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// Problem 1

// const getSwallowVelocity = (type: 'african' | 'european'): string => {
//   if (type === 'african') {
//     return 'Roughly 11 meters per second.';
//   }
//   return "I... I don't know that!";
// };

// const isCatLiquid = (isAsleep: boolean, containerShape: string): boolean => {
//   return isAsleep && containerShape !== 'none';
// };

// class Wizard {
//   name: string;
//   favoriteSpell: string;

//   constructor(name: string, favoriteSpell: string) {
//     this.name = name;
//     this.favoriteSpell = favoriteSpell;
//   }

//   castSpell(): string {
//     return `${this.name} casts ${this.favoriteSpell}!`;
//   }
// }
