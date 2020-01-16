const express=require('express');
const super7=require('../Model/super7');
const router=express.Router();

router.route('/')
.get((req,res,next)=>{
    super7.find()
    .then((supers)=>{
        res.json(supers);
    }).catch((err)=>next(err));
})

.post((req,res,next)=>{
    super7.create(req.body)
    .then((supers)=>{
        res.json(supers);
    }).catch(next);
})

module.exports=router;