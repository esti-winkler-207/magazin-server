
const router = require('express').Router();
const user = require('../controlers/user')
const magazin = require('../controlers/magazin')
const post = require('../controlers/post')

router.get('/GetAllUsers', user.GetAllUsers);
router.delete('/deleteMagaazin/:id',magazin.deleteMagaazin);
router.post('/AddUser', user.AddUser);
router.post('/AddMagazin', magazin.AddMagazin);
router.post('/AddPostToMagazin', post.AddPostToMagazin);
router.get('/GetAllMagazinByUserId/:id', magazin.GetAllMagazinByUserId);
router.get('/GetAllPostsByMagazinId/:magazinId', post.GetAllPostsByMagazinId);
// router.get('/LoginUser/:name/:password', user.LoginUser)
// router.get('/LoginUser/:name/:password', user.LoginUser)
// router.patch('/addWetherByCity/:cityName/:UserId', user.addWetherByCity)

// router.get('/GetAllWeatherByUserId/:id', user.GetAllWeatherByUserId)
// router.get('/getAllUsers/:idAdmin', admin.getAllUsers)
// router.post('/AddAdmin', admin.AddAdmin)
// router.delete('/deleteWeatherById/:UserId/:weatherId', user.deleteWeatherById)
// router.delete('/deleteUser/:UserId', admin.deleteUser)

module.exports = router;