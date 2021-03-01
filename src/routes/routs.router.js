const express = require('express')
const router = express.Router()
const cors = require('cors')
require('dotenv').config()

const users = require('../api/user/routes')

router.use('/user',users);


module.exports = router;
