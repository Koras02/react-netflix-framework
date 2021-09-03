const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/",test);

const port = 5000; // 노드 서버 작동할 곳 
app.listen(port, () => console.log(`현재 포트 넘버 ${port}`));
