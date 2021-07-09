const db = require('./projects-model')

// add middlewares here related to projects
const checkProjectExists = (req, res, next) => {
    const { id } = req.params;

    db.get(id)
        .then(resp => {
            if (resp === undefined || resp === null) {
                res.status(404).json({ message: "that project id does not exist "})
            } else {
                req.project = resp;
                next();
            }
        }).catch(err => {
            res.status(500).json({ 
                message: "Error retrieving record",
                err: err 
            })
        })
}

const validateProject = (req, res, next) => {
    const neoPost = req.body;

    if (!neoPost.name) {
        res.status(400).json({ message: "name field is required "});
    } else if (!neoPost.description) {
        res.status(400).json({ message: "description field is required "});
    } else {
        next();
    }
}

module.exports = {
    checkProjectExists,
    validateProject
}