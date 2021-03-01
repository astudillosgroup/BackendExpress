const userModel = require('./model')
const userDto = require('./DTO')
const userService = require('../../service/service')

class Controller {


    async loginUser(req, res) {

        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).send()
        }

        const user = await userModel.findOneUser(username)

        if (userService.comparePassword(password, user.password)) {

            const token = userService.generateToken(user.id)

            return res.status(200).send(await userDto.sendLoginUser(
                user.username, user.verifyEmail, token
            ))
            /* if(user.verifyEmail){
  
                // Data send to Frontend
                const dataUser = {
                  id: user.id,
                  username: user.userName,
                  email: user.email,
                  verifyEmail: user.verifyEmail,
                  accessToken: token,
                  expireIn: expireIn
                }
          
                res.status(200).json({
                  dataUser,
                  message: "create user successfully"
                });
          
              }else{
          
                const dataUser = {
                  id: user.id,
                  username: user.userName,
                  email: user.email,
                  verifyEmail: user.verifyEmail,
                  accessToken: token,
                  expireIn: expireIn
                }
                res.json({dataUser})
              } */

        } else {
            return res.status(401).send()
        }

    }

    async createUser(req, res) {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).send()
        }

        const hash = await userService.encryptPassword(password)

        const find = await userModel.findOneUserAndEmail(username, email);


        if (!find) {
            const user = await userModel.createUser({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });


            const token = userService.generateToken(user.id)

            return res.status(200).send(await userDto.sendCreatedUser(user.username, user.email, token, user.emailVerify))
        }
        return res.status(401).send()


    }

}

const controller = new Controller

module.exports = { controller }