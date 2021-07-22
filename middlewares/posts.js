const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'aploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
    
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/png'||file.mimetype==='image/jpeg'){
        cb(null,true)
    }
    cb(null,false)
}

const apload=multer({
//    dest:'/aploads',
   storage,
   limits:{fileSize: 1024*1024*2},
   fileFilter,

})

module.exports= apload