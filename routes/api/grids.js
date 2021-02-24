const express = require("express");
const router = express.Router();
const Grid = require('../../models/Grid');
const passport = require('passport');


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // const { errors, isValid } = validateCategoryInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const newGrid = new Grid({
            task: req.body.taskId,
            userId: req.user.id,
            hour: req.body.hour
        })

        newGrid.save()
            .then((grid) => res.json(grid));
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Grid.findById(req.params.id).then(grid => {
            grid.remove()
                .then(() => res.json({ removed: true }))
                .catch((err) => res.status(404).json({ removed: false }))
        })
    });

module.exports = router;