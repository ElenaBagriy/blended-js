const inputList = document.querySelectorAll('.controls input');
const mainInput = document.querySelector('.form');

// const updateValue = event => {
//   const suffix = event.currentTarget.dataset.sizing || '';
//   const { name, value } = event.currentTarget;

//   document.documentElement.style.setProperty(`--${name}`, value + suffix);
// };

// inputList.forEach(input => {
//   input.addEventListener('input', updateValue);
// });
//comment

function handleInput(event) {
  const suffix = event.target.dataset.sizing || '';
  const { name, value } = event.target;

  document.documentElement.style.setProperty(`--${name}`, value + suffix);
  console.log(value);
}
mainInput.addEventListener('input', handleInput);
