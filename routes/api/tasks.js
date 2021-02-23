const express = require("express");
const router = express.Router();
const Task = require('../../models/Task');

// router.get("/test", (req, res) => res.json({ msg: "This is the tasks route" }));

// router.post('/',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//       const { errors, isValid } = validateCategoryInput(req.body);
  
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
//       User.findById(req.user.id).then(user => {
//         const newCategory = {
//             text: req.body.text,
//         };
//         user.categories.push(newCategory);
//         user.save().then(() => res.end());
//       })
//       return;
//     }
// );

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