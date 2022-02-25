const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
app.listen(3001, () => console.log("listining at 3001"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
app.use(cors());

app.post("/postapi", (request, response) => {
  console.log(request.body);
  const data = request.body;

  response.json({
    status: "success",
    name: data.uName,
    email: data.uEmail,
    mobile: data.uMobile,
    pass: data.uPass,
  });
});

const name = "shubham@gmail.com";
const password = "shubham";
app.post("/login", (request, response) => {
  console.log(request.body);
  const data = request.body;

  if (data.email == name && data.password == password) {
    response.json({res:'true'});
    console.log("true");
  } else {
    response.json({res:'false'});
    console.log("false");
  }
});
