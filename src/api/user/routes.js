const express = require('express')
const { controller } = require('./controller')
const cors = require('cors')

const router = express.Router()

const corsOptions = {
    origin: process.env.CORS
}

router.post('/loginuser',cors(corsOptions), (req,res) =>{
    controller.loginUser(req,res)
})

router.post('/createuser', cors(corsOptions), (req,res) =>{
    controller.createUser(req,res)
})

module.exports = router;