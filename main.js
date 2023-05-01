//SELECTORS
const moviesView = document.querySelector('.moviesView');
const addMoviesView = document.querySelector('.add-movies-view');
const editMoviesView = document.querySelector('.edit-movies-view');


//INPUTS
const imageInput = document.querySelector('input[name="image"]');
const titleInput = document.querySelector('input[name="title"]');
const yearInput = document.querySelector('input[name="year"]');
const categoryInput = document.querySelector('input[name="category"]');
const rateInput = document.querySelector('input[name="rate"]');
const searchInput = document.querySelector('#search');

//EDIT INPUTS
const eTitleInput = document.querySelector('input[name="etitle"]');
const eYearInput = document.querySelector('input[name="eyear"]');
const eCategoryInput = document.querySelector('input[name="ecategory"]');
const eRateInput = document.querySelector('input[name="erate"]');


//Buttons
const addViewBtn = document.querySelector('#addViewBtn');
const addButton = document.querySelector('#addBtn');
const editButton = document.querySelector('#editBtn');


//Events
addViewBtn.addEventListener('click', () => {
    moviesView.style.display = "none";
    addMoviesView.style.display = "block";
})
addButton.addEventListener('click', addMovie);
editButton.addEventListener('click', editMovie);
searchInput.addEventListener('keyup', searchMovie);


//Functions
function searchMovie() {
    let searchTerm = this.value;
    let filtered = db.filter(movie => movie.title.includes(searchTerm));
    displayList(filtered);
}
function addMovie() {
    let newMovie = {
        image: imageInput.value,
        title: titleInput.value,
        year: yearInput.value,
        category: categoryInput.value,
        rate: rateInput.value
    }
    db.push(newMovie)
    displayList();
    moviesView.style.display = "flex";

}
function editMovie() {
 let indexOfMovie = this.getAttribute('data-index');
 let editedMovie = {
     image: db[indexOfMovie].image,
     title: eTitleInput.value,
     year: eYearInput.value,
     category: eCategoryInput.value,
     rate: eRateInput.value
    }

    db[indexOfMovie] = editedMovie;
    editMoviesView.style.display='none';
    moviesView.style.display = 'flex';
    displayList();

}

function deleteMovie() {
    let indexOfMoive = this.getAttribute('data-index');
    db.splice(indexOfMoive, 1);
    displayList();
}



displayList();
function displayEditForm() {
    let indexOfMovie = this.getAttribute('data-index');
    let selectedMovie = db[indexOfMovie]

    eTitleInput.value = selectedMovie.title;
    eCategoryInput.value = selectedMovie.category;
    eYearInput.value = selectedMovie.year;
    eRateInput.value = selectedMovie.rate;

    editButton.setAttribute('data-index', indexOfMovie);
    moviesView.style.display="none"
    editMoviesView.style.display="block"
}
function displayList(filtered) {
    let currentMovies = filtered || db;
    let html = ``;
    currentMovies.forEach((movie,index) => {
        html += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${movie.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.year}</p>
                    <p class="card-text">${movie.category}</p>
                    <p class="card-text">${movie.rate}</p>
                    <a class="btn btn-warning editBtn" data-index="${index}">Edit</a>
                    <a class="btn btn-danger deleteBtn" data-index="${index}">Delete</a>
                </div>
           </div>   
        `.trim()


    })

    moviesView.innerHTML = html;

    const editBtn = document.querySelectorAll('.editBtn');
    const deleteBtn = document.querySelectorAll('.deleteBtn');

    editBtn.forEach((btn,index) => {
        btn.addEventListener('click', displayEditForm);
        deleteBtn[index].addEventListener('click', deleteMovie);
    })
    addMoviesView.style.display = "none";
}



