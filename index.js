// -------------------TASK 1-------------------

// Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//якщо ділитися на 3 і на 5 повернути fizzbuzz

// function checkNumber(number) {
//   for (let i = 0; i <= 24; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// checkNumber(24);

// -------------------TASK 2-------------------

//Напишіть функцію caculculateAverage()
//яка приймає довільну кількість
//Аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caculculateAverage(...args) {
//     let total = 0;
//     let calm = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         if (typeof args[i] !== 'number') {
//             continue
//         }
//         total += args[i];
//         calm += 1;
//     }
//     console.log((total/calm).toFixed(2));
// }

// caculculateAverage(12, 18, 32, 'testa', 'testb');

// -------------------TASK 3-------------------

// І була пані на палубі
// Де помити мопед

// function palindrom(string) {
//   const normalizedString = string.replaceAll(' ', '').toLowerCase();

//   console.log(normalizedString);

//   const reversedString = [...normalizedString].reverse().join('');
//   console.log(reversedString);

//   console.log(reversedString === normalizedString);
// }
// palindrom('Де помити мопед');

// -------------------TASK 4-------------------

// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// // нарцис  'Jhon'

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'

// const people2 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
// //немає нарциса'
// // Нарциса знають всі, нарцис незнає нікого

// const isNarciss = arr => {
//   let candidat = '';
//   for (let person of arr) {
//     if (person.know.length === 0) {
//       candidat = person.name;
//     }
//   }

//   if (!candidat) {
//     console.log('немає нарциса');
//     return;
//   }

//   for (let person of arr) {
//     if (person.name === candidat) {
//       continue;
//     }
//     if (!person.know.includes(candidat)) {
//       console.log('немає нарциса');
//       return;
//     }
//   }
//   console.log(candidat);
// };

// isNarciss(people);

// -------------------TASK 5-------------------

//1. Напиши скрипт для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта users у форматі
//ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,

// };

// user.mood = 'happy';
// user['mood'] = 'happy';

// const userMood = 'mood';

// user[userMood] = 'happy';

// console.log(user);

// user.hobby = 'skydiving';
// user['hobby'] = 'skydiving';

// const userHobby = 'hobby';

// user[userHobby] = 'skydiving';

// user.premium = false;
// user['premium'] = false;

// const userPremium = 'premium';

// user[userPremium] = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} - ${user[key]}`);
// }

// const a = {};

// user[a] = 'Pamaparam';

// console.log(user);

// const b = {};
// user[b] = 123214;
// console.log(user);

// -------------------TASK 6-------------------

//2. У нас є об'єкт, в якому зберігатимуться зарплати
//Нашої команди
//Напишіть код для сумування всіх зарплат і
//Збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function salariesSum(salaries) {
//   const salariseValue = Object.values(salaries);
//   let sum = 0;
//   for (const salary of salariseValue) {
//     sum += salary;
//   }

//   console.log(sum);
// }

// salariesSum(salaries);

// -------------------TASK 7-------------------

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// function multi (number) {
//     return number * 21;
// }

// function each (array, callback) {
// let result = [];

// for (let i = 0; i < array.length; i +=1) {
//     const number = callback(array[i]);
//     console.log(number);
//     result.push(number);
// }

// return result;
// }

// const numbers = [1, 3, 4, 5];
// console.log(each (numbers,  (number) => number * 21));

// -------------------TASK 8-------------------

// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
// ]

//Реалізувати фільтр за якістю amount і отримати
// Тільки назва моделі

// const getAvailableCarNames = (vehicles, threshhold) => {
//     return vehicles.filter(({amount}) => amount > threshhold).map(({model}) => model);
// }

// console.table(getAvailableCarNames(vehicles, 12))

// -------------------TASK 9-------------------

//Отримати машини на розпродажі і сортувати за зменшенням ціни

// const getCarsOnSale = (vehicles) => {
//     return vehicles.filter(vehicle => vehicle.onSale).sort((a,b) => a.price - b.price);
// }

// console.log(getCarsOnSale(vehicles));

// -------------------TASK 10-------------------

// Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const sale = (fruits) => {
//   const newFruits = fruits.map((fruit) => ({
//     ...fruit,
//     id: Date.now(),
//     price: fruit.price * 0.8,
//   }));
//   console.log(newFruits);
// };

// sale(fruits);

// -------------------TASK 11-------------------

// Дізнатись загальні роки практики в об'єкті workers

// const workers = [
//   { id: 10, name: "Mango", years: 14 },
//   { id: 2, name: "Poly", years: 19 },
//   { id: 41, name: "Ajax", years: 30 },
//   { id: 99, name: "Kiwi", years: 22 },
// ];

// const sum = (workers) => {
//   return workers.reduce(
//     (previousValue, worker) => (previousValue += worker.years),
//     0
//   );
// };

// console.log(sum(workers));

// -------------------TASK 12-------------------

// function ownFilter (array, callback) {
// let result = [];
// for (let i = 0; i < array.length; i +=1) {
//    if (callback(array[i])) {
//     result.push(array[i]);
//    }
// }
// return result
// }

// const numbers = [1, 3, 4, 5, 1, 6, 3, 5, 2, 10, 10, 11];
// ownFilter (numbers, (number) => number > 3);
// console.log(ownFilter (numbers, (number) => number > 3));

// -------------------TASK 14-------------------

// function ownFind (array, callback) {
//     for (let i = 0; i < array.length; i+=1) {
//         if (callback(array[i])) {
//             return array[i];
//         }
//     }
// }

// const checkNumber = number => number===100;

// console.log(ownFind (numbers, checkNumber));

// -------------------TASK 15-------------------

// const uniqueNumbers = numbers.filter((element, index, array) => (array.indexOf(element) === index));

// const uniqueNumbers = numbers.reduce((previousValue, element, index, array) =>
//     previousValue.includes(element) ? previousValue : [...previousValue, element],

//     [] );

// console.log(uniqueNumbers);

// -------------------TASK 16-------------------

//11. Знайти перший унікальний символ у рядку
//У рядку будуть лише літери латинського алфавіту і вони будуть у lowerCase

// let input1 = "leetcode"; //0
// let input2 = "loveleetcode"; //2
// let input3 = "aabb"; //-1

// function findFirstUnique(string) {
//   const array = [...string];
//   const object = array.reduce((previousValue, item) => {
//     if (previousValue[item]) {
//       previousValue[item] += 1;
//     } else {
//       previousValue[item] = 1;
//     }
//     return previousValue;
//   }, {});
//   console.log(object);

//   for (const item in object) {
//     if (object[item] === 1) {
//       return array.indexOf(item);
//     }
//   }
//   return -1;
// }

// console.log(findFirstUnique(input3));

// -------------------TASK 17-------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length/2; i += 1) {
//     let template = numbers[i];
//     numbers[i] = numbers[numbers.length - 1 - i];
//     numbers[numbers.length - 1 - i] = template;
// }

// console.log(numbers);

// -------------------TASK 18-------------------

// class UnsplashAPI {
//   #query = '';
//   #page = 1;
//   #per_page = 10;

//   constructor({ per_page } = {}) {
//     this.#per_page = per_page;
//   }

//   getPhotos() {
//     console.log(`Create request ${this.#query} ${this.#page} ${this.#per_page}`);
//   }
//   get query() {
//     return this.#query;
//   }

//   set query(newQuery) {
//     this.#query = newQuery;
//   }

//   incrementPage() {
//     this.#page += 1;
//   }

//   resetPage() {
//     this.#page = 1;
//   }
// }

// const unsplashAPI = new UnsplashAPI({ per_page: 21 });
// console.log(unsplashAPI);

// unsplashAPI.query = 'min';
// unsplashAPI.getPhotos();
// unsplashAPI.incrementPage();
// unsplashAPI.incrementPage();
// unsplashAPI.getPhotos();
// unsplashAPI.resetPage();
// unsplashAPI.getPhotos();

// console.log(unsplashAPI.prototype === undefined);
// console.log(unsplashAPI.__proto__ === UnsplashAPI.prototype);
// console.log(unsplashAPI);
// console.log(UnsplashAPI.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// class User {

// }

// console.log(User.prototype === UnsplashAPI.prototype)
// console.log(User.__proto__ === Function.prototype)
// console.log(Number.__proto__ === Function.prototype)
// console.log(String.__proto__ === Function.prototype)
// console.log(Promise.__proto__ === Function.prototype)

// -------------------TASK 19-------------------
//2. Напиши клас  Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// class Storage {
//   constructor (items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItems(item) {
//     if (this.items.includes(item)) {
//       console.log(`Такий товар вже є`);
//       return;
//     }
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     if (index === -1) {
//       console.log(`Такого товару немає`);
//       return;
//     }
//     this.items.splice(index, 1);
//   }
// }

// const fruits = new Storage (["apple", "banana", "mango"]);
// console.log(fruits);
// fruits.addItems("coconut");
// fruits.removeItem("apple");
// console.log(fruits.getItems());

// Напиши клас Notes який управляє колекцією нотаток у
//Властивості items.
//Нотатка це об'єкт із властивостями text priority
//Додай класу статичну властивість Priority,
//у якому зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority = { HIGHT: 'hight', LOW: 'low' };

//   constructor(items = []) {
//     this.items = items;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter(item => item.text !== text);
//   }

//   updatePriority(text, newPriority) {
//     this.items = this.items.map(item => {
//       if (item.text === text) {
//         item.priority = newPriority;
//       }
//       return item;
//     });
//   }
// }

// const note = new Notes();

// note.addNote({ text: 'Learn JS', priority: Notes.Priority.HIGHT });
// note.addNote({ text: 'Learn React', priority: Notes.Priority.LOW });
// note.updatePriority('Learn React', Notes.Priority.HIGHT);
// console.log(note);

//Task 6.1
//Створити маркований перелік.
//Створити кнопки "Add" "Remove", які змінюватимуть склад списку
//Створити input з якого будемо отримувати значення, яке буде в li
//* Парним li вказати червоне тло, непарним - синім
//Для виконання завдання використовуйте createElement

// const listEl = document.createElement('ol');
// const addBtn = document.createElement('button');
// const removeBtn = document.createElement('button');
// const inputEl = document.createElement('input');

// addBtn.textContent = 'add';
// removeBtn.textContent = 'remove';

// const containerEl = document.querySelector('.container');
// containerEl.append(inputEl, addBtn, removeBtn, listEl);

// const addHandler = () => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = inputEl.value ? inputEl.value : 'No value';
//   listEl.append(itemEl);
//   inputEl.value = '';
//   const isEven = listEl.children.length % 2 === 0;
//   itemEl.style.background = isEven ? 'red' : 'blue';
// };

// addBtn.addEventListener('click', addHandler);

// const removeHandler = () => {
//   if (!listEl.hasChildNodes()) {
//     console.log('No elements to be removed');
//     return;
//   }
//   listEl.lastElementChild.remove();
// };

// removeBtn.addEventListener('click', removeHandler);

const userData = {
  name: 'Mango',
  email: 'mango@mail.com',
  password: 'supermango',
};
// userData.date = {};
// userData.name = "Name1";
// userData["name"] = "Name1";
// let name = "name";
// userData[name] = "Name1";

// console.log(userData);
// const formEl = document.querySelector("form");
// // console.log(formEl);

// const onFormInput = event => {
//     const {name, value} = event.target;
//     userData[name] = value;
//     console.log(userData);

// }
// formEl.addEventListener("input", onFormInput);

// userData["name"] = userData.name.value;
// console.log(formEl.elements.email);
// formEl.elements.email.value = userData.email;
// formEl.elements.name.value = userData.name;
// formEl.elements.password.value = userData.password;

// formEl.name.value = userData.name;
// formEl.email.value = userData.email;

// const keys = Object.keys(userData);

// keys.forEach((key) => {
//     formEl.elements[key].value = userData[key];
// })

// Object.entries(userData).forEach(([key, value]) => {
//     formEl.elements[key].value = value;

// })

// ____task 4???

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   const values = Object.values(salaries);

// // let amount = 0;

// // values.forEach((value) => {
// //     amount += value;

// // })

// const amount = values.reduce((acc, el) =>  acc += el, 0)

// console.log(amount)

// ЗАВДАННЯ 5

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   { id: '005', likes: 10, tags: ['aasdsdasd', 'asdaszxcdasdasd', 'asda123123sdasd'] },
// ];

// 1. Перебрати масив з об'єктами
// 2. При кожній ітерації взяти значення з ключа tags (масив значень)
// 3. Порахувати скільки разів повторюється рядки в масиві рядків
// 4. Результат записати у новий об'єкт.

// for (const tweet of tweets) {
//   console.log(tweet.tags);
// }

// const courses = tweets.flatMap(el => {
//   return el.tags;
// });

// const courses = tweets
//   .reduce((acc, el) => [...acc, ...el.tags], [])
//   .reduce((acc, el) => ({ ...acc, [el]: acc[el] ? acc[el] + 1 : 1 }), {});

//   console.log(courses);

// const numbers = [1, 3, 4, 3, 4, 6, 7, 8, 9, 9];

// const filteredNumbers = numbers.reduce(
//   (acc, number) => (!acc.includes(number) ? [...acc, number] : acc),
//   []
// );
// console.log(filteredNumbers);

//Потрібно перевірити "same" масиви
// числа з першого в квадраті дорівнюють числам другого

// const a = [121, 144, 19, 161, 19, 1448, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// function same(a, b) {
//   const newA = a.map(number => number ** 2).sort((a, b) => a - b);
//   const sortedB = [...b].sort((a, b) => a - b);
// console.log(newA);
// console.log(sortedB);

// for (let i = 0; i < newA.length; i += 1) {
//   if (sortedB[i] !== newA[i]) {
//     return false;
//   }
// }
// return true;

//   return newA.every((element, index) => element === sortedB[index]);
// }

// console.log(same(a, b));
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const inputEl = document.querySelector('input[type="text"]');
// const createBtnEl = document.querySelector('.createBtn');
// const destroyBtnEl = document.querySelector('.destroyBtn');
// const boxesEl = document.querySelector('.boxes');

// function onCreateBtnClick() {
//   const amount = Number(inputEl.value);
//   console.log(typeof amount);
//   const elArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     elArr.push(
//       `<div style='width:${30 + i * 10}px; height:${
//         30 + i * 10
//       }px; background-color:${getRandomHexColor()}'></div>`
//     );
//   }
//   inputEl.value = '';
//   boxesEl.insertAdjacentHTML('beforeend', elArr.join(''));
// }

// function onDestroyBtnClick() {
//   boxesEl.innerHTML = '';
// }

// createBtnEl.addEventListener('click', onCreateBtnClick);
// destroyBtnEl.addEventListener('click', onDestroyBtnClick);

// stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;" = Чому тут userLikes = 0? Дякую

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
