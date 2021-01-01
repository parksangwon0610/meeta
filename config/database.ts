import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/meeta';
export const connect = () => {
    mongoose.connect(
            MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
                useFindAndModify: false,
                useCreateIndex: true
            }
        );
    
    const database = mongoose.connection;
    database.once("open",() =>{
        console.log('connected database');
    })
};
