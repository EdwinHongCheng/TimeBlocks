const express = require("express");
const router = express.Router();
const passport = require('passport');
const User = require('../../models/User');
const arrToObj = require('../../util/methods');

//add friend
router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.user.id)
            .then(currentUser => {
                User.findOne({email: req.body.email})
                    .then(friend => {
                        const info = {
                            id: friend.id,
                            email: friend.email,
                            name: friend.name
                        }
                        currentUser.friends.push(friend.id);
                        currentUser.save()
                            .then(() => res.json(info))
                            .catch((errors) => res.json(errors));
                    })
                    .catch(() => res.json({error: "user not found"}))
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

//retrieve all friends (sends arr of objects w/ friend info)
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
                        res.json(arrToObj(friendsInfo, "id"));
                    })
                    .catch(errors => res.json(errors));
            })
    }
);

module.exports = router;