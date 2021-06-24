const mongoose=require('mongoose')
const magozinSchema= mongoose.Schema({
    name: {
        type: String
    },
    posts: [
        {
            type: mongoose.Types.ObjectId, ref: 'post'
        }
    ],
    idUser: {
        type: mongoose.Types.ObjectId, ref: 'user'
    },
})
module.exports = mongoose.model('magazin', magozinSchema);