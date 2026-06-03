import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

const emptyForm = { studentName: '', programme: '', enrollmentStatus: 'Pending' };

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await api.get('/students');
      const data = res.data?.$values ?? res.data;
      setStudents(Array.isArray(data) ? data : []);
    } catch {
      setError('Failed to load students.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.studentName.trim() || !form.programme.trim()) {
      setError('Student Name and Programme are required.');
      return;
    }
    setError('');
    try {
      if (editingId !== null) {
        await api.put(`/students/${editingId}`, { ...form, id: editingId });
        setEditingId(null);
      } else {
        await api.post('/students', form);
      }
      setForm(emptyForm);
      fetchStudents();
    } 
    catch {
      setError('Operation failed. Please try again.');
    }
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setForm({
      studentName: student.studentName,
      programme: student.programme,
      enrollmentStatus: student.enrollmentStatus,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError('');
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this student record?')) return;
    try {
      await api.delete(`/students/${id}`);
      fetchStudents();
    } catch {
      setError('Delete failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Student Enrollment Management System
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <StudentForm
          form={form}
          editingId={editingId}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />

        <StudentTable
          students={students}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
  );
}
