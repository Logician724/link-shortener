const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const conn = mongoose.connection;
conn.once('error', console.error.bind(console, 'connection error: '));

conn.once('open', () => console.log(`connected to database ${conn.db.databaseName} on ${conn.host}`));