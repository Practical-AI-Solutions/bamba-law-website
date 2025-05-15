const AboutSection = () => {
  return (
    <section id="about" className="py-16 pt-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">About Our Firm</h2>
          <div className="h-1 w-24 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Committed to providing quality legal representation to our clients throughout Maryland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fadeInLeft">
            <div className="bg-neutral-50 p-8 rounded-lg border-l-4 border-secondary-400 mb-8 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-primary-700 italic text-lg leading-relaxed">
                "At Bamba Law, we provide quality personal injury, civil litigation, consumer 
                protection, and immigration representation throughout Maryland."
              </p>
            </div>
            
            <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
              Our firm is committed to serving the legal needs of our clients in Columbia and beyond,
              offering personalized service and aggressive advocacy in each case we handle.
            </p>
            
            <div className="bg-primary-800 text-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-[1.01]">
              <h3 className="text-xl font-serif font-semibold text-secondary-300 mb-4">
                Our Approach
              </h3>
              <p className="mb-6 leading-relaxed">
                We provide our clients with honest assessments of their legal matters and work diligently to 
                achieve the best possible outcomes. Our team takes pride in delivering professional 
                service, clear communication, and fair pricing to every client we represent.
              </p>
              <a 
                href="tel:4436568310" 
                className="inline-flex items-center text-secondary-300 hover:text-secondary-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (443) 656-8310
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 animate-fadeInRight">
            <div className="mb-10">
              <h3 className="text-xl font-serif font-semibold text-primary-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Our Legal Services
              </h3>
              <ul className="space-y-4 text-neutral-700">
                <li className="flex border-b border-neutral-100 pb-4 transition-all hover:pl-2">
                  <div>
                    <p className="font-medium text-primary-700">Personal Injury</p>
                    <p className="text-sm text-neutral-500">Helping victims recover compensation for injuries</p>
                  </div>
                </li>
                <li className="flex border-b border-neutral-100 pb-4 transition-all hover:pl-2">
                  <div>
                    <p className="font-medium text-primary-700">Civil Litigation</p>
                    <p className="text-sm text-neutral-500">Representing clients in various civil disputes</p>
                  </div>
                </li>
                <li className="flex border-b border-neutral-100 pb-4 transition-all hover:pl-2">
                  <div>
                    <p className="font-medium text-primary-700">Consumer Protection</p>
                    <p className="text-sm text-neutral-500">Defending consumers against unfair practices</p>
                  </div>
                </li>
                <li className="flex transition-all hover:pl-2">
                  <div>
                    <p className="font-medium text-primary-700">Immigration Law</p>
                    <p className="text-sm text-neutral-500">Guiding clients through immigration processes</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-primary-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-center transition-all hover:pl-2">
                  <span className="text-secondary-500 mr-2">•</span>
                  <p>Dedicated personal attention to every client</p>
                </li>
                <li className="flex items-center transition-all hover:pl-2">
                  <span className="text-secondary-500 mr-2">•</span>
                  <p>Proven track record of successful cases</p>
                </li>
                <li className="flex items-center transition-all hover:pl-2">
                  <span className="text-secondary-500 mr-2">•</span>
                  <p>Strong reputation in the Maryland legal community</p>
                </li>
                <li className="flex items-center transition-all hover:pl-2">
                  <span className="text-secondary-500 mr-2">•</span>
                  <p>Fair and transparent pricing</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 