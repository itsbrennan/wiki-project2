// variables
const input = document.querySelector('.main-search');
const searchBtn = document.querySelector('.main-btn');

// events
searchBtn.addEventListener('click', searchWiki);

//functions
function searchWiki(e) {
  e.preventDefault();
  showGif('show');
  let searchValue = input.value;

  const origin = 'https://en.wikipedia.org/';
  const url = `${origin}w/api.php?action=query&format=json&origin=*&list=search&srsearch=${searchValue}`;

  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(displayData)
    .catch(error => console.log(error));
}

// show / hide gif
function showGif(value) {
  if (value === 'show') {
    document.querySelector('.wait-icon').classList.add('show');
  } else if (value === 'hide') {
    document.querySelector('.wait-icon').classList.remove('show');
  } else {
  }
}

// display data
function displayData(data) {
  showGif('hide');
  let result = data.query.search;
  let output = '';

  result.forEach(item => {
    output += `   
    <li class="search-item">
      <h2 class="search-item__title">${item.title}</h2>
      <p class="search-item__text">${item.snippet}</p>
      <a href="http://en.wikipedia.org/?curid=${item.pageid}" class="search-item__link" target="_blank">read more ...</a>
    </li>`;
  });
  document.querySelector('.results').innerHTML = output;
}
