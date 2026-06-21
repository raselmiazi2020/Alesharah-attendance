export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {['Today\'s Attendance', 'Present', 'Absent', 'Late', 'On Leave', 'Overtime'].map((item) => (
          <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-medium text-slate-800">{item}</h2>
            <p className="mt-4 text-4xl font-bold text-slate-900">0</p>
          </div>
        ))}
      </div>
      <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Attendance Summary</h2>
        <p className="mt-2 text-slate-600">Department-wise attendance, late arrivals, and payroll cost visualization.</p>
      </section>
    </main>
  );
}
