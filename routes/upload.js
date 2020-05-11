const uploadController = require('../controllers/uploads');
const validateToken = require('../authenticate').verifyUser;


const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req ,file , cb) => {
        cb(null,'public/images')
    },
    filename : (req ,file , cb) => {
        cb(null , file.originalname) 
    } 
})

const imageFileFilter = (req , file , cb ) => {
    if(!file.originalname.match(/\.(jpg|jpwg|png|gif)$/)){
        return cb(new Error('You can upload only image files') , false)
    }
    cb(null , true);
}

const upload = multer({storage : storage , fileFilter:imageFileFilter});


module.exports = (router) => {
    router.route('/uploadImage')
    .post(upload.single('imageFile') , uploadController.uploadFile);
}