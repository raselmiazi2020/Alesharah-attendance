import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { registerFingerprint, listFingerprints } from '../controllers/fingerprintController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listFingerprints);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), registerFingerprint);

export default router;
