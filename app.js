const express = require("express");
const app = express();
const PORT = 5000;

//set parsing
app.use(express.json()); //json
app.use(express.urlencoded({ extended: true })); //parsing url

//data buatan
let courses = [
  {
    id: 1001,
    title: "react js",
    description: "asdasdasd"
  },
  {
    id: 1002,
    title: "react js v2",
    description: "qweet"
  },
  {
    id: 1003,
    title: "react js v3",
    description: "asdasdasdmmmm"
  }
];

//menampilkan data
app.get("/api/courses", (req, res, next) => {
  res.status(200).json(courses); //200,400 in client, 500 in server
});

//show one data
app.get("/api/courses/:idCourse", (req, res, next) => {
  //   courses.find(data => {
  //     if (data.id == req.params.idCourse) {
  //       return res.status(200).json(data);
  //     }
  //   });
  var dataFix = courses.find(data => data.id == req.params.idCourse);
  if (!dataFix) {
    return res
      .status(404)
      .json({ message: `id ${req.params.id} Tidak ditemukan` });
  }
  return res.status(200).json(dataFix);
});

//insert data
app.post("/api/courses", (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  var data = {
    id: courses.length + 1,
    title,
    description
  };

  courses.push(data);
  res.status(200).json(courses);
});

app.listen(PORT, () => console.log(`server runing on ${PORT}`));
