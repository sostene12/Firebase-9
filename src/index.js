const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const router = require("./routes/userCrud.route")

const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.listen(port,() => {
    console.log("app is listening on port:" +port)
});

app.use("/user",router);
