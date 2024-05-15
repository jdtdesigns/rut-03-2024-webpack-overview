const output = document.querySelector('h3')
let count = 0

function increase() {
  count++

  output.innerText = 'Count: ' + count
}

export default increase
// module.exports = increase