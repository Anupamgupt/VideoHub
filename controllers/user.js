import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {
                    $set: req.body
                },
                {
                    new: true
                }
            );
            console.log(updatedUser);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                next(createError(404, "User not found"));
            }
        } catch (e) {
            next(e);
        }
    } else {
        next(createError(403, "You can update only your account"));
    }
};

export const deleteUser=async(req,res,next)=>{

}
export const getUser=async(req,res,next)=>{

}
export const subscribe=async(req,res,next)=>{

}
export const unsubsctibe=async(req,res,next)=>{

}
export const like=async(req,res,next)=>{

}
export const dislike=async(req,res,next)=>{

}