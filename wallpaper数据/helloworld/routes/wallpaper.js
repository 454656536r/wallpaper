var exports = require('express')
var router = exports.Router()
const wallpaper = require('../Controller/bookController')
// 数据
router.get('/',wallpaper.booklist)
router.get('/label',wallpaper.label)
router.get('/popular',wallpaper.popular)
router.get('/moblie',wallpaper.moblie)
router.post('/user',wallpaper.user)
router.get('/hade',wallpaper.hade)
router.get('/avatarlist',wallpaper.avatarlist)
module.exports = router