const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb+srv://doit:orelse@cluster0.cq1ss.mongodb.net/doitorelse?retryWrites=true&w=majority";

const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Task: require('./Task'),
  User: require('./User'),
  Secret: require('./Secret')
}
