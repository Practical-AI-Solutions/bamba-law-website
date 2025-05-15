import { useState } from "react";

const ReviewsSection = () => {
  // Reviews from the Google profile in the screenshot
  const testimonials = [
    {
      content: "Love the service and good communication throughout working on my case.",
      author: "Client",
      rating: 5,
    },
    {
      content: "Would highly recommend this office's services.",
      author: "Client",
      rating: 5,
    },
    {
      content: "His pricing is fair and pleasant to work with.",
      author: "Client",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">Client Testimonials</h2>
          <div className="h-1 w-24 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            See what our clients have to say about our legal services and representation.
          </p>
          <div className="mt-4 text-secondary-500 flex justify-center items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold mr-2">4.7</span>
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < 4 || i === 4 ? "text-secondary-500" : "text-neutral-300"}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-neutral-500">60 Google reviews</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Navigation Buttons */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden md:block">
            <button 
              onClick={goToPrevReview}
              className="p-3 rounded-full bg-white hover:bg-secondary-50 text-primary-700 transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden md:block">
            <button 
              onClick={goToNextReview}
              className="p-3 rounded-full bg-white hover:bg-secondary-50 text-primary-700 transition-colors shadow-sm"
              aria-label="Next review"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white shadow-md rounded-lg p-10 border-t-4 border-secondary-400">
            <div className="text-secondary-500 mb-4 flex justify-center md:justify-start">
              {/* Quote Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <p className="text-xl text-primary-700 mb-8 italic leading-relaxed text-center md:text-left">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="mt-8 flex flex-col items-center md:items-start">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? "text-secondary-500" : "text-neutral-300"}`}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-medium text-primary-800 text-lg">— {testimonials[activeIndex].author}</p>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-8 space-x-3 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${index === activeIndex ? "bg-secondary-500" : "bg-neutral-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 