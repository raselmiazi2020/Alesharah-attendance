import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { listAttendance, createAttendanceLog, updateAttendanceLog } from '../controllers/attendanceController';

const router = Router();

router.get('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), listAttendance);
router.post('/', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager', 'Employee']), createAttendanceLog);
router.put('/:id', authenticate, authorize(['Super Admin', 'Admin', 'HR Manager']), updateAttendanceLog);

export default router;
