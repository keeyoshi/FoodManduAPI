const express=require('express');
const flavours=require('../Model/flavours');
const router=express.Router();

router.route('/')
.get((req,res,next)=>{
    flavours.find()
    .then((flav)=>{
        res.json(flav);
    }).catch((err)=>next(err));
})

.post((req,res,next)=>{
    flavours.create(req.body)
    .then((flav)=>{
        res.json(flav);
    }).catch(next);
})

module.exports=router;