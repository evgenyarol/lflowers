const mongoose = require('mongoose');
const db_url = 'mongodb+srv://Arolevgeny1:Arol3094@kursach-qhkhr.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
    console.log('mongoDB is connected sucessfully')
    })
    .catch((err) => {
    throw err
    })
    
module.exports = mongoose;

