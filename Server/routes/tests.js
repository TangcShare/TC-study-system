let testDao = require('../dao/testDao');
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/addUser', function(req, res, next) {
    testDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    testDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    testDao.queryById(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    testDao.delete(req, res, next);
});

router.post('/updateUser', function(req, res, next) {
    testDao.update(req, res, next);
});

module.exports = router;
