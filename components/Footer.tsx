import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-slate text-white py-8 border-t border-dragon-red/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-dragon-red">Pendragon Networks</h3>
            <p className="mb-2">Technical services provider based in South Wales specializing in network engineering, structured cabling, and IT infrastructure solutions.</p>
            <p className="text-sm opacity-80">
              &copy; {currentYear} Pendragon Networks. All rights reserved.
            </p>
            <p className="text-sm opacity-80 mt-2">
              Designed and developed by <a href="https://www.webdevwales.com/" target="_blank" rel="noopener noreferrer" className="text-dragon-red hover:underline">Web Dev Wales</a> with <span className="text-dragon-red">♥</span> in the UK
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-dragon-red">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="hover:text-dragon-red transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="hover:text-dragon-red transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="hover:text-dragon-red transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="hover:text-dragon-red transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service"
                  className="hover:text-dragon-red transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-dragon-red">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 mr-2 mt-0.5 text-dragon-red" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <a 
                  href="mailto:hello@pendragonnetworks.co.uk"
                  className="hover:text-dragon-red transition-colors"
                >
                  hello@pendragonnetworks.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 mr-2 mt-0.5 text-dragon-red" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <a 
                  href="tel:+447916214843"
                  className="hover:text-dragon-red transition-colors"
                >
                  +44 (0) 7916 214 843
                </a>
              </li>
              <li className="flex items-start">
                <svg 
                  className="w-5 h-5 mr-2 mt-0.5 text-dragon-red" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <address className="not-italic">
                  Bridgend, South Wales
                </address>
              </li>
            </ul>
            
            {/* Service Areas */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white/80 mb-2">Service Areas:</h4>
              <p className="text-sm text-white/70">
                Cardiff, Swansea, Neath Port Talbot, Bridgend, Llanelli, Merthyr, Aberdare, Carmarthen, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
