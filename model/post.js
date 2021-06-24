const mongoose=require('mongoose')
const postSchema= mongoose.Schema({
    name: {
        type: String
    },
    idMagazin: {
        type: mongoose.Types.ObjectId, ref: 'magazin'
    },
})
module.exports = mongoose.model('post', postSchema);