const Category = require('../models/Category');


const seedUser = (user) => {
    const catSeed1 = {
        text: "Health and Fitness",
        userId: user.id,
        color: "#FF5733"
    }
    const catSeed2 = {
        text: "Chores",
        userId: user.id,
        color: "#33FFEC"
    }
}

module.exports = seedUser;