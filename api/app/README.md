# Going from Cloud Function to App Engine (or Cloud Run)

## Install `Express` web framework:
```shell
npm install express
```

`index.js`:
```js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('RaccoonPix API listening on port', port);
});
```

### Set up routes
`index.js`:
```js
app.get('/raccoons/:id', async (req, res) => {
  const id = req.params.id;
  // ...
}
```

## (Optional) `app.yaml` for App Engine.
