const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');

const s3 = new AWS.S3({
  accessKeyId: keys.accesskeyId,
  secretAccessKey: keys.secretAccessKey
});

module.exports = (app) => {
  app.get('/api/upload', requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;

    s3.getSignedUrl('putObject', {
      Bucket: 'my-blogs-bucket-123',
      Key: key,
      ContentType: 'image/jpeg'
    }, (err, url) => res.send({ key, url }));
  });
};
