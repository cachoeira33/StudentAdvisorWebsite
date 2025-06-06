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

    try {
      const response = await fetch('/api/save-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(t('contactForm.successMessage'));
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
      } else {
        throw new Error('Failed to save contact');
      }
    } catch (error) {
      console.error('Error saving contact:', error);
      setSuccessMessage(t('contactForm.errorMessage'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="max-w-3xl mx-auto w-full bg-neutral-900 rounded-lg shadow-lg p-8 border border-neutral-800">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">{t('contactForm.title')}</h2>
        
        {successMessage && (
          <div className={`p-3 rounded-md mb-4 flex items-center gap-2 ${
            successMessage.includes('Error') ? 'bg-red-800' : 'bg-emerald-800'
          } text-white`}>
            {successMessage.includes('Error') ? <AlertTriangle size={20} /> : <CheckCircle size={20} />}
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campos do formulário permanecem os mesmos */}
          {/* ... seu código existente para os campos ... */}
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            {t('contactForm.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;