const { Promise, PromiseProvider } = require('mongoose');
const UserModel = require('../../models/user.model')

module.exports = {

    async createUser(user) {
        return new Promise((resolve, reject) => UserModel.create(user, (err, data) => {
            if (err) return reject('ERROR ', err);
            resolve(data)
        }));
    },

    async findOneUserAndEmail(user, email) {
        return new Promise((resolve, reject) => UserModel.findOne({
            username: user,
            email: email
        }, (err, data) => {
            if (err) return reject(err);
            resolve(data)
        }))
    },

    async findOneUser(user) {
        return new Promise((resolve, reject) => UserModel.findOne({ username: user }, (err, data) => {
            if (err) return reject(err);
            resolve(data)
        }))
    }
}

