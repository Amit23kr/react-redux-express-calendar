const express = require("express");

const app = express();
const port = 5001;

app.use(express.json());

const calendarRouter = require("./routes/calendar");

app.use("/calendars", calendarRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
