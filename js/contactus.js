// // import smtp from 'smtp.js';
// const name=document.getElementById("Name");
// const Email=document.getElementById("Email");
// const Phone=document.getElementById("Phone");
// const Subject=document.getElementById("subject");
// const msg=document.getElementById("message1");
// const screenshot =document.getElementById("screenshot");
// function sendEmail(){
//     Email.send({
//         To : 'folla.accessories24@gmail.com',
//         From : name,
//         Subject : Subject,
//         Body :msg,
//         attachments: [
//                 {filename: screenshot}
//               ]  
//     }).then(
//       message => alert(message)
//     );

// }
// // const email = {
// // from: Email,
// //  to: 'folla.accessories24@gmail.com',
// //  // email content  
// //  subject: Subject,
// //  text: msg,

// // attachments: [
// //     {filename: screenshot}
// //   ]  
// // }
// // smtp
// //  .connect(credentials)
// //  .then(() => smtp.sendMail(email))
// //  .then(info => console.log('Email sent!'))
// //  .catch(err => console.error(err))