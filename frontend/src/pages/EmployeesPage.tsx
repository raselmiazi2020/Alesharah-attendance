import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    api.get('/employees')
      .then((res) => setEmployees(res.data))
      .catch(() => setEmployees([]));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-slate-900">Employees</h1>
      <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Department</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Designation</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 text-sm text-slate-700">{employee.firstName} {employee.lastName}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{employee.employeeCode}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{employee.department?.name}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{employee.designation?.name}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{employee.status ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
