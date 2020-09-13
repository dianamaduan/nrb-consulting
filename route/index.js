const {Router} = require('express')
const router = Router()

const telegram = require('../controller/index')

router.post('/consulting',telegram.getConsulting)
module.exports=router