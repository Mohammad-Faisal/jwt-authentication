const User = require('../models/users');
const jwt = require('jsonwebtoken');
const authenticationModule = require('../authenticate');

module.exports = {
    register: async (req, res) => {

        const user = await User.register({ username: req.body.username, active: true }, req.body.password).catch(err => res.json(err));
        res.json(user);

    },

    login: async (req, res) => {


        const userObject = await User.findOne({username : req.body.username}).catch(err => res.json(err))
        if(!userObject)res.json({message :"User not Found"})

        const {user , error} = await User.authenticate()(req.body.username, req.body.password);
        if (error) res.json(error);

        const token = authenticationModule.getToken({_id : userObject._id});

        res.json({token})

    },

    getusers:async (req, res) => {
        console.log("the user who is trying to access this documenst are  " , req.user);
        User.find({}, (err, users) => {
            res.json(users);
        });
    }
}