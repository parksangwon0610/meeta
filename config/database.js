const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meeta',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connection to meeta mongodb");
});
