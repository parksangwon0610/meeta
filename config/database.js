const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/meeta';
const connect = () => {
    mongoose.connect(
            MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
    
    const db = mongoose.connection;
    db.then(db => {
            console.log('connected database to ' + MONGO_URI);
            return db;
        }).catch(err => {
            if(err.message.code === 'ETIMEDOUT') {
                console.log('Attempting to re-establish database connection') 
                mongoose.connect(MONGO_URI);
            } else {
                console.log('Error while sattempting to connect to database: ' + err);
            }
        });
}

module.exports = { connect };
