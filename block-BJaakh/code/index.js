let todoInput=document.querySelector(`input[type="text"]`);
let ulRoot=document.querySelector(`.todo-list`);

const baseURL=`https://basic-todo-api.vercel.app/api/todo`;

function handleDelete(id) {
    fetch(baseURL + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(() => fetchTodos());
}

function createUI(todos) {
    ulRoot.innerHTML = '';
    todos.forEach(data => {
        let li = document.createElement('li');
        li.classList.add('flex');
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = data.isCompleted;
        input.setAttribute('data-id', data._id);
        input.addEventListener('click',() => {
            handleToggle(data._id, data.isCompleted);
        })
        let p = document.createElement('p');
        p.innerText = data.title;
        p.addEventListener('dblclick', (event) => {
            handleEdit(event, data._id, data.title);
        })
        let span = document.createElement('span');
        span.innerText = '❌';
        span.setAttribute('data-id', data._id);
        span.addEventListener('click', () => {
            handleDelete(data._id);
        })
        li.append(input,p,span);
        ulRoot.append(li);
    });
}

fetch(baseURL)
.then((res) => res.json())
.then((allTodos) => createUI(allTodos.todos));