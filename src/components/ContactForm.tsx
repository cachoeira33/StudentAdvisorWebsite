import React, { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface FormData {
  fullName: string;
  email: string;
  whatsAppNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsAppNumber: '',
    message: ''
  });
  const [submissions, setSubmissions] = useState<FormData[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmissions([...submissions, formData]);
    setSuccessMessage('Message sent successfully!');
    setFormData({
      fullName: '',
      email: '',
      whatsAppNumber: '',
      message: ''
    });
    setErrors({});

    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const exportToExcel = () => {
    if (submissions.length === 0) return;

    const ws = XLSX.utils.json_to_sheet(submissions);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contact Submissions');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'contact_submissions.xlsx');
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-3xl mx-auto w-full bg-neutral-900 rounded-lg shadow-lg p-8 border border-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Us</h2>
        {successMessage && (
          <div className="bg-emerald-800 text-white p-3 rounded-md mb-4 flex items-center gap-2">
            <CheckCircle size={20} />
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertTriangle size={14} />
                {errors.fullName}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertTriangle size={14} />
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="whatsAppNumber">
              WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              id="whatsAppNumber"
              name="whatsAppNumber"
              value={formData.whatsAppNumber}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your WhatsApp Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertTriangle size={14} />
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        {submissions.length > 0 && (
          <button
            onClick={exportToExcel}
            className="mt-4 px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-neutral-600 transition-colors w-full"
          >
            Export to Excel
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
