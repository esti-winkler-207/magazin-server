const posts = require('../model/post');
const magazin = require('../model/magazin');

const AddPostToMagazin = (req, res) => {
    const currentPost = new posts(req.body);
    currentPost.save()
        .then((post) => {
            magazin.findByIdAndUpdate(
                { _id: req.body.idMagazin },
                { $push: { 'posts': post._id } }
            ).then(m=>res.json(m)).catch(err => { })
        })
        .catch(err => {
            res.send("failed to save!");
            console.log(err);
        })

}
const GetAllPostsByMagazinId = (req, res) => {
    magazin.findById(req.params.magazinId).populate('post').then(m => {
        res.json(m.posts);
    }).catch((err) => { res.send(err) });
}
module.exports = { AddPostToMagazin, GetAllPostsByMagazinId }