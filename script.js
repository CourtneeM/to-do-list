const createDiv = document.createElement('div');
document.querySelector('main').appendChild(createDiv);
const listBody = document.querySelector('div');
const addBtn = document.querySelector('button');
const todo = document.querySelector('input');
let todoList = [];

const addTodo = () => {
  const createP = document.createElement('p');
  let p = createP;

  p.classList.add('item');
  p.textContent = todo.value;
  todoList.push(p.textContent);
  listBody.appendChild(p);
  todo.value = "";
}

const removeTodo = e => {
  for(let i = 0; i < todoList.length; i++) {
    if(e.target.textContent === todoList[i]) {
      todoList.splice(i, 1);
      e.target.remove();
      return;
    }
  }
};

document.body.addEventListener('click', function(e) {
  if(e.target.id === 'add-button') {
    addTodo();
  }
  if(e.target.classList.contains('item')) {
    removeTodo(e);
  }
});