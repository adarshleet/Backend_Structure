import { verifyEmailService } from "../services/userServices.js"

export const verifyEmailController = async(req,res)=>{
    
    let userDetails = await verifyEmailService(req.body)

    return res.status(userDetails.status).json(userDetails.data)
}