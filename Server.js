const express = require("express");
const app = express();
const port = 3000;

let status = 0;
app.get("/api/water-level/:level", function (req, res) {
    console.log(`${req.params["level"]}`);
    res.send("OK");
});
app.get("/api/change-status", function (req, res) {
    status = status===0?1:0;
    res.send("OK");
});
app.get("/api/status", function (req, res) {
    console.log(status);
    res.send(status+"");
});
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});