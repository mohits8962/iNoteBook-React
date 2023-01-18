const mongoose = require('mongoose')

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://mohits8962:m26u72h8@iNoteBook-database.f1gfhiv.mongodb.net/iNoteBook?retryWrites=true&w=majority',
        { useNewUrlParser: true })
        .then(() => console.log("MongoDb is connected"))
        .catch((err) => console.log(err));
}


module.exports = connectToMongo