import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listDepartments, createDepartment, updateDepartment, deleteDepartment } from '../controllers/departmentController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listDepartments);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), createDepartment);
router.put('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), updateDepartment);
router.delete('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), deleteDepartment);

export default router;
