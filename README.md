![alt text](https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/image%20(1).png "Logo")


# TimeBlocks

[~~TimeBlocks Live Link~~](https://time-blocks.herokuapp.com/#/) (Outdated)

TimeBlocks is a user-friendly time management app that helps you keep track of daily tasks. 24 slots on a grid are used to represent the hours of the day, and customizable tasks can be dragged to fill any slot. Tasks are grouped within category containers, and the category they belong to determines their time block color. These colored time blocks make it easy for a user to determine both their hours of free and reserved times with a quick glance. TimeBlocks is both computer and mobile friendly, utilizing both clickable and draggable methods for moving tasks. 

TimeBlocks is a MERN project.

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/01.layout.gif" alt="basic layout"/>

## Features

### Grid

Users are given 24 slots on a 4x6 grid to represent the 24 hours of the day. Tasks can be dragged and dropped into each slot to assign them to a specific hour of the day. The grid's slot changes color based on the task's category color. Tasks are able to be reassigned to different categories as well as different time slots. Additional categories and tasks can be added and removed. 

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/02.%20grid.gif" alt="grid"/>


In order for a task to be re-assigned to a different category, the task's title is saved into a different variable, and then the original task object is removed from the current category. The new variable containing the original task's data is then pushed into the category it is being re-assigned to.

```js
//routes/api/tasks.js

//Update tasks category
router.post('/updateCategory/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        Category.find({ 'tasks._id': req.params.id }, { "tasks.$": true })
            .then(catArr => {
                return Category.findById(catArr[0].id).then(cat => {
                    const task = cat.tasks.id(req.params.id);
                    //task's title is saved into a different variable
                    const newTask = {title: task.title};
                    //original task object is removed from the current category
                    task.remove();
                    cat.save();
                    return newTask;
                })
            }).then((newTask) => {
                Category.findById(req.body.catId).then(category => {
                    //new variable containing the original task's data is pushed into updated category
                    category.tasks.push(newTask);
                    category.save()
                        .then((category) => res.json(category))
                        .catch(errors => res.json(errors))
                })
            })
            .catch(errors => res.json(errors));
    }
);
```

### Slidable Menus

On the left side of the screen, when the "Categories" button is clicked, a list of created categories and their tasks can be viewed in a slide-out menu. In the categories menu, each category's title is shown along with a number representing the number of tasks in the category. Below each category, colored blocks are displayed representing each task. Users can drag these blocks onto the hours grid. 

On the right side of the screen, when the "Task List" button is clicked, a list of tasks currently placed on the hours grid is shown. The task name is displayed, along with its corresponding hour of the day. The tasks are sorted by the earliest hour. 

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/03.%20menus.gif" alt="menu"/>

### Friends List

On each user's "Profile Page", a "Friends List" is shown displaying all of the user's friends. Users are able to remove existing friends from their list, and add new friends by entering their email addresses. Users are able to view a friend's TimeBlock grid by clicking on their name in the "Friends List".   

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/04.%20social.gif" alt="social"/>

## Future Plans
* Allow users to further expand the hour blocks into minute blocks 
* Create weekly, monthly, and yearly calendar views
* Allow users to be able to invite friends to join them in their planned tasks
* Allow users to be able to create both public and private grids

## Contributors
* [Edwin Cheng](https://github.com/EdwinHongCheng/): Team Lead
* [Bryce DeGuzman](https://github.com/bcdguz): Backend Lead
* [Samuel Dubner](https://github.com/samdubner): Frontend Lead
* [Michelle Ha](https://github.com/michelle-ha): Flex
