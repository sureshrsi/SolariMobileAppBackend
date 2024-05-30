const {creategeneralinfo} = require('../controllers/generalinfo.controller')
const { createHeadMembers } = require('../controllers/householdmembers.contorller')

const router = require('express').Router()

router.route('/generalinfo').post(creategeneralinfo)

router.route('/addhouseholdmember').post(createHeadMembers)

module.exports = router