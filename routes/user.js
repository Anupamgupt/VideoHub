import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubsctibe, update } from '../controllers/user.js';


const router=express.Router();
// update
router.put("/:id",update);


// delete
router.delete("/:id",deleteUser);


// get
router.get("/find/:id",getUser);

// subscribe
router.put("/sub/:id",subscribe)
// unsubsctibe
router.put("/sub/:id",unsubsctibe)
// like 
router.put("/sub/:id",like)
// dislike
router.put("/sub/:id",dislike)
export default router;