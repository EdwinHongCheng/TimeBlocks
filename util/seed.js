const Category = require('../models/Category');


const seedUser = (user) => {
    const catSeed1 = new Category({
        title: "Health and Fitness",
        userId: user.id,
        color: "#FF5733"
    });
    const catSeed2 = new Category({
        title: "Chores",
        userId: user.id,
        color: "#33FFEC"
    });
    const catSeed3 = newCategory({
        title: "Lifestyle",
        userId: user.id,
        color: "#0288E4"
    });

    catSeed1.save()
        .then(catSeed => {
            const task1 = { title: "30 min Run" };
            const task2 = { title: "Morning Yoga" };
            catSeed.tasks.push(task1);
            catSeed.tasks.push(task2);
            catSeed.save();
        })
    
    catSeed2.save()
        .then(catSeed => {
            const task1 = { title: "Clean the Dishes" };
            const task2 = { title: "Take out the trash" };
            catSeed.tasks.push(task1);
            catSeed.tasks.push(task2);
            catSeed.save();
        })

    catSeed3.save()
        .then(catSeed => {
            const task1 = { title: "Sleep" };
            const task2 = { title: "Meditate" };
            catSeed.tasks.push(task1);
            catSeed.tasks.push(task2);
            catSeed.save();
        })
}

module.exports = seedUser;