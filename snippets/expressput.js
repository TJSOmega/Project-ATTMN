"use strict";

const data = () => {
  return "app.put('${1:/}', (req, res) => {\n\tres.send(`${2:req.body}`)\n});";
};

module.exports = data;
