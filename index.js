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