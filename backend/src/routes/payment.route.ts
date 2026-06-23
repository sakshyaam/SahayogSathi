import { Router } from "express";
import {
  initiatePayment,
  verifyPayment,
  releaseEscrow,
  getWalletDetails,
  getTransactionHistory,
  initiateTopUp,
  verifyTopUp,
  lockEscrowForOrder,
} from "../controllers/payment.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT);
router.get("/wallet", getWalletDetails);
router.get("/transactions", getTransactionHistory);
router.post("/topup/initiate", initiateTopUp);
router.post("/topup/verify", verifyTopUp);
router.post("/initiate", initiatePayment);
router.post("/verify", verifyPayment);
router.post("/:orderId/release", releaseEscrow);
router.post("/:orderId/lock", lockEscrowForOrder);

export default router;
