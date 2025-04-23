import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Network Engineering & Technical Support",
  description: "Explore our range of technical services including rack & stack, network engineering, structured cabling, and WiFi deployment across South Wales.",
};

// Service card component with more details than homepage
const ServiceCard = ({ 
  id, 
  title, 
  description, 
  icon,
  features
}: { 
  id: string;
  title: string; 
  description: string; 
  icon: string;
  features: string[];
}) => (
  <div className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10 hover:translate-y-[-5px] group border border-white/10">
    <div className="p-6">
      <div className="mb-4 text-dragon-red">
        <svg 
          className="w-12 h-12" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={icon} 
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm uppercase tracking-wider text-dragon-red mb-2">Key Features</h4>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="w-5 h-5 text-dragon-red mr-2 mt-0.5 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
              <Link 
                href={`/services/${id}`}
                className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-4 py-2 rounded-md inline-block transition-all duration-200 hover:!text-black hover:border-black"
              >
                View Service Details
              </Link>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Services & Network Engineering
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive technical services for businesses across South Wales, delivered by qualified engineers with years of industry experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-dragon-red">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need a custom solution?</h2>
              <p className="text-white/90">
                Contact us today to discuss your specific technical requirements.
              </p>
            </div>
            
            <div>
              <Link 
                href="/contact" 
                className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md inline-block transition-all duration-200 hover:!text-black hover:border-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coverage Area */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-dragon-red">Service Coverage</h2>
              <p className="text-white/80 mb-4">
                Our services extend throughout South Wales, covering major cities and surrounding areas:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-dragon-red mr-2 mt-0.5" 
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
                  <span>Cardiff, Swansea, Newport & surrounding areas</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-dragon-red mr-2 mt-0.5" 
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
                  <span>Bridgend, Port Talbot, Neath & the valleys</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-dragon-red mr-2 mt-0.5" 
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
                  <span>Llanelli, Carmarthen & West Wales</span>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-dragon-red mr-2 mt-0.5" 
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
                  <span>Merthyr Tydfil, Aberdare & the Valleys</span>
                </li>
              </ul>
            </div>
            
            {/* Why Choose Us */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-dragon-red">Why Choose Pendragon Networks</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-dragon-red mr-3 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold mb-1">Expert Engineers</h3>
                    <p className="text-white/70">Certified professionals with extensive industry experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-dragon-red mr-3 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold mb-1">Rapid Response</h3>
                    <p className="text-white/70">Fast service deployment and emergency response when needed.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-dragon-red mr-3 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold mb-1">Quality Assurance</h3>
                    <p className="text-white/70">All work tested and certified to industry standards.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-dragon-red mr-3 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold mb-1">Local Expertise</h3>
                    <p className="text-white/70">Deep knowledge of the South Wales business landscape.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
