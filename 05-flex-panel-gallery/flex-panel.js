const panelsList = document.querySelectorAll('.panel');
const panelsAllEl = document.querySelector('.panels');

const onPanelsAllElClick = ({ target }) => {
  if (target.classList.contains('.panels')) return;

  const item = target.closest('.panel');
  console.log(item);
  const isOpen = document.querySelector('.open');
  item.classList.toggle('open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }
  // target.classList.toggle('open');
};
panelsAllEl.addEventListener('click', onPanelsAllElClick);

const toggleOpen = e => {
  const isOpen = document.querySelector('.open');
  e.currentTarget.classList.toggle('open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }
};

// panelsList.forEach(panel => {
//   panel.addEventListener('click', toggleOpen);
// });
