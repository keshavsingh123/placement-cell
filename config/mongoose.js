const mongoose = require('mongoose');
const DB = 'mongodb+srv://ksch38125:keshav38125@cluster0.h5npnld.mongodb.net/';
// mongodb+srv://ksch38125:keshav38125@cluster0.h5npnld.mongodb.net/
// mongodb+srv://ksch38125:<password>@cluster0.h5npnld.mongodb.net/

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
