const User = require('../models/users');
const jwt = require('jsonwebtoken');
const authenticationModule = require('../authenticate');

module.exports = {
    register: async (req, res) => {

        const response = await User.register({ username: req.body.username, active: true }, req.body.password).catch(err => res.json(err));
       
        console.log(response);
        if (err) res.json(err);
        console.log("New User Created  ", user);
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

    getusers: (req, res) => {
        console.log(req.body);
        User.find({}, (err, users) => {
            res.json(users);
        });
    }
}