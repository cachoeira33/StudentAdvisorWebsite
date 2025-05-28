import React, { useState } from 'react';
import { Pencil, Trash2, Plus, X, Check } from 'lucide-react';

interface University {
  id: string;
  name: string;
  city: string;
  partnership: string;
  logo: string;
}

const initialUniversities: University[] = [
  {
    id: '1',
    name: "Arden University",
    city: "London",
    partnership: "Direct Partner",
    logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
  },
  {
    id: '2',
    name: "University of Sunderland",
    city: "London / Sunderland",
    partnership: "Referral",
    logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg"
  },
  {
    id: '3',
    name: "University of Roehampton",
    city: "London",
    partnership: "Referral",
    logo: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg"
  }
];

const partnershipTypes = ["Direct Partner", "Referral", "Affiliate"];

const UniversityList: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>(initialUniversities);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<University, 'id'>>({
    name: '',
    city: '',
    partnership: partnershipTypes[0],
    logo: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof University, string>>>({});

  const validateForm = () => {
    const newErrors: Partial<Record<keyof University, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.logo.trim()) newErrors.logo = 'Logo URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      setUniversities(universities.map(uni => 
        uni.id === editingId ? { ...formData, id: editingId } : uni
      ));
      setEditingId(null);
    } else {
      const newUniversity = {
        ...formData,
        id: Date.now().toString()
      };
      setUniversities([...universities, newUniversity]);
    }

    setFormData({
      name: '',
      city: '',
      partnership: partnershipTypes[0],
      logo: ''
    });
  };

  const handleEdit = (university: University) => {
    setEditingId(university.id);
    setFormData({
      name: university.name,
      city: university.city,
      partnership: university.partnership,
      logo: university.logo
    });
  };

  const handleDelete = (id: string) => {
    setUniversities(universities.filter(uni => uni.id !== id));
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: '',
      city: '',
      partnership: partnershipTypes[0],
      logo: ''
    });
    setErrors({});
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <form onSubmit={handleSubmit} className="bg-neutral-900 p-6 rounded-lg shadow-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              University Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter university name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              City
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter city"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Partnership Type
            </label>
            <select
              value={formData.partnership}
              onChange={e => setFormData({ ...formData, partnership: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {partnershipTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Logo URL
            </label>
            <input
              type="text"
              value={formData.logo}
              onChange={e => setFormData({ ...formData, logo: e.target.value })}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter logo URL"
            />
            {errors.logo && <p className="text-red-500 text-sm mt-1">{errors.logo}</p>}
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
                Update University
              </>
            ) : (
              <>
                <Plus size={16} />
                Add University
              </>
            )}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map(university => (
          <div
            key={university.id}
            className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div className="h-48 bg-neutral-800 flex items-center justify-center p-4">
              <img
                src={university.logo}
                alt={`${university.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{university.name}</h3>
              <p className="text-gray-400 mb-2">{university.city}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-emerald-500">{university.partnership}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(university)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(university.id)}
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

export default UniversityList;