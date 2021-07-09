const db = require('./actions-model')

// add middlewares here related to actions
module.exports = {
    checkActionExists
}

function checkActionExists(req, res, next) {
    const { id } = req.params;

    db.get(id)
        .then(resp => {
            if (resp === undefined || resp === null) {
                res.status(404).json({ message: "that action id does not exist "})
            } else {
                req.action = resp;
                next();
            }
        }).catch(err => {
            res.status(500).json({ 
                message: "Error retrieving record",
                err: err 
            })
        })
}