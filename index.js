const express = require('express')
const PostsRouter = require('./data/routers/postsRouter.js')
const server = express()
server.use(express.json())
server.use('/api/posts', PostsRouter)
const PORT = 8888

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the API</h2>`)
})

server.listen(PORT, _ => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
})
