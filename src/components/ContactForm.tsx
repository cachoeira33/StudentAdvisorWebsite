import React, { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
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
      const response = await fetch('http://localhost:3001/api/save-contact', {
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
      setSuccessMessage(error.message || t('contactForm.errorMessage'));
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
    <div className="flex items-center justify-center py-12">
      <div className="max-w-3xl mx-auto w-full bg-neutral-900 rounded-lg shadow-lg p-8 border border-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">{t('contactForm.title')}</h2>
        
        {successMessage && (
          <div className={`p-3 rounded-md mb-4 flex items-center gap-2 ${
            successMessage.includes(t('contactForm.errorMessage')) ? 'bg-red-800' : 'bg-emerald-800'
          } text-white`}>
            {successMessage.includes(t('contactForm.errorMessage')) ? 
              <AlertTriangle size={20} /> : <CheckCircle size={20} />}
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-1">
              {t('contactForm.form.fullName')}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-white ${
                errors.fullName ? 'border-red-500' : 'border-neutral-700'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
              {t('contactForm.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-white ${
                errors.email ? 'border-red-500' : 'border-neutral-700'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="whatsAppNumber" className="block text-sm font-medium text-neutral-300 mb-1">
              {t('contactForm.form.whatsAppNumber')} ({t('contactForm.form.optional')})
            </label>
            <input
              type="tel"
              id="whatsAppNumber"
              name="whatsAppNumber"
              value={formData.whatsAppNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
              {t('contactForm.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-neutral-800 border rounded-md text-white ${
                errors.message ? 'border-red-500' : 'border-neutral-700'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-md transition-colors ${
              isSubmitting
                ? 'bg-emerald-800 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700'
            } text-white`}
          >
            {isSubmitting ? t('contactForm.form.submitting') : t('contactForm.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;