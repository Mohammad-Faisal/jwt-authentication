const users = require('./users');
const upload = require('./upload');

module.exports = (router) => {
    users(router);
    upload(router);
    return router;
}