const URL = require('../models/url');
const shortid = require('shortid');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    // if(!body.url)return res.status(400).json({error : 'url is require'})
    if(!body.url)return res.render("home",{
        err: "url is required",
    });
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : [], 
        createdBy: req.user._id,
    });
    return res.render("home",{
        id: shortID,
    });
    // return res.json({id:shortID});
}


async function handleRedirectByShortUrl(req, res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
    $push: {
        visitHistory: [
            {
                timestamp : Date.now(),
            },
        ]
    },
    });
    const urlString = entry.redirectURL;
    if(!urlString.includes("http")) res.redirect('https://' + urlString);
    else res.redirect(urlString)
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectByShortUrl,
    handleGetAnalytics,
}