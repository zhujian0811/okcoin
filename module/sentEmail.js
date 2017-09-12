/*
 * @Author: zhujian 
 * @Date: 2017-09-13 00:41:21 
 * @Last Modified by: zhujian
 * @Last Modified time: 2017-09-13 02:19:26
 */
const nodemailer = require('nodemailer');
import config from 'config-lite';
// Generate test SMTP service account from ethereal.email

let transporter = nodemailer.createTransport({
  host: 'smtp.126.com',
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: config.auth 
});

let setEmail = (mailOptions) => {
  console.log(mailOptions)
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

export default setEmail
