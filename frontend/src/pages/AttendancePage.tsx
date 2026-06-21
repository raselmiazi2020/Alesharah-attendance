export default function AttendancePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold text-slate-900">Attendance</h1>
      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Face Recognition Attendance</h2>
        <p className="mt-2 text-slate-600">Open camera and perform check in/check out with live face matching.</p>
      </section>
      <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">QR Code Attendance</h2>
        <p className="mt-2 text-slate-600">Scan a dynamic QR code to record attendance in connected devices.</p>
      </section>
    </main>
  );
}
