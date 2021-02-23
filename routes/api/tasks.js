const express = require("express");
const router = express.Router();
const Task = require('../../models/Task');
const passport = require('passport');
const Category = require('../../models/Category')
const validateTaskInput = require('../../validation/task');

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTaskInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
    Category.findById(req.body.catId).then(category => {
        const newTask = {
            title: req.body.title,
        };
        category.tasks.push(newTask);
        category.save()
            .then((category) => res.json(category))
            .catch(errors => res.json(errors))
      })
    }
);


router.put('/editTitle/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTaskInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Category.updateOne(
            { _id: req.body.catId, "tasks._id": req.params.id},
            { $set : {"tasks.$.title": req.body.title }})
                .then(response => res.json({update: "successful"}))
                .catch(res => res.json({update: "failed"}))
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Category.findById(req.body.catId).then(category => {
            const task = category.tasks.id(req.params.id);
            task.remove();
            category.save().then((cat) => res.json(cat));
        });
});

router.post('/updateCategory/:id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        let newTask = {};
        // const task = Category.tasks.find({"tasks.id": req.params.id});
        // const parent = task.parent();
        // newTask.title = task.title;
        // task.remove();
        // parent.save();

        Category.findById(req.body.catId).then(category => {
            const task = category.tasks.id(req.params.id);
            newTask["title"] = task.title;
            task.remove();
            category.save().then((cat) => res.json(cat));
        });
        Category.findById(req.body.catId2).then(category => {
            debugger
            category.tasks.push(newTask);
            category.save()
                .then((category) => res.json(category))
                .catch(errors => res.json(errors))
        })
    });



module.exports = router;
