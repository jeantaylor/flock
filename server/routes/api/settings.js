const express = require("express"); 
const router = express.Router(); 
const User = require("../../models/User"); 
const Preferences = require("../../models/Preference"); 



/// GET all user settings ---> DONE
router.get("/:user", async (req, res) => {
    try{
        const preferences = await User.findById(req.params.user, "preferences"); 
        res.status(200).json(preferences.preferences); 
    } catch(err){
        res.status(400).json({msg : err}); 
    }
}); 

/// PATCH a certain setting for a certain user ---> DOUBLE CHECK THIS ONLY WORKS WITH :SETTING HARD-CODED
router.patch("/:user/:setting", async (req, res) => {
    await User.findByIdAndUpdate(req.params.user, 
        {$set: {"preferences.paper": req.body.setting}}, 
        function(err, doc) {
            res.status(200).json(doc);
    });
})

module.exports = router; 