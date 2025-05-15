const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-serif font-bold text-white">
                Bamba <span className="text-secondary-400">Law</span>
              </span>
            </div>
            <p className="mb-2">10015 Old Columbia Rd Suite B 215</p>
            <p className="mb-6">Columbia, MD 21046</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-neutral-400">Telephone</p>
                  <a href="tel:4436568310" className="hover:text-secondary-300 transition-colors">(443) 656-8310</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a href="mailto:info@bambalaw.com" className="hover:text-secondary-300 transition-colors">info@bambalaw.com</a>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.7507386657063!2d-76.81908832347397!3d39.2080259915802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7df721df0db11%3A0x7c71f73e3152bbad!2s10015%20Old%20Columbia%20Rd%20%23B-215%2C%20Columbia%2C%20MD%2021046!5e0!3m2!1sen!2sus!4v1713830122099!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold text-secondary-300 mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Personal Injury
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Civil Litigation
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Consumer Protection
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Immigration Law
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold text-secondary-300 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-secondary-300 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary-300 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary-300 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-secondary-300 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© {currentYear} Bamba Law. All Rights Reserved.</p>
          </div>
          <p className="mt-4">
            Your inquiry, in and of itself, should not be misconstrued as establishing an attorney-client relationship. 
            With respect to e-mail communications, electronic technology is not secure, and information that you provide 
            may not be treated as privileged and may not remain confidential!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 