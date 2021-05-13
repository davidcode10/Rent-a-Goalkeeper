const express = require('express')
const router = express.Router()

const Convocation = require('./../models/convocation.model')

const { isUser } = require('./../utils')



router.get('/getAllConvocations', (req, res) => {

    Convocation
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching convocations', err }))
})

router.get('/getOneConvocation/:convocation_id', (req, res) => {

    Convocation
        .findById(req.params.convocation_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching convocation', err }))
})

router.post('/newConvocation', (req, res) => {

    const convocation = { ...req.body }

    Convocation
        .create(convocation)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating convocation', err }))
})

router.put('/editConvocation/:convocation_id', (req, res) => {

    Convocation
        .findByIdAndUpdate(req.params.convocation_id, req.body)
        .then(response => res.json({ response, isUser: isUser(currentUser) }))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing convocation', err }))
})

module.exports = router