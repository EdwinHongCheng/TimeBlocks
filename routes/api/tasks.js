const express = require("express");
const router = express.Router();
const passport = require('passport');
const Category = require('../../models/Category');
const validateTaskInput = require('../../validation/task');
const Grid = require('../../models/Grid');

//New Task
router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTaskInput(req.body);
    
        if (!isValid) return res.status(400).json(errors);

        Category.findById(req.body.catId).then(category => {
            const newTask = {
                title: req.body.title,
            };
            category.tasks.push(newTask);
            category.save()
                .then((category) => res.json(category))
                .catch(errors => res.json(errors));
        })
    }
);

//edit task info
router.put('/editTitle/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Category.findOne({"tasks._id": req.params.id})
            .then(cat => {
                const task = cat.tasks.id(req.params.id);
                task.title = req.body.title;
                cat.save()
                    .then(category => res.json(category))
                    .catch(errors => res.json(errors))
            })
    }
);


//delete task
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Category.findOne({'tasks._id': req.params.id})
            .then(cat => {
                const task = cat.tasks.id(req.params.id);
                task.remove();
                cat.save().then(category => res.json(category));
            })
            .then(() => {
                Grid.find({'taskId': req.params.id})
                    .then(grids => {
                        grids.forEach(grid => grid.remove())
                    });
            })
            .catch(errors => console.log(errors));
    }
);

//Update tasks category
router.post('/updateCategory/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        Category.find({ 'tasks._id': req.params.id }, { "tasks.$": true })
            .then(catArr => {
                return Category.findById(catArr[0].id).then(cat => {
                    const task = cat.tasks.id(req.params.id);
                    const newTask = {title: task.title};
                    task.remove();
                    cat.save();
                    return newTask;
                })
            }).then((newTask) => {
                Category.findById(req.body.catId).then(category => {
                    category.tasks.push(newTask);
                    category.save()
                        .then((category) => res.json(category))
                        .catch(errors => res.json(errors))
                })
            })
            .catch(errors => res.json(errors));
    }
);

module.exports = router;