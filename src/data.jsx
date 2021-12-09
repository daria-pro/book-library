/**
 * @type {Book[]}
 */
let books = [
  {
    name: "Усмішка",
    number: 1995,
    amount: "Віктор Кава",
    due: "Художня література"
  },
  {
    name: "Ласочка",
    number: 2000,
    amount: "Григір Тютюнник",
    due: "Дитяча література"
  },
  {
    name: "Мій учитель",
    number: 2003,
    amount: "Віктор Кава",
    due: "Дитяча література"
  },
  {
    name: "Осіння стежка",
    number: 1997,
    amount: "Віктор Кава",
    due: "Дитяча література"
  },
  {
    name: "Соколині крила",
    number: 1998,
    amount: "Максим Царенко",
    due: "Наукова література"
  },
  {
    name: "Символіка Військово-Повітряних Сил України",
    number: 1996,
    amount: "Максим Царенко",
    due: "Наукова література"
  },
  {
    name: "Соціальний капітал та демократія",
    number: 2002,
    amount: "Кенет Ньютон",
    due: "Наукова література"
  },
  {
    name: "Три зозулі з поклоном",
    number: 2001,
    amount: "Григір Тютюнник",
    due: "Художня література"
  }
];
/**
 * @type {Author[]}
 */

let authors = [
  {
    name: "Віктор Кава",
    number: 1000
  },
  {
    name: "Кенет Ньютон",
    number: 1001
  },
  {
    name: "Максим Царенко",
    number: 1002
  },
  {
    name: "Григір Тютюнник",
    number: 1003
  }
];

export function getBooks() {
  return books;
}

export function getAuthors() {
  return authors;
}

/**
 * @param {number} number
 * @returns {Book}
 */
export function getBook(number) {
  return books.find((book) => book.number === number);
}
/**
 * @param {number} number
 * @returns {Author}
 */

export function getAuthor() {
  return authors.find((author) => author.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Book
 */
/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Author
 */
