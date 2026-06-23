import { Router } from "express";
import {
  getMyNotifications,
  markNotificationAsRead,
} from "../controllers/notification.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT);
router.get("/", getMyNotifications);
router.patch("/:notificationId/read", markNotificationAsRead);

export default router;
