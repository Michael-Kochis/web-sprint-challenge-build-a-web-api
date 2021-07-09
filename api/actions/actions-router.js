// Write your "actions" router here!
const express = require('express');
//const { checkProjectExists } = require('./actions-middleware');

const actions = require('./actions-model');

const router = express.Router();

router.get("/", (req, res, next) => {
    actions.get()
     .then(resp => {
         res.status(200).json(resp);
     }).catch(next)
})

module.exports = router;