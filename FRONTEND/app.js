import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () =>{
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('book-form')
    .addEventListener('submit', function(e){
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);

        const ui = new UI();
        ui.newBook(title, author, isbn);
        ui.renderMessage('Libro Agregado', 'success', 3000);

        e.preventDefault();
    });

document.getElementById('books-card')
    .addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        const ui = new UI()
        ui.deleteBook(e.target.getAttribute('_id'));
        ui.renderMessage('Libro Eliminado', 'danger', 3000);
    }
    e.preventDefault();
});
