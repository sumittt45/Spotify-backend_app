const userModel = require('../models/user.model');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


async function registerUser(req, res) {
  
    const { username, email, password, role } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ 
      $or: [
        { username },
        { email }
      ]
     });

     if(isUserAlreadyExist) {
        return res.status(400).json({ message: "User with this username or email already exists" });
     }

     const hash = await bcrypt.hash(password, 10);

     const user = await userModel.create({
        username,
        email,
        password: hash,
        role
     });

     const token = jsonwebtoken.sign({ 
      id: user._id,
      role: user.role,
    }, process.env.JWT_SECRET);


    res.cookie('token', token) 
    
    
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
      }); 
   
}



async function loginUser(req, res) {
    
  const { username, email, password } = req.body;


  const user = await userModel.findOne({ 
    $or: [
      { username },
      { email }
    ]
   });

   if(!user) {
      return res.status(400).json({ message: "User with this username or email does not exist" });
   }


   const isPasswordCorrect = await bcrypt.compare(password, user.password);

   if(!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
   }

   const token = jsonwebtoken.sign({ 
    id: user._id,
    role: user.role,
  }, process.env.JWT_SECRET);

  res.cookie('token', token);

  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });

}

async function logoutUser(req, res) {
  res.clearCookie('token');

  res.status(200).json({
    message: "User loggedout successfully"
  });
}

module.exports = {
    registerUser, loginUser, logoutUser
}