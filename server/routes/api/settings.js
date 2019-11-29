const express = require("express"); 
const router = express.Router(); 

/// GET all user settings
router.get("/:user", (req, res) => {
    res.send("getSettings call"); 
}); 

/// PATCH a certain setting for a certain user 
router.patch("/:user/:setting", (req, res) => {
    res.send("patchSettings call"); 
})

module.exports = router; 