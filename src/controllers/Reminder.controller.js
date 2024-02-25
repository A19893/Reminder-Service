const { EmailService } = require("../services");

const sendEmail = async(req,res)=>{
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

const fetchEmail = async(req,res) => {
    try{
        const response = await EmailService.fetchPengingEmails();
        return res.status(200).json({
            message: "Successfully fetched all tickets",
            success: true,
            data: response,
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Failed to Fetch the emails",
            success: false,
            err: "Unable to fetch the emails",
        })
    }
}

const createNotification = async(req,res) => {
    try{
        const response = await EmailService.createNotification(req.body);
        return res.status(200).json({
            message: "Successfully created a tickets",
            success: true,
            data: response,
            err: {}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Failed to created a ticket",
            success: false,
            err: "Unable to create a ticket",
        })
    }
}
module.exports={
    sendEmail,
    fetchEmail,
    createNotification
}