//Якщо число ділитися на 3 повертати
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

// І була пані на палубі
// Де помити мопед

function palindrom(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();

  console.log(normalizedString);

  const reversedString = [...normalizedString].reverse().join('');
  console.log(reversedString);

  console.log(reversedString === normalizedString);
}
palindrom('Де помити мопед');

const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
// нарцис  'Jhon'

const people1 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

const people2 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса

const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
// Нарциса знають всі, нарцис незнає нікого

const isNarciss = arr => {
  let candidat = '';
  for (let person of arr) {
    if (person.know.length === 0) {
      candidat = person.name;
    }
  }

  if (!candidat) {
    console.log('немає нарциса');
    return;
  }

  for (let person of arr) {
    if (person.name === candidat) {
      continue;
    }
    if (!person.know.includes(candidat)) {
      console.log('немає нарциса');
      return;
    }
  }
  console.log(candidat);
};

isNarciss(people);



