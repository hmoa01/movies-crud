//SELECTORS
const moviesView = document.querySelector('.moviesView');
const addMoviesView = document.querySelector('.add-movies-view');


//INPUTS
const titleInput = document.querySelector('input[name="title"]');
const yearInput = document.querySelector('input[name="year"]');
const categoryInput = document.querySelector('input[name="category"]');
const rateInput = document.querySelector('input[name="rate"]');

//Buttons
const addViewBtn = document.querySelector('#addViewBtn');
const addButton = document.querySelector('#addBtn');

//Events
addViewBtn.addEventListener('click', ()=> {
    moviesView.style.display= "none";
    addMoviesView.style.display= "block";
})
addButton.addEventListener('click',addMovie);

displayList();
addMovie();

function displayList() {
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
        `.trim()
    })
    moviesView.innerHTML = html;
    addMoviesView.style.display="none"
}

function addMovie() {
    let newMovie = {
        title: titleInput.value,
        year: yearInput.value,
        category: categoryInput.value,
        rate: rateInput.value
    }
    db.push(newMovie)
    displayList();
    moviesView.style.display="block";

}