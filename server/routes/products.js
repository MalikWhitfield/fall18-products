let router = require('express').Router()
let Products = require('../models/product')


router.get('/', (req, res, next) => {
  Products.find({})
    .then(products => res.send(products))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Products.findById(req.params.id)
    .then(product => res.send(product))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Products.create(req.body)
    .then(product => res.send(product))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Products.findByIdAndDelete(req.params.id)
    .then(product => res.send({ message: "DELORTED", data: product }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => res.send(product))
    .catch(next)
})

module.exports = router