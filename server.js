const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hey', (req, res) => {
    res.send('Hey world122!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})