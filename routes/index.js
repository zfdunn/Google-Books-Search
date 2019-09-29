const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
//==================================================
//api routes
router.use('/api', apiRoutes);
//==================================================
// if err trying to hit api routes, or undefined route hit, send the react app
router.use((req, res) =>
    res.sendFile(path.join(__dirname, '../client/build/index.html')
    )
);
module.exports = router;
