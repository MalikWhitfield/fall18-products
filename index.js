let express = require('express')
let bodyParser = require('body-parser')
require('./server/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 //FOR DEPLOYMENT

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

let userRoutes = require('./server/auth/routes')
server.use('/account', userRoutes)
//^^ above always the same

let productRoutes = require('./server/routes/products')

//Allow users to get data when not logged in
server.use("*", (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  next(new Error("Please login to continue"))
  // make sure user is logged in and
  // has permission to create or delete or edit products
})


server.use('/api/products', productRoutes)

//default error handler
server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})






























server.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})