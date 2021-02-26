const express = require("express");
const router = express.Router();
const passport = require('passport');
const User = require('../../models/User');

//add friend
router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                user.friends.push(req.body.userId);
                user.save()
                    .then(user => res.json(user))
                    .catch(() => res.json({error: "User Id not found!"}))
            })
            
    }
);

module.exports = router;