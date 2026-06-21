import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { registerFace, listFaces } from '../controllers/faceController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listFaces);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), registerFace);

export default router;
