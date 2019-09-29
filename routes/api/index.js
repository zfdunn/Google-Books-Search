const path = require('path');
const router = require('express').Router();
const bookRoutes = require('./books');
const googleRoutes = require('./google');
//==================================================
//book route
router.use('/books', bookRoutes);
//==================================================
// google route
router.use('./google', googleRoutes);
//==================================================
// for all else, render html
router.use(function(req, res){
    res.sendFile(path.join(__dirname, '../../client/build/index.html')
    );
});
module.exports = router;