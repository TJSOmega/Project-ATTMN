"use strict";

const data = () => {
  return "const express = require('express');\n\nconst app = express();\n\nconst port = 3000\napp.get('/', (req, res) => res.send('Hello World!'))\napp.listen(port, () => console.log(`Example app listening on port ${port}!`))";
};

module.exports = data;
