const User = require('../models/users');
var passport = require('passport');


module.exports = {
    register: async (req, res) => {

        const response = await User.register({ username: req.body.username, active: true }, req.body.password).catch(err => res.json(err));
       
        console.log(response);
        if (err) res.json(err);
        console.log("New User Created  ", user);
        res.json(user);

    },

    login: async (req, res) => {

        const authenticate = User.authenticate();
        const {user , error} = await authenticate(req.body.username, req.body.password);
        if (error) res.json(error);
        res.json(user)

    },

    getusers: (req, res) => {
        console.log(req.body);
        User.find({}, (err, users) => {
            res.json(users);
        });
    }
}