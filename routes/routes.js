const express=require('express')
const macaddress = require('../macadress/mac')
const router=express.Router()

router.route('/mac-address').get(macaddress)

module.exports=router