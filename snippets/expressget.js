"use strict";

const data = () => {
  return "app.get('${1:/}', (req, res) => {\n\tres.send('${2:Hello World}')\n});";
};

module.exports = data;
