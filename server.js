import Express from 'express'

const app = new Express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Bengaluru!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
