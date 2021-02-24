const express = require("express");
const router = express.Router();
const Grid = require('../../models/Grid');
const passport = require('passport');
const validateGridInput = require('../../validation/grid');
const Category = require("../../models/Category");

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateGridInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newGrid = new Grid({
            task: req.body.taskId,
            userId: req.user.id,
            hour: req.body.hour
        })

        newGrid.save()
            .then((grid) => res.json(grid))
            .catch((errors) => res.json({error: "Task ID not found!"}))
    }
);

//Get a specific grid hour - currently sends back task name
router.get('/hour', (req, res) => {
    Grid.findOne({hour: req.body.hour})
        .then(grid => {
            if (!grid) {
                res.json({error: "No task for this hour"})
            } else {
                Category.find({ 'tasks._id': grid.task }, { "tasks.$": true })
                    .then(catArr => {
                        Category.findById(catArr[0].id).then(cat => {
                            const task = cat.tasks.id(grid.task)
                            res.json({title: task.title});
                        })
                    })
                    .catch((errors) => res.json(errors));
            }
        })
});


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