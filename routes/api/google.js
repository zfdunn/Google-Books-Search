const router = require('express')router();
const googleController = require('../../controllers/googleController');
//==================================================
// match w/ './api/google'
router.route('/').get(googleController.findAll);
//==================================================
module.exports = router;