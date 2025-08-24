const inc = document.querySelector("#increment");
const dec = document.querySelector("#decrement");
const input = document.querySelector("#todo-input");
const count = document.querySelector("#count");
const ul = document.querySelector("#todo-list");

inc.addEventListener('click', ()=>{
  let txt = parseInt(count.innerHTML) ;
  count.innerHTML = txt + 1;
});

dec.addEventListener('click', ()=>{
  let txt = parseInt(count.innerHTML) ;
  count.innerHTML = txt - 1;
});

// Ajouter via touche "Entrée"
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputVal = input.value;
    if (!inputVal.trim()) return;

    const li = document.createElement('li');
    li.innerText = inputVal;
    li.addEventListener('click', ()=>{
      li.remove();
    })
    ul.appendChild(li);
    input.value = "";
  }
});