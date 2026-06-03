const PROGRAMMES = ['Software Engineering', 'Data Science', 'Information Systems', 'Computer Science', 'Cybersecurity'];
const STATUSES = ['Active', 'Pending'];

export default function StudentForm({ form, editingId, onChange, onSubmit, onCancel }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        {editingId !== null ? 'Update Student' : 'Register New Student'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Student Name</label>
          <input
            name="studentName"
            value={form.studentName}
            onChange={onChange}
            placeholder="e.g. John Tan"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Programme</label>
          <select
            name="programme"
            value={form.programme}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Programme</option>
            {PROGRAMMES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Enrollment Status</label>
          <select
            name="enrollmentStatus"
            value={form.enrollmentStatus}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onSubmit}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded-md transition"
        >
          {editingId !== null ? 'Update Student' : 'Register Student'}
        </button>
        {editingId !== null && (
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium px-5 py-2 rounded-md transition"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
