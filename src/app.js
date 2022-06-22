const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/contactRouter");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/contacts", contactsRouter);

module.exports = app;
