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

//remove friend
router.delete('/delete', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                const userIdx = user.friends.indexOf(req.body.userId);
                user.friends.splice(userIdx, 1);
                user.save()
                    .then(user => res.json(user))
                    .catch((errors) => res.json(errors));
            });

    }
);

//retrieve all friends CURRENTLY NOT WORKING!
router.get('/get', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(user => {
                user.execPopulate('friends')
                    .then(populated => {
                        const friendsInfo = [];
                        populated.friends.forEach(friend => {
                            const info = {
                                id: friend.id,
                                name: friend.name,
                                email: friend.email
                            }
                            friendsInfo.push(info);
                        });
                        res.json(friendsInfo);
                    });
            })
    }
);


module.exports = router;