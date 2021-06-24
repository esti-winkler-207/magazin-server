const magazin = require('../model/magazin');
const User=require('../model/user')

const AddMagazin=(req,res)=>{
    const newMagazin = new magazin(req.body);
    newMagazin.save()
    .then((magazin)=>{
       User.findByIdAndUpdate(
           {_id:req.body.idUser},
           {$push:{'magazins':magazin._id}}
       )

       res.json(magazin) 
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
           res.json(user.magazins)
       })
       .catch((err) => {
           res.send('error!!!')
           console.log(err)
       })
}
module.exports={AddMagazin, GetAllMagazinByUserId}