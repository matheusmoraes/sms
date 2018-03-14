const config = {
  db: process.env.MONGO_URL || 'mongodb://admin:admin@localhost/gswsms',
}

module.exports = config;
