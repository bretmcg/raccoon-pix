const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('RacconPix API listening on port', port);
});

app.get('/raccoons/:id', async (req, res) => {
  const id = req.params.id;
  const doc = await firestore.collection('raccoons').doc(id).get();
  res.json({
    status: 'success',
    raccoon: doc.data()
  });
});
