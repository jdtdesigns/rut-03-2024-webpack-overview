const btn = document.querySelector('button')
const h3 = document.querySelector('h3')
let count = 0

function increaseCount() {
  count++

  h3.innerText = 'Count: ' + count
}

btn.addEventListener('click', increaseCount)