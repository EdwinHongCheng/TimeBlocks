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
    const catSeed3 = new Category({
        title: "Lifestyle",
        userId: user.id,
        color: "#645AF7"
    });

    const cat1task1 = { title: "30 min Run" };
    const cat1task2 = { title: "Morning Yoga" };
    catSeed1.tasks.push(cat1task1);
    catSeed1.tasks.push(cat1task2);
    catSeed1.save();
  
    const cat2task1 = { title: "Clean the Dishes" };
    const cat2task2 = { title: "Take out the trash" };
    catSeed2.tasks.push(cat2task1);
    catSeed2.tasks.push(cat2task2);
    catSeed2.save();

    const cat3task1 = { title: "Sleep" };
    const cat3task2 = { title: "Meditate" };
    catSeed3.tasks.push(cat3task1);
    catSeed3.tasks.push(cat3task2);
    catSeed3.save();
}

module.exports = seedUser;