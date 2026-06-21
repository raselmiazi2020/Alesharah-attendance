import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listDesignations, createDesignation, updateDesignation, deleteDesignation } from '../controllers/designationController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listDesignations);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), createDesignation);
router.put('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), updateDesignation);
router.delete('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), deleteDesignation);

export default router;
