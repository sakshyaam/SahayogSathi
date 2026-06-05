import { Router } from "express";

import { createPost, updatePost } from "../controllers/post.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();



router.post('/', verifyJWT, upload.array("attachments", 10),createPost)


router.post('/:postId', verifyJWT, upload.array("attachments", 10), updatePost)



export default router