let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
// console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
    console.log(count)
}


// let saveBtn = document.getElementById('save-btn')

function save(){
    let save = count + " - "
    saveEl.textContent += save
    countEl.textContent = 0 
    // line 19 sets the countEl to 0 after every saves
    count = 0
    console.log(save)
}
