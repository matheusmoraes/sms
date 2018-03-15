const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const db = (mongo_url) => {
  if (process.env.NODE_ENV === 'test') {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(mongo_url, (err) => {
        console.log('conectou os caraio');
      });
    });

    let mongo = mongoose.connection;
    mongo.once('open', () => {
      console.log('Connected to TEST DATABASE');
    })
    mongo.once('error', (e) => {
      console.log('Deu merda', e);
    })

    return mongo;
  } else {
    mongoose.connect(mongo_url);
    let mongo = mongoose.connection;
    mongo.once('open', () => {
      console.log('Connected to PROD DATABASE');
    })
    // mongo.connection.on('connected', function() {
    //   console.log('Mongoose default connection ', config.db);
    // });

    return mongo;
  }
}

module.exports = db;
