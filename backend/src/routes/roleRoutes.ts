import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listRoles, createRole, updateRole, deleteRole } from '../controllers/roleController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin']), listRoles);
router.post('/', authenticate, authorize(['Super Admin', 'Admin']), createRole);
router.put('/:id', authenticate, authorize(['Super Admin', 'Admin']), updateRole);
router.delete('/:id', authenticate, authorize(['Super Admin', 'Admin']), deleteRole);

export default router;
