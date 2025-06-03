import express from 'express';
import multer from 'multer';
import { analyzePoem } from '../controllers/poemController.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/analyze', upload.single('image'), analyzePoem);

export default router; 