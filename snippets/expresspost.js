"use strict";

const data = () => {
  return "app.post('${1:/}', (req, res) => {\n\tres.send('${2:POST request}')\n});";
};

module.exports = data;
