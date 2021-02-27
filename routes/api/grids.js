const express = require("express");
const router = express.Router();
const Grid = require('../../models/Grid');
const passport = require('passport');
const validateGridInput = require('../../validation/grid');
const Category = require("../../models/Category");

router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateGridInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newGrid = new Grid({
            taskId: req.body.taskId,
            userId: req.user.id,
            hour: req.body.hour
        })

        newGrid.save()
            .then((grid) => res.json(grid))
            .catch((errors) => res.json({error: "Task ID not found!"}))
    }
);

//Get a specific grid hour - currently sends back task name
// router.get() = (hour) => {
//     Grid.findOne({hour})
//         .then(grid => {
//             if (!grid) {
//                 res.json({error: "No task for this hour"})
//             } else {
//                 Category.find({ 'tasks._id': grid.taskId }, { "tasks.$": true })
//                     .then(catArr => {
//                         Category.findById(catArr[0].id).then(cat => {
//                             const task = cat.tasks.id(grid.taskId)
//                             return ({ [hour] : {
//                                 task: task.title,
//                                 color: cat.color
//                             }});
//                         })
//                     })
//                     .catch((errors) => res.json(errors));
//             }
//         })
// };

//Get all of a user's grids
router.get('/allGrids/:userId', (req, res) => {
    Grid.find({userId: req.params.userId})
        .then( async grids => {
            const taskIds = grids.map((grid) => {return(grid.taskId)});
            const cats = await Category.find({"tasks._id": taskIds});
            const taskList = {};
            grids.forEach(grid => {
                cats.forEach(cat => {
                    const task = cat.tasks.id(grid.taskId);
                    if (task) {
                        taskList[grid.hour] = {title: task.title, color: cat.color};
                    }
                })
            })
            res.json(taskList);
        })
        .catch(errors => res.json(errors))
});

//Update an existing grid with a new task
//check for if grid exits at that hour
//if not create grid; if it does then update
router.put('/updateGridTask/:hour', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Grid.findOne({hour: req.params.hour})
            .then((grid) => {
                if (!grid) {
                    const newGrid = new Grid({
                        taskId: req.body.taskId,
                        userId: req.user.id,
                        hour: req.params.hour
                    })
                    newGrid.save()
                        .then((grid) => res.json(grid))
                        .catch((errors) => res.json(errors));
                } else {
                    grid.taskId = req.body.taskId;
                    grid.save()
                        .then(grid => res.json(grid))
                        .catch(errors => res.json(errors));
                }
            })
    }
);


//delete grid via grid's id
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Grid.findByIdAndDelete(req.params.id)
            .then(() => {
                res.json({message: "Grid deleted"})
            })
            .catch((err) => res.status(404).json({ removed: false }))
    }
);

//clear all grids that belong to user
router.delete('/clearGrid/:userId', passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Grid.deleteMany({userId: req.params.userId})
        .then(() => {
            res.json({message: "Grid cleared"});
        })
        .catch((errors) => res.json(errors));
});

module.exports = router;