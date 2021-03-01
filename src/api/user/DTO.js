module.exports = {

    async sendCreatedUser(username,email,token,emailVerify){
        const data ={
            username: username,
            email: email,
            emailVerify: emailVerify,
            token: token
        }
        return data
    },

    async sendLoginUser(username,verify,token){

        const data = {
            username: username,
            verifyEmail: verify,
            token: token
        }

        return data

    }

}