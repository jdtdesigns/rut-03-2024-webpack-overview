import './sass/style.scss'

// import your increase function
import increase from './lib/increase'


const btn = document.querySelector('button')

btn.addEventListener('click', increase)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service worker registered/started!'))
    .catch(err => console.log(err))
}

