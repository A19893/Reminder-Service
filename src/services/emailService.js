const { Op } = require("sequelize");
const transporter = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const ticketRepository = new TicketRepository();
const sendBasicEmail = async ({from, to, mailSubject, mailBody}) => {
  try {
    console.log(from , to , mailSubject, mailBody)
    const response = await transporter.sendMail({
      from: from,
      to: to,
      subject: mailSubject,
      text: mailBody,
    });
    return;
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const fetchPendingEmails = async(item) => {
 try{
  const criteria = {
    status: 'PENDING',
    notificationTime:{
       [Op.lte]: new Date()
    }
  }
   const pendingEmails = await ticketRepository.getAll(criteria);
   return pendingEmails;
 }
 catch(error){
  console.log(error);
 }
}

const createNotification = async(payload) =>{
  try {
    const response = await ticketRepository.create(payload);
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const updateEmailStatus = async(id, payload) => {
  try {
    const response = await ticketRepository.update({id: id}, payload);
    return response;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

const subscribeEvents = async(payload)=>{
let {service, data} = payload;
if(service == 'CREATE_TICKET'){
  await createNotification(data)
}
else if(service == 'SEND_BASIC_EMAIL'){
  await sendBasicEmail(data);
}
else{
  console.log('No valid event recieved');
}
}
module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateEmailStatus,
  subscribeEvents
};
