const posts = require('../model/post');
const magazin = require('../model/magazin');
const  Mongoose  = require('mongoose');

const AddPostToMagazin = (req, res) => {
    const {path:image}=req.file;
    const currentPost = new posts({
        _id: Mongoose.Types.ObjectId(),
        name:req.body.name,
        idMagazin:req.body.idMagazin,
        image:image.replace('\\','/')

    });
    console.log(req.file)
    currentPost.save()
        .then((post) => {
            // magazin.findById({_id: req.body.idMagazin}).then(u=>res.json(u)).catch(e=>res.send(e));

            magazin.findByIdAndUpdate(
                { _id: req.body.idMagazin },
                { $push: { 'posts': post._id } }
            ).then(u=>res.json(u)).catch(err => { res.send(err);console.log(err)})
        })
        .catch(err => {
            res.send("failed to save!");
            console.log(err);
        })

}
const GetAllPostsByMagazinId = (req, res) => {
    magazin.findById(req.params.magazinId)
    .populate({path:'posts',select:'idMagazin name'})
    .then(m => {
        res.json(m.posts);
    }).catch((err) => { res.send(err) });
}
module.exports = { AddPostToMagazin, GetAllPostsByMagazinId }