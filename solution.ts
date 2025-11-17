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

function getLength(input: string | unknown[]): number {
  if (typeof input === 'string') {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  } else {
    throw new Error('Invalid input. Expected a string or an array.');
  }
}

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

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

interface Data {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(data: Data[]): Data[] {
  return data.filter((data) => data.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}`
  );
}

function getUniqueValues(
  arrA: (string | number)[],
  arrB: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  function addUnique(arr: (string | number)[]) {
    for (let i = 0; i < arr.length; i++) {
      let exists = false;
      for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        result[result.length] = arr[i];
      }
    }
  }

  addUnique(arrA);
  addUnique(arrB);

  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const { price, quantity, discount } = product;
    const productTotal = price * quantity;

    const discountedTotal = discount
      ? productTotal * (1 - discount / 100)
      : productTotal;

    return total + discountedTotal;
  }, 0);
}
