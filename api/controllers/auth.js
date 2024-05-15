import User from "../models/User.js";
import bcrypt from "bcryptjs";
// import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
  const {username,email,password}=req.body;
  const user= await User.findOne({email})
  if(user){
    return res.json({message:"Пользователь уже существует"})
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    return res.json({status:true, message:"Пользователь создан"});
  } catch (err) {
    next(err);
  }
};


// export const login = async (req, res) => {

//     const {email,password}=req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({message:" user is not registered"})
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return res.json({message:" password is inconnect"})

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },  process.env.JWT, {expiresIn:'1h'} );
//       res.cookie('token',token,{httpOnly: true,maxAge:36000});
//       return res.json({ details: { ...otherDetails }, isAdmin });


//     };
// В вашем контроллере login

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "Пайдаланушы табылмады!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Құпия сөз немесе пайдаланушы аты қате!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
      { expiresIn: '1h' }
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    // Проверка, является ли пользователь менеджером
    const isManager = user.manager.value;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 36000
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin, isManager }); // Добавляем isManager в ответ
  } catch (err) {
    next(err);
  }
};
