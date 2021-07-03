const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .post('/', async (req, res)=>{
    
    const user = await User.createUser({email:req.body.email, hash: req.body.password})
    try {
      res.send(user);
    } catch (err) {
      console.error(err)
    }
  })
  