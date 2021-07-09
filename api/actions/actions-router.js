// Write your "actions" router here!
const express = require('express');
const { checkActionExists } = require('./actions-middleware');
//const { checkProjectExists } = require('./actions-middleware');

const actions = require('./actions-model');

const router = express.Router();

router.get("/", (req, res, next) => {
    actions.get()
     .then(resp => {
         res.status(200).json(resp);
     }).catch(next)
})

router.get("/:id", checkActionExists, (req, res, next) => {
    const { id } = req.params;
    
    actions.get(id)
    .then(resp => {
        res.status(200).json(resp);
    }).catch(next)
})

module.exports = router;