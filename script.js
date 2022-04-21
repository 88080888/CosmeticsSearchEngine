const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = e => {
  const text = e.target.value.toLowerCase();

  li.forEach(item => {
    const task = item.textContent.toLowerCase().indexOf(text);
    if (task !== -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}

search.addEventListener('keyup', searchEngine)