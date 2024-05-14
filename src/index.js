import './sass/style.scss'

// import your increase function
import increase from './lib/increase'


const btn = document.querySelector('button')

btn.addEventListener('click', increase)

console.log('something new')