const express = require('express');
const router = express.Router();
const passport = require('passport');
const Category = require('../../models/Category')
const validateCategoryInput = require('../../validation/categories');

// //Get all categories (default categories?)
// router.get('/', (req, res) => {
//     Category.find()
//         .sort({ date: -1 }) //sort by most recent first
//         .then(categories => res.json(categories))
//         .catch(err => res.status(404).json({ nocategoriesfound: 'No categories found' }));
// });

// //Get all categories from a specific user
router.get('/user/:user_id', (req, res) => {
    Category.find({userId: req.params.user_id})
        .then(categories => res.json(categories))
        .catch(err =>
            res.status(404).json({ nocategoriesfound: 'No categories found from that user' }
        )
    );
});

// //Get a specific category (needed?)
// router.get('/:id', (req, res) => {
//     Category.findById(req.params.id)
//         .then(category => res.json(category))
//         .catch(err =>
//             res.status(404).json({ nocategoryfound: 'No category found with that ID' })
//         );
// });

//Protected route to create categories
router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateCategoryInput(req.body);
    
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newCategory = new Category({
            text: req.body.text,
            userId: req.user.id,
            color: req.body.color
        })

        newCategory.save()
            .then((cat) => res.json(cat));
    }
);

//Protected route to delete categories
router.delete('/:id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Category.findById(req.params.id).then(category => {
            category.remove()
                .then(() => res.json({removed: true}))
                .catch((err) => res.status(404).json({removed: false}))
        })
    }
);


module.exports = router