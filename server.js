
import express from 'express'
const app = express();

dbConnect()

import { dbConnect } from './src/config/dbConnect.js'
import userRouter from './src/routes/userRoutes.js';


app.use(express.json());
app.use('/users', userRouter);


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});