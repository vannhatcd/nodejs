const express = require('express');
const router = express.Router();
// const db = require('./modules/datacon');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '192.168.88.218',
    user: 'root',
    password: '123456',
    database: 'ec_dbs',
    debug: false
});

db.connect(function(err, res){
    if(!!err) {
        res.send(err.message);
    }
});

// get user
router.get('/user', function(req, res, next){
    db.query('select * from search_keywords limit 10', function(err, rs) {
        res.send(rs);
    });
});

router.post('/user', function(req, res){
    res.send({name: 'js'});
});

router.put('/user/:id', function(req, res){
    res.send({name: 'jamecss'});
});

router.delete('/user/:id', function(req, res){
    res.send({name: 'delete'});
});

module.exports = router