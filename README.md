![alt text](https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/image%20(1).png "Logo")


# TimeBlocks

[Timeblocks Live Link](https://time-blocks.herokuapp.com/#/)

TimeBlocks is a user-friendly time management apps that helps you keep track of daily tasks. Visually-appealing, colored blocks are used to represent hours of the day, and customizable tasks can be dragged to fill any open time block. Tasks are grouped within category containers, and the color the time block becomes is dependent on the category. The colored time blocks makes it easy for a user to determine both their hours of free and reserved times at just a glance. TimeBlocks is both computer and mobile friendly, utilizing both clickable and draggable methods for moving tasks. 

TimeBlocks is a MERN project.

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/layout.gif" alt="basic layout" width="500" height="700"/>

## Features

### Grid

Users are given 24 blocks in a 4x6 grid to represent the hours of the day. Tasks are able to be dragged and dropped into each block to assign them to a specific hour of the day. The blocks change color based on the color corresponding to the category the task is grouped under. Tasks are able to be reassigned to different categories as well as different time blocks. Categories and tasks are able to be added and deleted. 

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/grid.gif" alt="grid" width="500" height="700"/>


In order for a task to be re-assigned to a different category, the task's title is saved into a different variable, and then the original task object is removed from the current category. The new variable containing the original task's data is then pushed into the category it is being re-assigned to.

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/code_snapshotv2.png" alt="coding" width="500" height="500"/>

### Slidable Menus

On the left side of the screen, when the Categories button is clicked, a list of creaated categories and their tasks can be viewed in a slide-out menu. In thee categories menu, each category title is shown along with a number representing the number of tasks in the category. Below each category, colored blocks are displayed representing each task. These blocks are able to be dragged onto the hours grid. 

On the right side of the screen, when the Task List button is clicked, a list of tasks currently placed on the hours grid is shown. The task name is displyed, along with the hour of the day it is assiggned to. The tasks are sorted by the earliest hour. 

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/menu.gif" alt="menus" width="500" height="700"/>

### Friends List

On each user's profle page, a Friends List is shown displaying all of the user's friends. Users are able to remove existing friends from their list or add new friends by entering their email addresses. Users are able to view their friend's TimeBlock by clicking the name in the Friends List.   

<img src="https://github.com/EdwinHongCheng/TimeBlocks/blob/main/images/social.gif" alt="social" width="500" height="700"/>

## Future Plans
* Allow users to further expand the hour blocks into minute blocks 
* Create weeks, montly, and yearly calendar views
* Allow users to be able to invite friends to join them in their planned tasks
* Allow users to be able to create both public and private grids

## Contributors
* [Edwin Cheng](https://github.com/EdwinHongCheng/): Team Lead
* [Bryce DeGuzman](https://github.com/bcdguz): Backend Lead
* [Samuel Dubner](https://github.com/IsoVoyd): Frontend Lead
* [Michelle Ha](https://github.com/michelle-ha): Flex
