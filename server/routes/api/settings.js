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
    const preferences = await User.findById(req.params.user, "preferences"); 
    const target = req.params.setting
    preferences.preferences.target = req.body.setting; 

    // User.findByIdAndUpdate(req.params.user,
    //     {$set: {
    //         preferences: preferences.preferences
    //     }},
    //     {new: true}, 
    //     function(err, user) {
    //         if (err) {
    //             res.status(400).json(err);
    //         }else {
    //             res.status(200).json(user);
    //         }
    //     }
    // );
    res.status(200).json(preferences.preferences); 
})

module.exports = router; 