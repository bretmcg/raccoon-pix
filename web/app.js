const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('Someone has requested a cute raccoon photo!');
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
