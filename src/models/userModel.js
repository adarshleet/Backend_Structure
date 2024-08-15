import User from "../schema/userSchema.js"

export const userExistCheck = async (data)=>{
    let user = await User.findOne({email:data.email})
    return user
}