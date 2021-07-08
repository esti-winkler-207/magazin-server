const magazin = require('../model/magazin');
const User = require('../model/user')

const AddUser = (req, res) => {
    console.log('AddUser')

    const newUser = new User(req.body);
    newUser.save()
        .then((user) => {
            console.log("succesful")
            res.json(user)
        })
        .catch((err) => {
            console.log(err)
            res.send("error!!!")
        })
}
const GetAllUsers = (req, res) => {
    User.find().then((data) => {
        res.json(data);
        res.send('success!!!!');
    }).catch((error) => {
        res.send(error)
        console.log(error)
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

const login=(req,res)=>{
   User.findOne({$or:[{'name':req.params.name,'password':req.params.password,'email':req.params.email}]}).then(u=>res.json(u)).catch(e=>res.send(e)) 
}

module.exports = { AddUser, GetAllMagazinByUserId, GetAllUsers, login }



