const input = document.querySelector('.main-search');
const searchBtn = document.querySelector('.main-btn')

searchBtn.addEventListener('click', searchWiki);



function searchWiki(event) {
 event.preventDefault();
 showGifi('show')
 let searchValue = input.value;
 let origin = 'https://en.wikipedia.org'
 // /w/api.php?action=query&format=json&prop=&list=search&srsearch=apple


 let url = `${origin}/w/api.php?action=query&origin=*&format=json&list=search&srsearch=${searchValue}`;

 fetch(url).then(function (data) { return data.json() }).then(displayData);


}

// showGifi
function showGifi(value) {
 if (value === 'show') {
  document.querySelector('.wait-icon').classList.add('show')
 }
 else if (value === 'hide') {
  document.querySelector('.wait-icon').classList.remove('show')
 }
}
// display data
function displayData(data) {
 console.log(data);

 showGifi('hide')
 let output = '';
 let result = data.query.search;
 result.forEach(function (item) {
  output += `<li class="search-item">
    <h2 class="search-item__title">${item.title}</h2>
    <p class="search-item__text">${item.snippet}</p>
    <a href="http://en.wikipedia.org/?curid=${ item.pageid}" target="_blank" class="search-item__link">Read More...</a>
   </li>`
 })
 document.querySelector('.results').innerHTML = output;
}
