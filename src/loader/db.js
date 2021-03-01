const mongoose = require('mongoose');

// Connect to db
var db = mongoose.connect(`mongodb+srv://Ali:${process.env.MONGODB_PASSWORD}@cluster0.zzxs1.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if(!err){
        console.log('DataBase Connected');
    }else{
        console.log('DataBase Error');
        console.log(err);
    }
});

module.exports = db;