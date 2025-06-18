import React, { useState, useEffect } from 'react';
import { Star, Pencil, Trash2, Plus, X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  name: string;
  course: string;
  photo: string;
  testimonial: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    course: 'Business Management',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    testimonial: 'Gabriel helped me navigate the entire process of applying to UK universities. His guidance was invaluable and I successfully got into my dream course!',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    course: 'Computer Science',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    testimonial: 'The support with Student Finance was amazing. Gabriel explained everything clearly and helped me understand all my options.',
    rating: 5
  },
  {
    id: '3',
    name: 'Anna Rossi',
    course: 'Psychology',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    testimonial: 'Professional, knowledgeable, and always available to help. I couldn\'t have done it without Gabriel\'s expertise.',
    rating: 5
  },
  {
    id: '4',
    name: 'João Santos',
    course: 'Accounting',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    testimonial: 'From application to enrollment, Gabriel was there every step of the way. Now I\'m studying my dream course in London!',
    rating: 5
  }
];

interface TestimonialsProps {
  showAdmin?: boolean;
  maxDisplay?: number;
}

const Testimonials: React.FC<TestimonialsProps> = ({ showAdmin = false, maxDisplay }) => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Testimonial, 'id'>>({
    name: '',
    course: '',
    photo: '',
    testimonial: '',
    rating: 5
  });

  // Get random testimonials for display
  const getRandomTestimonials = (count: number) => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const displayTestimonials = maxDisplay 
    ? getRandomTestimonials(maxDisplay)
    : testimonials;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.course || !formData.testimonial) return;

    if (editingId) {
      setTestimonials(testimonials.map(t => 
        t.id === editingId ? { ...formData, id: editingId } : t
      ));
      setEditingId(null);
    } else {
      const newTestimonial = {
        ...formData,
        id: Date.now().toString()
      };
      setTestimonials([...testimonials, newTestimonial]);
    }

    setFormData({
      name: '',
      course: '',
      photo: '',
      testimonial: '',
      rating: 5
    });
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setFormData({
      name: testimonial.name,
      course: testimonial.course,
      photo: testimonial.photo,
      testimonial: testimonial.testimonial,
      rating: testimonial.rating
    });
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: '',
      course: '',
      photo: '',
      testimonial: '',
      rating: 5
    });
  };

  return (
    <section className="py-16 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Admin Panel */}
        {showAdmin && (
          <div className="mb-12 bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-serif text-white mb-4">Admin Panel</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Course"
                  value={formData.course}
                  onChange={e => setFormData({ ...formData, course: e.target.value })}
                  className="bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                  required
                />
                <input
                  type="url"
                  placeholder="Photo URL"
                  value={formData.photo}
                  onChange={e => setFormData({ ...formData, photo: e.target.value })}
                  className="bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                />
                <select
                  value={formData.rating}
                  onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                >
                  {[1, 2, 3, 4, 5].map(rating => (
                    <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Testimonial"
                value={formData.testimonial}
                onChange={e => setFormData({ ...formData, testimonial: e.target.value })}
                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-white"
                rows={3}
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-2"
                >
                  {editingId ? <Check size={16} /> : <Plus size={16} />}
                  {editingId ? 'Update' : 'Add'} Testimonial
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-500 transition-colors flex items-center gap-2"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Testimonials Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {showAdmin && (
                <div className="absolute top-2 right-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(testimonial)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                {testimonial.photo && (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.course}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;