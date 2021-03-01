const { createUser, findOneUser } = require('./DAO')
const userDao = require('./DAO')

module.exports = {
    
    async createUser(user){
        return await userDao.createUser(user)
    },

    async findOneUserAndEmail(user,email){
        return await userDao.findOneUserAndEmail(user,email)
    },

    async findOneUser(user){
        return await userDao.findOneUser(user)
    }
}