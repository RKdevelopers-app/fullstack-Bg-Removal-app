import express from 'express';
import { clerkWebhooks,paymentRazorpay,userCredits, verifyRazorpay } from '../controllers/UserController.js';
import authUser  from '../middlewares/auth.js';

const router = express.Router();

// Route to handle Clerk webhooks
router.post('/webhooks', clerkWebhooks);
router.get('/credits', authUser, userCredits);
router.post('/pay-razor', authUser, paymentRazorpay );
router.post('/verify-razor', verifyRazorpay);

export default router;