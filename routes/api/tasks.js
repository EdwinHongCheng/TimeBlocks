const express = require("express");
const router = express.Router();
const Task = require('../../models/Task');
const passport = require('passport');
const Category = require('../../models/Category')

// router.get("/test", (req, res) => res.json({ msg: "This is the tasks route" }));

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    //   const { errors, isValid } = validateCategoryInput(req.body);
  
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
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

// router.delete('/:id',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         User.findById(req.user.id).then(user => {
//             user.categories.map((category) => {
//                 if (category.id === req.params.id) {
//                     category.remove();
//                 }
//             });
//             user.save().then(() => res.end());
//         })
//         return;
// });


module.exports = router;