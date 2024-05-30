const user = require('../db/models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (payload) =>{
    return jwt.sign(payload,process.env.JWT_SECRET_CODE,{
        expiresIn : process.env.EXPIRE_IN,
    });
}

const signup = async (req,res,next) =>{
    const body = req.body;
   if(!['1','2'].includes(body.userType)){
    return res.status(400).json({
        status : 'fail',
        message : "invalid user type"
    });
   }
   const newUser = await user.create({
    userType : body.userType,
    firstName : body.firstName,
    lastName : body.lastName,
    email : body.email,
    password : body.password,
    confPassword : body.confPassword
   });

   const result = newUser.toJSON();
   delete result.deletedAt;
   delete result.password;

   result.token = generateToken({
    id : result.id
   })

   if(!newUser){
    return res.status(400).json({
        status : "fail",
        message : "failed to create new user"
    });
   }
   return res.status(200).json({
    status : 'success',
    data : result
   });
};

const login = async (req,res,next) =>{
    
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            stauts : 'fail',
            message : "provide email and password"
        });
    }
    const result = await user.findOne({where : {email}});
    
    if(!result || !(await bcrypt.compare(password,result.password))) {
        return res.status(401).json({
            stauts : 'fail',
            message : "Incorrect email or password"
        });
    }
    const token = generateToken({
        id : result.id
    });
    return res.status(200).json({
        status : 'success',
        data : token
    })

}

module.exports = { signup , login }