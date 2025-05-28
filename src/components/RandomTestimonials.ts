const getRandomTestimonials = (testimonials: Testimonial[], count: number) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const randomTestimonials = getRandomTestimonials(testimonials, 3); // Exibe 3 aleatórios