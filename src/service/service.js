const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    async encryptPassword(password){
        
        const saltRounds = 10; // SaltRound to encrypt password
        const salt = bcrypt.genSaltSync(saltRounds); // Generate Salt 
        const hash = bcrypt.hashSync(password, salt); // Encrypt password

        return hash
    },

    async comparePassword(password,passwordUser){
        
        return bcrypt.compareSync(password, passwordUser)
    },

    async generateToken(id){
        const secretKey = process.env.JWT // Secret Key 
        const expireIn = "1h"; // Time expire
        const token = jwt.sign({id: id}, secretKey, 
            { // Token to Jsonwebtoken
        expiresIn: expireIn
            
        });

        return token
    }
}