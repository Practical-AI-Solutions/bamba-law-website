const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] pt-32 pb-8 bg-gradient-to-b from-primary-900 to-primary-800 overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNCAtMi4yMDkgMC00IDEuNzkxLTQgNHMxLjc5MSA0IDQgNGMyLjIwOSAwIDQtMS43OTEgNC00TTU0IDEyYzAtMy4zMTQtMi42ODYtNi02LTZzLTYgMi42ODYtNiA2YzAgMy4zMTQgMi42ODYgNiA2IDZzNi0yLjY4NiA2LTZNOC41IDM2YzAtMS45MzMtMS41NjctMy41LTMuNS0zLjUtMS45MzMgMC0zLjUgMS41NjctMy41IDMuNXMxLjU2NyAzLjUgMy41IDMuNWMxLjkzMyAwIDMuNS0xLjU2NyAzLjUtMy41Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fadeIn">
            <span className="text-secondary-400">Quality</span> Legal Representation
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 mb-8 animate-fadeIn animation-delay-200">
            Bamba Law provides quality personal injury, civil litigation, consumer protection, 
            and immigration representation throughout Maryland.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
            <a 
              href="tel:4436568310" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-8 rounded-md font-medium text-lg transition-colors flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (443) 656-8310
            </a>
            <a 
              href="#about" 
              className="border border-white text-white hover:bg-white/10 py-3 px-8 rounded-md font-medium text-lg transition-colors flex items-center justify-center transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" fill="none" className="w-full h-8 text-white">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 48L60 42.6667C120 37.3333 240 26.6667 360 21.3333C480 16 600 16 720 21.3333C840 26.6667 960 37.3333 1080 42.6667C1200 48 1320 48 1380 48H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V48Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 