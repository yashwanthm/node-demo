import Express from 'express'
import PG  from 'pg'
const client = new PG.Client()
 
const app = new Express()
const port = 8080

app.get('/', (req, res) => {

  res.send('Hello world!')

  // client.connect((err) => {
  //   client.query('SELECT $1::text as message', ['Hello world!'], (err, data) => {
  //     console.log(err ? err.stack : data.rows[0].message) // Hello World!
  //     res.send('Hello world!')
  //     client.end()
  //   })
  // })
  
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
