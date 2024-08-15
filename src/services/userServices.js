import { generateOtp } from "../config/OtpFunctions/GenerateOtp.js"
import { userExistCheck } from "../models/userModel.js"

export const verifyEmailService = async(data)=>{

    //checking user exist
    let userExist = await userExistCheck(data)

    if(userExist){
        return {status:409, data:false}
    }

    //create otp
    let otp = await generateOtp()
    console.log(otp)

    //send the otp to email via function
    return {status:201, data:true }

}