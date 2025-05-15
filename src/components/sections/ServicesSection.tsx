const ServicesSection = () => {
  const services = [
    {
      title: "Personal Injury",
      description: "Representing clients who have suffered injuries due to accidents, medical malpractice, or other negligent actions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: "Civil Litigation",
      description: "Handling various civil disputes, including contract issues, business conflicts, and property matters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: "Consumer Protection",
      description: "Defending consumers against unfair business practices, deceptive advertising, and fraudulent activities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Immigration Law",
      description: "Assisting clients with visa applications, green cards, naturalization, and other immigration-related matters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">Practice Areas</h2>
          <div className="h-1 w-24 bg-secondary-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Bamba Law provides a full spectrum of legal services in a variety of practice areas, including:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-secondary-400 group hover:-translate-y-1 animate-fadeIn`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-secondary-500 mb-5 group-hover:text-primary-600 transition-colors transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary-800 mb-3 group-hover:text-primary-700">{service.title}</h3>
              <p className="text-neutral-600 group-hover:text-neutral-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-md rounded-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <div className="bg-primary-800 text-white p-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-center">Quality Legal Representation</h3>
            <p className="text-center text-lg">
              When you need experienced representation to navigate complex legal matters and fight 
              for your interests, contact Bamba Law for a confidential consultation.
            </p>
          </div>
          
          <div className="bg-white p-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href="tel:4436568310" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-8 rounded-md font-medium text-lg transition-all flex items-center justify-center shadow-sm hover:shadow-md w-full md:w-auto transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (443) 656-8310
              </a>
              
              <a 
                href="mailto:info@bambalaw.com" 
                className="border border-secondary-400 hover:border-secondary-500 text-primary-800 py-3 px-8 rounded-md font-medium text-lg transition-all flex items-center justify-center w-full md:w-auto transform hover:-translate-y-1 hover:bg-secondary-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 