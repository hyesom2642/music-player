import "regenerator-runtime";
import "dotenv/config";
import "./db";
import app from "./server";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const basic_port = 4000;

app.set('port', process.env.PORT || basic_port);
app.get('/', (req, res) => {
  res.send('hello, Express');
});
app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}에서 대기중입니다.`);
})

// const handleListening = () =>
//   console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

// app.listen(PORT, handleListening);
