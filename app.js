const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");
const categories = require("./routes/api/categories");
const grids = require('./routes/api/grids');
const friends = require('./routes/api/friends');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Backend Routes
app.get("/", (req, res) => res.send("Wassup World"));
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/categories", categories);
app.use("/api/grids", grids);
app.use("/api/friends", friends);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));