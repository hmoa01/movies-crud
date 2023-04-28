//SELECTORS
let container = document.querySelector('.container');

createList();

function createList() {
    let html = ``;
    db.forEach(movie => {
        html += `
        <div class="card">
           <h2>${movie.title}</h2>
           <p>${movie.year}</p>
           <p>${movie.category}</p>
           <p>${movie.rate}</p>
           <button id="editBtn">Edit</button>
           <button id="deleteBtn">Delete</button>
        </div>
        `
    })
    container.innerHTML = html;
}