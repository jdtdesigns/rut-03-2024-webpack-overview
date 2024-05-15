const express = require('express')

const app = express()
const PORT = process.env.PORT || 3333

app.get('/test', (req, res) => {
  res.json({
    message: 'works!'
  })
})

console.log('test')

app.listen(PORT, () => console.log('Server started on port', PORT))