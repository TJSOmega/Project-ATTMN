"use strict";

const boilerPlate = {
  expressserver:
    "const express = require('express');\n\nconst app = express();\n\nconst port = 3000\napp.get('/', (req, res) => res.send('Hello World!'))\napp.listen(port, () => console.log(`Example app listening on port ${port}!`))",
  expressget:
    "app.get('${1:/}', (req, res) => {\n\tres.send('${2:Hello World}')\n});",
  expresspost:
    "app.post('${1:/}', (req, res) => {\n\tres.send('${2:POST request}')\n});",
  expressput:
    "app.put('${1:/}', (req, res) => {\n\tres.send(`${2:req.body}`)\n});",
};

module.exports = boilerPlate;
