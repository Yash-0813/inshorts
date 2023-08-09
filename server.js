import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import './database/db.js';
// const db = require("./database/db.js");
import Defaultdata from './default.js';
import Route from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use('/', Route);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}
const PORT = 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.6wbcpyc.mongodb.net/?retryWrites=true&w=majority`;
// mongodb + srv://yash_0813:<password>@cluster0.6wbcpyc.mongodb.net/

// Connection(URL);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Defaultdata();