// Write your "projects" router here!
const express = require('express');
const { checkProjectExists } = require('./projects-middleware');

const projects = require('./projects-model');

const router = express.Router();

router.get("/", (req, res, next) => {
    projects.get()
     .then(resp => {
         res.status(200).json(resp);
     }).catch(next)
})

router.get("/:id", checkProjectExists, (req, res, next) => {
    const { id } = req.params;

    projects.get(id)
    .then((resp) => {
        res.status(200).json(resp);
    }).catch(next);
})

module.exports = router;