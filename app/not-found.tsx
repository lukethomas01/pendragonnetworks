import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-dark-slate min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <div className="mb-8">
          <span className="text-dragon-red text-7xl md:text-9xl font-bold">404</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-dragon-red hover:bg-opacity-90 text-white px-6 py-3 rounded-md text-center transition-all duration-200"
          >
            Return to Home
          </Link>
          <Link 
            href="/services" 
            className="border border-white/20 hover:border-dragon-red hover:bg-white/5 text-white px-6 py-3 rounded-md text-center transition-all duration-200"
          >
            View Our Services
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-2">Home</h3>
            <p className="text-white/70 mb-4">Return to our homepage</p>
            <Link 
              href="/" 
              className="text-dragon-red flex items-center"
            >
              Visit
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-2">Services</h3>
            <p className="text-white/70 mb-4">Explore our services</p>
            <Link 
              href="/services" 
              className="text-dragon-red flex items-center"
            >
              Visit
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-white/70 mb-4">Get in touch with us</p>
            <Link 
              href="/contact" 
              className="text-dragon-red flex items-center"
            >
              Visit
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all">
            <h3 className="text-xl font-bold mb-2">Help</h3>
            <p className="text-white/70 mb-4">Need assistance?</p>
            <Link 
              href="/contact" 
              className="text-dragon-red flex items-center"
            >
              Contact Us
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
