import { Router } from 'express';
import authRoutes from './authRoutes';
import employeeRoutes from './employeeRoutes';
import roleRoutes from './roleRoutes';
import departmentRoutes from './departmentRoutes';
import designationRoutes from './designationRoutes';
import leaveRoutes from './leaveRoutes';
import attendanceRoutes from './attendanceRoutes';
import payrollRoutes from './payrollRoutes';
import faceRoutes from './faceRoutes';
import fingerprintRoutes from './fingerprintRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);
router.use('/roles', roleRoutes);
router.use('/departments', departmentRoutes);
router.use('/designations', designationRoutes);
router.use('/leave', leaveRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/payroll', payrollRoutes);
router.use('/face', faceRoutes);
router.use('/fingerprint', fingerprintRoutes);

export default router;
