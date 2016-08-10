const express = require('express');

const App = express();

App.use(express.static('public'));

App.listen(3000, () => {
  console.log('Express server is up on port 3000');
})
