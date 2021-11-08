

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    handletodo(e.target.newtask.value)
    
  })
})

function handletodo(todo){
  let p = document.createElement('p');
  p.textContent = todo;
  document.querySelector('#tasks').appendChild(p);
}
