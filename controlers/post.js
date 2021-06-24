const posts=require('../model/post');
const magazin=require('../model/magazin');
const AddPostToMagazin=(req,res)=>{
    const currentPost=new posts(req.body);
    currentPost.save()
    .then(post=>{
        res.json(post);
        magazin.findByIdAndUpdate(
            {_id:req.body.idMagazin},
            {$push:{'posts':post._id}}
        )
    })
    .catch(err=>{
        res.send("failed to save!");
        console.log(err);
    })

}
module.exports={AddPostToMagazin}