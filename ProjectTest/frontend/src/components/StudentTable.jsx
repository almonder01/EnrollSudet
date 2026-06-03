const statusBadge = (status) => {
  const base = 'px-2 py-1 rounded-full text-xs font-semibold';
  if (status === 'Active') return `${base} bg-green-100 text-green-700`;
  if (status === 'Pending') return `${base} bg-orange-100 text-orange-600`;
  return `${base} bg-gray-100 text-gray-600`;
};

export default function StudentTable({ students, loading, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700">Enrolled Students</h2>
      </div>

      {loading ? (
        <p className="text-center text-gray-400 py-8 text-sm">Loading...</p>
      ) : students.length === 0 ? (
        <p className="text-center text-gray-400 py-8 text-sm">No students found.</p>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Student Name</th>
              <th className="px-6 py-3 text-left">Programme</th>
              <th className="px-6 py-3 text-left">Enrollment Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800 font-medium">{student.studentName}</td>
                <td className="px-6 py-4 text-gray-600">{student.programme}</td>
                <td className="px-6 py-4">
                  <span className={statusBadge(student.enrollmentStatus)}>
                    {student.enrollmentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => onEdit(student)}
                    className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 text-xs font-medium px-3 py-1 rounded-md transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(student.id)}
                    className="bg-red-100 hover:bg-red-200 text-red-700 text-xs font-medium px-3 py-1 rounded-md transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
