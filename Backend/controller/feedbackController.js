const {Feedback}=require('../modal/database.js');
const transporter=require('../modal/nodemailerSetup.js')


const handleFeedback=async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
  
      const newUser = new Feedback({ name, email, subject, message });
        const savedUser = await newUser.save();
        // Sending feedback to email
        const mailOptions = {
          from: email,
          to: process.env.DestinationMail, // Replace with your email
          subject: subject,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        };
        const mailConfirmation={
          from: process.env.DestinationMail,
          to: email, 
          subject:'feedback sent Confirmation',
          text: `Thank you ${name} We appriciate your feedback and would get back to you as soon as possible`
        }
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
          } else {
            console.log('Email sent:', info.response);
            res.json({"Message":"Feedback Successfully Sent"});
          }
        }); 
        transporter.sendMail(mailConfirmation,(error,info) => {
          if(error){
              console.log('Error sending Confirmation email:',error);
          }else{
              console.log(' Confirmation Email sent:', info.response);
            res.json({"Message":"Confirmation Successfully Sent"});
          }
        })
        res.json(savedUser);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  const testFeedback=(req,res) => {
    res.json({msg:"Feedback endpoint reached"})
  }
  module.exports={
    handleFeedback,
    testFeedback
  };