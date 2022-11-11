let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;


function increment() {
    console.log("button clicked")
    count += 1;
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0;
    countEl.textContent = count
}