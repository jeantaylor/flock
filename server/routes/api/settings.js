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

/// PATCH Birb ---> DONE
router.patch("/:user/birb", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.birb = req.body.birb; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH Paper ---> DONE
router.patch("/:user/paper", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.paper = req.body.paper; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH Font ---> DONE
router.patch("/:user/font", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.font = req.body.font; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH wrkDur --->DONE
router.patch("/:user/wrkDur", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.wrkDur = req.body.wrkDur; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH shrtBreak ---> DONE
router.patch("/:user/shrtBreak", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.shrtBreak = req.body.shrtBreak; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH lngBreak
router.patch("/:user/lngBreak", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.lngBreak = req.body.lngBreak; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH shrtPerLng
router.patch("/:user/shrtPerLng", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.shrtPerLng = req.body.shrtPerLng; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

/// PATCH alert
router.patch("/:user/alert", async (req, res) => { 
    const preferences = await User.findById(req.params.user, "preferences"); 
    preferences.preferences.alert = req.body.alert; 

    User.findByIdAndUpdate(req.params.user,
        {$set: {
            preferences: preferences.preferences
        }},
        {new: true}, 
        function(err, user) {
            if (err) {
                res.status(400).json(err);
            }else {
                res.status(200).json(user);
            }
        }
    );
})

module.exports = router; 