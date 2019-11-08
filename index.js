function fetchBooks() {
<<<<<<< HEAD
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
    return fetch("https://anapioficeandfire.com/api/books")
}

function renderBooks(json) {

=======
    fetch('https://anapioficeandfire.com/api/books')
      .then(resp => resp.json())
      .then(json => renderBooks(json));
      return fetch("https://anapioficeandfire.com/api/books");
      
}

function renderBooks(json) {
  
>>>>>>> 98e0f56d1126e2116c859cfc264a19a8d907d107
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
<<<<<<< HEAD
    main.appendChild(h2)
=======
    main.appendChild(h2) 
>>>>>>> 98e0f56d1126e2116c859cfc264a19a8d907d107
    console.log(book.name);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})