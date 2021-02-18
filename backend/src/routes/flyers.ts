import express from 'express';
import flyersController from '../controllers/flyers';

const router = express.Router();

router.get('/flyers', flyersController.getFlyers);

export default router;
