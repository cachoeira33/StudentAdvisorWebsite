import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FormData {
  fullName: string;
  email: string;
  whatsAppNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsAppNumber: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = t('contactForm.formErrors.nameRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('contactForm.formErrors.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contactForm.formErrors.invalidEmail');
    }
    if (!formData.message.trim()) newErrors.message = t('contactForm.formErrors.messageRequired');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const response = await fetch('https://gabrielcachoeira.com:3001/api/save-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('contactForm.errorMessage'));
      }

      setSuccessMessage(t('contactForm.successMessage'));
      setFormData({
        fullName: '',
        email: '',
        whatsAppNumber: '',
        message: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Error saving contact:', error);
      setSuccessMessage(t('contactForm.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className="bg-neutral-900 rounded-lg shadow-lg p-6 sm:p-8 border border-neutral-800">
      <h2 className="text-2xl font-semibold text-white mb-6">{t('contactForm.title')}</h2>
      
      {successMessage && (
        <div className={`p-4 rounded-md mb-6 flex items-center gap-3 ${
          successMessage.includes('Error') || successMessage.includes('erro') ? 
          'bg-red-900/50 border border-red-700' : 
          'bg-emerald-900/50 border border-emerald-700'
        }`}>
          {successMessage.includes('Error') || successMessage.includes('erro') ? 
            <AlertTriangle size={20} className="text-red-400" /> : 
            <CheckCircle size={20} className="text-emerald-400" />
          }
          <span className="text-white">{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-2">
            {t('contactForm.form.fullName')} *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-neutral-800 border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            {t('contactForm.form.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-neutral-800 border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
              errors.email ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="whatsAppNumber" className="block text-sm font-medium text-neutral-300 mb-2">
            {t('contactForm.form.whatsAppNumber')} ({t('contactForm.form.optional')})
          </label>
          <input
            type="tel"
            id="whatsAppNumber"
            name="whatsAppNumber"
            value={formData.whatsAppNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
            {t('contactForm.form.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-neutral-800 border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-vertical ${
              errors.message ? 'border-red-500' : 'border-neutral-700'
            }`}
            placeholder="Tell us about your goals and how we can help you..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-md transition-all duration-200 flex items-center justify-center gap-2 font-medium ${
            isSubmitting
              ? 'bg-emerald-800 cursor-not-allowed opacity-70'
              : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg'
          } text-white`}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              {t('contactForm.form.submitting')}
            </>
          ) : (
            <>
              <Send size={18} />
              {t('contactForm.form.submit')}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;