const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    username: {
        type: String,
        validate: {
            validator: username => User.doesNotExist({username}),
            message: "Username already exists"
        }
    },
    email: {
        type: String,
        validate: {
            validator: email => User.doesNotExist({email}),
            message: "Email already exists"
        }
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    createdAt: { type: Date, default: Date.now }
})

UserSchema.pre('save', function () {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
  }
})
UserSchema.statics.doesNotExist = async function (field) {
    return await this.where(field).countDocuments() === 0;
}
UserSchema.methods.comparePasswords = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('Users', UserSchema)
module.exports = User

