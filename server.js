import express from 'express';
import { config } from 'dotenv';
import { mainPage } from './source/controllers/main.js';

config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', './source/templates');
app.use(express.static('public'));

app.get('/', mainPage);
app.listen(process.env.PORT, () =>
  console.log('start http://localhost:' + process.env.PORT)
);
