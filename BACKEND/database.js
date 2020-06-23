const mongoose = require('mongoose');

mongoose.connect(process.env.BOOKS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));