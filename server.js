import Express from 'express'
import PG  from 'pg'
const client = new PG.Client()
 
const app = new Express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello world!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
