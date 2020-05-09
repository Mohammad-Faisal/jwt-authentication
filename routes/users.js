const userController = require('../controllers/users');
const validateToken = require('../authenticate').verifyUser;

module.exports = (router) => {
    router.route('/getusers')
    .get(validateToken , userController.getusers);

    router.route('/register')
    .post(userController.register)

    router.route('/login')
    .post(userController.login)
}