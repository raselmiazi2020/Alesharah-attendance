import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listPayrolls, createPayroll, getPayroll } from '../controllers/payrollController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listPayrolls);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), createPayroll);
router.get('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), getPayroll);

export default router;
