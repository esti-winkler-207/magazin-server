const mongoose=require('mongoose')
const Schema = mongoose.Schema;
const postSchema= mongoose.Schema({
    _id:Schema.Types.ObjectId,
   
    name: {
        type: String
    },
    idMagazin: {
        type: mongoose.Types.ObjectId, ref: 'magazin'
    },
    image:{type:String}
})
module.exports = mongoose.model('post', postSchema);