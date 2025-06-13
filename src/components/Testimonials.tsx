import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  name: string;
  message: string;
  photo?: string;
  course?: string;
  country?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    message: 'Gabriel helped me navigate the entire process of applying to UK universities. His guidance was invaluable and I successfully got into my dream course!',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    course: 'Business Management',
    country: 'Brazil',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Rodriguez',
    message: 'The support with Student Finance was amazing. Gabriel explained everything clearly and helped me understand all my options.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    course: 'Computer Science',
    country: 'Spain',
    rating: 5
  },
  {
    id: '3',
    name: 'Anna Rossi',
    message: 'Professional, knowledgeable, and always available to help. I couldn\'t have done it without Gabriel\'s expertise.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    course: 'Foundation Year',
    country: 'Italy',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
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
                  <p className="text-gray-400 text-sm">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.message}"</p>
              
              {testimonial.course && (
                <p className="text-emerald-400 text-sm font-medium">
                  Course: {testimonial.course}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;