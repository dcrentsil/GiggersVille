var express = require('express');
var db = require('../queries');
var cors = require('cors');

const router = express.Router();

 router.get('/', function(req,res) {
    res.json({message: 'Let the games begin!'});
 });

 router.use(cors());

router.get('/giggers', db.getallgiggers);
router.get('/giggers/:id', db.getonegigger);
router.get('/gigs', db.getallgigs);
router.post('/giggers', db.creategigger);
router.put('/giggers/:id', db.updategigger);
router.delete('/giggers/:id', db.removegigger);
router.delete('/gigs/:id', db.removegigger);
router.post('/login', db.login);

module.exports = router;

