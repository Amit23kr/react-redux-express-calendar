const router = require("express").Router();
const fs = require("fs");

const calendar_data = fs.readFileSync("data.json");

const data = JSON.parse(calendar_data);
console.log("data backend", data);
// read

router.get("/tasks", (req, res) => {
  fs.readFile("data.json", data, (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

//post
router.post("/add", (req, res) => {
  console.log("body", req.body);
  const { color, date, description, time, id } = req.body;

  if (!color || !date || !description || !time || !id) {
    return res.status(400).send("required data is missing");
  }
  data.push({
    color: req.body.color,
    date: req.body.date,
    description: req.body.description,
    time: req.body.time,
    id: req.body.id,
  });

  let final_data = JSON.stringify(data, null, 2);
  fs.writeFile("data.json", final_data, finished);

  function finished(err) {
    console.log("all set");
  }
  res.status(200).send(req.body);
});

// DELETE
router.delete("/task/:id", (req, res) => {
  const taskId = req.params.id;
  let newData = data.filter((data) => {
    return data.id !== taskId;
  });

  fs.writeFile("data.json", JSON.stringify(newData, null, 2), () => {
    res.status(200).send(`task id:${taskId} removed`);
  });
});

module.exports = router;
