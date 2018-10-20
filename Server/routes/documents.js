let documentDao = require('../dao/documentDao');
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/addUser', function(req, res, next) {
    documentDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    documentDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    documentDao.queryById(req, res, next);
});

router.get('/deleteUser', function(req, res, next) {
    documentDao.delete(req, res, next);
});

router.post('/updateUser', function(req, res, next) {
    documentDao.update(req, res, next);
});

module.exports = router;
