import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listLeaveTypes, createLeaveType, submitLeaveRequest, listLeaveRequests, updateLeaveRequest } from '../controllers/leaveController';

const router = Router();

router.get('/types', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listLeaveTypes);
router.post('/types', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), createLeaveType);
router.post('/requests', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager', 'Employee']), submitLeaveRequest);
router.get('/requests', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listLeaveRequests);
router.put('/requests/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), updateLeaveRequest);

export default router;
