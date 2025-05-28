import React, { useState } from 'react';
import { Pencil, Trash2, Plus, X, Check } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  message: string;
  photo?: string;
  course?: string;
  country?: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<Testimonial>({
    id: '',
    name: '',
    message: '',
    photo: '',
    course: '',
    country: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return alert('Name and message are required');

    if (editingId) {
      setTestimonials(prev =>
        prev.map(t => (t.id === editingId ? { ...form, id: editingId } : t))
      );
      setEditingId(null);
    } else {
      setTestimonials(prev => [...prev, { ...form, id: Date.now().toString() }]);
    }

    setForm({ id: '', name: '', message: '', photo: '', course: '', country: '' });
  };

  const handleEdit = (id: string) => {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
      setForm(testimonial);
      setEditingId(id);
    }
  };

  const handleDelete = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-4 rounded-xl">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
        <input
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          {editingId ? 'Update' : 'Add'} Testimonial
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {testimonials.map(t => (
          <div key={t.id} className="bg-gray-800 p-4 rounded-xl shadow-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button onClick={() => handleEdit(t.id)} className="hover:text-yellow-400">
                <Pencil size={16} />
              </button>
              <button onClick={() => handleDelete(t.id)} className="hover:text-red-400">
                <Trash2 size={16} />
              </button>
            </div>
            {t.photo && (
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
            )}
            <h3 className="font-bold text-lg">{t.name}</h3>
            <p className="text-sm">{t.message}</p>
            {t.course && <p className="text-xs text-gray-400">Course: {t.course}</p>}
            {t.country && <p className="text-xs text-gray-400">From: {t.country}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
