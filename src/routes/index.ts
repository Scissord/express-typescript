import authRoute from '@/routes/auth';
import userRoute from '@/routes/user';
import express, { Router } from 'express';

const router = Router();

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/uploads', express.static('uploads'));

export default router;
