import express from 'express'
import {  verifyEmailController } from '../controllers/userController.js';
const userRouter = express.Router();


userRouter.post('/verifyEmail',(req,res)=>verifyEmailController(req,res));


export default userRouter