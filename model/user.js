const mongoose=require('mongoose')
const userSchema= mongoose.Schema({
    name: {
        type: String
    },
    magazins: [
        {
            type: mongoose.Types.ObjectId, ref: 'magazin'
        }
    ]
})
module.exports = mongoose.model('user', userSchema);