// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    days: {type: Number, default: 1},
    xp: {type: Number, default: 0},
    level: {type: Number, default: 1},
});

module.exports = mongoose.model('User', UserSchema);


// // user model
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const Joi = require('joi');
// const passwordComplexity = require('joi-password-complexity');

// const userSchema = new mongoose.Schema({
// 	name: {type: String, required: true, unique: true},
// 	// email: {type: String, required: true, unique: true},
// 	password: {type: String, required: true},
// 	// verified: {type: Boolean, default: false},

//     days: {type: Number, default: 1},
//     xp: {type: Number, default: 0},
//     level: {type: Number, default: 1},
// });

// userSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "1d"});
//     return token;
// };

// const User = mongoose.model("user", userSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//         name: Joi.string().required().label("Username"),
//         // email: Joi.string().email().required().label("Email"),
//         password: passwordComplexity().required().label("Password"),
//     });
//     return schema.validate(data)
// }

// module.exports = {User, validate};