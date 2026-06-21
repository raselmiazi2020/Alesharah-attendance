import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { createEmployee, listEmployees, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listEmployees);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), createEmployee);
router.get('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), getEmployee);
router.put('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), updateEmployee);
router.delete('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), deleteEmployee);

export default router;
