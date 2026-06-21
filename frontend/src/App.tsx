import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import AttendancePage from './pages/AttendancePage';
import PayrollPage from './pages/PayrollPage';
import FaceRegistrationPage from './pages/FaceRegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/face-registration" element={<FaceRegistrationPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
