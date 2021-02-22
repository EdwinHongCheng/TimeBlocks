const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Backend Routes
app.get("/", (req, res) => res.send("Wassup World"));
app.use("/api/users", users);
app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));