const express = require("express")
const {createShortUrl,redirectUrl, serverOn}=require('../controllers/urlControllers')
const router = express.Router();



router.post("/shorten",createShortUrl)


router.get("/health",serverOn)

router.get("/:code",redirectUrl)


module.exports = router;