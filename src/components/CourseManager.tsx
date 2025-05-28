import React, { useState } from 'react';
import { Pencil, Trash2, Plus, X, Check } from 'lucide-react';
import UniversityList, { University } from './UniversityList';

interface Course {
  id: string;
  name: string;
  duration: string;
  entryMonth: string;
  hasFoundationYear: boolean;
  university: string;
}

const initialCourses: Course[] = [
  {
    id: '1',
    name: "BSc Computer Science",
    duration: "3 years",
    entryMonth: "September",
    hasFoundationYear: true,
    university: "Arden University"
  },
  {
    id: '2',
    name: "BA Business Management",
    duration: "3 years",
    entryMonth: "January",
    hasFoundationYear: false,
    university: "University of Sunderland"
  }
];

const entryMonths = ["January", "May", "September"];

const CourseManager: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Course, 'id' | 'hasFoundationYear'> & { hasFoundationYear: boolean }>({
    name: '',
    duration: '',
    entryMonth: entryMonths[0],
    hasFoundationYear: false,
    university: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Course, string>>>({});

  // Access universities from UniversityList's local state
  const [universities] = useState<University[]>(() => {
    // You would ideally fetch this data from a central state management solution
    // For now, using a default list
    return [
      { id: '1', name: "Arden University", city: "London", partnership: "Direct Partner", logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" },
      { id: '2', name: "University of Sunderland", city: "London / Sunderland", partnership: "Referral", logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg" },
      { id: '3', name: "University of Roehampton", city: "London", partnership: "Referral", logo: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg" }
    ];
  });

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Course, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Course Name is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      setCourses(courses.map(course =>
        course.id === editingId ? { ...formData, id: editingId } : course
      ));
      setEditingId(null);
    } else {
      const newCourse = {
        ...formData,
        id: Date.now().toString()
      };
      setCourses([...courses, newCourse]);
    }

    setFormData({
      name: '',
      duration: '',
      entryMonth: entryMonths[0],
      hasFoundationYear: false,
      university: ''
    });
  };

  const handleEdit = (course: Course) => {
    setEditingId(course.id);
    setFormData({
      name: course.name,
      duration: course.duration,
      entryMonth: course.entryMonth,
      hasFoundationYear: course.hasFoundationYear,
      university: course.university
    });
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: '',
      duration: '',
      entryMonth: entryMonths[0],
      hasFoundationYear: false,
      university: ''
    });
    setErrors({});
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <form onSubmit={handleSubmit} className="bg-neutral-900 p-6 rounded-lg shadow-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Course Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter course name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Duration
            </label>
            <input
              type="text"
              value={formData.duration}
              onChange={e => setFormData({ ...formData, duration: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter duration"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Entry Month
            </label>
            <select
              value={formData.entryMonth}
              onChange={e => setFormData({ ...formData, entryMonth: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {entryMonths.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              University
            </label>
            <select
              value={formData.university}
              onChange={e => setFormData({ ...formData, university: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select University</option>
              {universities.map(university => (
                <option key={university.id} value={university.name}>{university.name}</option>
              ))}
            </select>
            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="inline-flex items-center text-gray-300">
              <input
                type="checkbox"
                checked={formData.hasFoundationYear}
                onChange={e => setFormData({ ...formData, hasFoundationYear: e.target.checked })}
                className="form-checkbox h-5 w-5 text-emerald-600 bg-neutral-800 border border-neutral-700 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm">Has Foundation Year</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-neutral-600 transition-colors flex items-center gap-2"
            >
              <X size={16} />
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-2"
          >
            {editingId ? (
              <>
                <Check size={16} />
                Update Course
              </>
            ) : (
              <>
                <Plus size={16} />
                Add Course
              </>
            )}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{course.name}</h3>
              <p className="text-gray-400 mb-2">Duration: {course.duration}</p>
              <p className="text-gray-400 mb-2">Entry Month: {course.entryMonth}</p>
              <p className="text-gray-400 mb-2">University: {course.university}</p>
              <p className="text-gray-400 mb-2">Has Foundation Year: {course.hasFoundationYear ? 'Yes' : 'No'}</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManager;
