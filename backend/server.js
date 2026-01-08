// import express from 'express'; Add "type": "module" to package.json to use ES6 modules

const express = require('express');
const app = express();

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});