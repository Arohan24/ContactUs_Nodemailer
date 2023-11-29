const express=require('express');
const router=express.Router();
const {handleFeedback,testFeedback}=require('../controller/feedbackController.js');

router.post('/feedback',handleFeedback);
router.get('/feedback',testFeedback);

module.exports=router;