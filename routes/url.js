const express = require('express');
const { handleGenerateNewShortURL,handleRedirectByShortUrl,handleGetAnalytics } = require('../controllers/url');

const router = express.Router();

router.post('/',handleGenerateNewShortURL);
router.get('/:shortId',handleRedirectByShortUrl);
router.get('/analytics/:shortId',handleGetAnalytics)


module.exports = router;