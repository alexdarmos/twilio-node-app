const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("./public"));

const textMessage = require("./sms");
app.use("/sms", textMessage);

const port =  process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port: ${port}`));