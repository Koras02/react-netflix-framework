// const express = require("express");
// const app = express();
// const test = require("./Router/test");

// app.use("/",test);

// const port = 5000; // 노드 서버 작동할 곳 
// app.listen(port, () => console.log(`현재 포트 넘버 ${port}`));


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
