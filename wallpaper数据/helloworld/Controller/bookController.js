const db = require('../model/config')

const booklist = (req, res) => {
    let sql = 'SELECT * FROM image'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
const label = (req, res) => {
    let sql = 'SELECT * FROM label'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
const popular = (req, res) => {
    let sql = 'SELECT * FROM popular'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
const moblie = (req, res) => {
    let sql = 'SELECT * FROM mobile'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}

const hade = (req, res) => {
    let sql = 'SELECT * FROM hade'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
const avatarlist = (req, res) => {
    let sql = 'SELECT * FROM avatarlist'
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
const user = (req, res) => {
    let data = req.body.params
    console.log(data);
    let sql = 'SELECT * FROM `user` WHERE `account`  = ? AND `password` = ?'
    db.query(sql,[data.account,data.password], (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err.message
            })
        } else {
            res.json({
                code: 200,
                msg: 'ok',
                data: result
            })
        }
    })
}
module.exports = {
    booklist,
    label,
    popular,
    moblie,
    user,
    hade,
    avatarlist
}
