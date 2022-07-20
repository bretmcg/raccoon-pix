const {Firestore} = require('@google-cloud/firestore');
const firestore = new Firestore();

exports.getRaccoon = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.send('Invalid raccoon ID in query string');
  }

  const doc = await firestore.collection('raccoons').doc(id).get();
  res.json({
    status: 'success',
    raccoon: doc.data()
  });
};
