const express = require("express");
const router = express.Router();
const Grid = require('../../models/Grid');

router.post("/create", (req, res) => {


    // test
    // const newGrid = new Grid({
    //     user: ObjectId("6033fef6e42a14489c2053fb")
    // })

    // newGrid.save()
    //     .then(grid => res.json(grid))
    //     .catch(err => res.json(err))
});

module.exports = router;