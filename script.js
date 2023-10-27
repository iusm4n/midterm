document.getElementById('addTodo').addEventListener('click', (e) => {
    const task = document.getElementById('input').value;
    if (!task) {
        alert('Add Todo');
        return;
    }
    document.getElementById('input').value = '';
    const newLi = document.createElement('li');
    newLi.id = 'li-todo';
    newLi.innerHTML = `<input type="checkbox" name="" class="todo"> ${task} <button class="delete">Delete</button> <button class="Edit">Edit</button>`;
    document.getElementById('todos').append(newLi);
    e.preventDefault();
});

const parent = document.getElementById('todos');
parent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'delete') {
        const li = target.parentElement;
        parent.removeChild(li);
    }
});

parent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'todo') {
        const li = target.parentElement;
        li.classList.toggle('completed');
    }
});

parent.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'Edit') {
        const newTodo = prompt('Edit Todo');
        if (newTodo) {
            const li = target.parentElement;
            parent.removeChild(li);
            const newLi = document.createElement('li');
            newLi.id = 'li-todo';
            newLi.innerHTML = `<input type="checkbox" name="" class="todo"> ${newTodo} <button class="delete">Delete</button> <button class="Edit">Edit</button>`;
            document.getElementById('todos').append(newLi);
        }
    }
});
