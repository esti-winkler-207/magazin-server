const magazin = require('../model/magazin');
const User = require('../model/user')

const AddMagazin = (req, res) => {
    const newMagazin = new magazin(req.body);
    newMagazin.save()
        .then((magazin) => {
            User.findByIdAndUpdate(
                { _id: req.body.idUser },
                { $push: { 'magazins': magazin._id } }
            ).then( (user)=>res.json(user)).catch((err)=>{console.log(err)})
        })
        .catch((err) => {
            console.log(err)
            res.send("error!!!")
        })
}


const GetAllMagazinByUserId = (req, res) => {
    User.findById(req.params.id)
        .populate('magazin')
        .then((user) => {
            //    res.send('success!')
            
            res.json(user.magazins)

        })
        .catch((err) => {
            res.send('error!!!')
            console.log(err)
        })
}
module.exports = { AddMagazin, GetAllMagazinByUserId }