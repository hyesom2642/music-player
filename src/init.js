import dotenv from 'dotenv';
dotenv.config();

console.log('api :', process.env.YOUTUBE_API_KEY);

import express from 'express';
// const express = require('express');
const app = express();

import path from 'path';
const __dirname = path.resolve();

app.listen(4000, function() {
  console.log('ok');
});
app.use(express.static('assets'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})


// import "regenerator-runtime";
// // import "dotenv/config";
// import "./db";
// // import app from "./server";

// import dotenv from 'dotenv';
// dotenv.config();
// console.log('api :', process.env.YOUTUBE_API_KEY);

// // const app = express();
// const basic_port = 4000;

// // app.set('port', process.env.PORT || basic_port);
// app.get('/', (req, res) => {
//   res.send('hello, Express');
// });
// app.listen(4000, () => {
//   console.log(`${app.get('port')}에서 대기중입니다.`);
// })

// // const handleListening = () =>
// //   console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

// // app.listen(PORT, handleListening);
