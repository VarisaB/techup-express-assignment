import express from "express";

const app = express();
const port = 4000;

const johnProfile = {
  data: {
    name: "john",
    age: 20,
  },
};

app.get("/profiles", (req, res) => {
  return res.json(johnProfile);
});

app.listen(port, () => {
  console.log(`server is running at port : ${port}`);
});
