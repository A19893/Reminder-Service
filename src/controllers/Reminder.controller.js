const { EmailService } = require("../services");

const sendEmail = async(req,res)=>{
    console.log("Koi aay ahai")
try{
await EmailService.sendBasicEmail(req.body);
return res.status(200).json({
    message: "Successfully send the email",
    success: true,
})
}
catch(error){
    console.log(error);
    return res.status(500).json({
        message:"Failed to Send an Email",
        success: false,
        err: "Unable to send an Email",
    })
}
}

module.exports={
    sendEmail
}