const express = require('express');
const cors = require('cors');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json() );
server.use(cors() );



server.use("/", (req, res) => {
    res.status(200).json({ message: "this server exists" })
})

server.use('*', (req, res) => {
    res.status(404).json({ message: "no endpoint exists for that address" })
})

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        message: "Undefined error message",
        err: err
    })
    next();
}

server.use(errorHandler);

module.exports = server;