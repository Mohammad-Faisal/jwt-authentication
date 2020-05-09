const userController = require('../controllers/users');

module.exports = (router) => {
    router.route('/getusers')
    .get(userController.getusers);

    router.route('/register')
    .post(userController.register)

    router.route('/login')
    .post(userController.login)
}