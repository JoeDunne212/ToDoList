const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
}


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let pattern = /^[a-zA-Z0-9_ ]{2,}$/;
    const todo = addForm.add.value.trim();
    if (pattern.test(todo)) {
        list.innerHTML += generateTemplate(todo);
        addForm.reset();
    }

});




//delete todos 
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        e.stopPropagation();
    }
});


const filterTodos = (term) => {
    Array.from(list.children)
        .filter((element) => !element.textContent.toLowerCase().includes(term))
        .forEach(element => {
            element.classList.add('filtered');
        });

    Array.from(list.children)
        .filter((element) => element.textContent.toLowerCase().includes(term))
        .forEach(element => {
            element.classList.remove('filtered');
        });


};

//search todos
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});

