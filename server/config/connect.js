const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

mongoose.Promise = global.Promise;

const db = (mongo_url) => {
  if (process.env.NODE_ENV === 'test') {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(mongo_url, (err) => {
        console.log('Connected to TEST database');
      });
    });

    let mongo = mongoose.connection;
    return mongo;
  } else {
    mongoose.connect(mongo_url);
    let mongo = mongoose.connection;
    mongo.once('open', () => {
      console.log('Connected to PROD database');
    })
    return mongo;
  }
}

module.exports = db;
