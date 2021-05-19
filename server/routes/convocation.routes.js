const express = require('express')
const router = express.Router()

const Convocation = require('./../models/convocation.model')


router.get('/getAllConvocations', (req, res) => {

    Convocation
        .find()
        .populate('owner goalkeeper')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching convocations', err }))
})

router.get('/getOwnerConvocation', (req, res) => {

    Convocation
        .find({ owner: req.session.currentUser._id })
        .populate('goalkeeper')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching convocations', err }))
})

router.get('/getGkConvocation', (req, res) => {

    Convocation
        .find({ goalkeeper: req.session.currentUser._id })
        .populate('owner goalkeeper')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error feching convocations', err }))
})

router.put('/getOneConvocation/:convocation_id', (req, res) => {

    Convocation
        .findByIdAndUpdate(req.params.convocation_id,)
        .populate('goalkeeper')
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

    const gk = req.session.currentUser._id
    const { state, numberOfGks } = req.body

    if (numberOfGks !== 0) {
        Convocation

            .findByIdAndUpdate(req.params.convocation_id, { state, $push: { goalkeeper: gk }, numberOfGks: numberOfGks - 1 })
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error editing convocation', err }))
    }
})

module.exports = router