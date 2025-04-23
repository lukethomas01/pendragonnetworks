import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Pendragon Networks | Technical Services & Network Engineering in South Wales",
  description: "Specialist technical services provider in South Wales offering rack & stack services, structured cabling, WiFi deployment, and network engineering.",
};

// Service card component
const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  link: string;
}) => (
  <div className="bg-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:translate-y-[-5px] group">
    <div className="mb-4 text-dragon-red">
      <svg 
        className="w-10 h-10" 
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
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-white/80 mb-4">{description}</p>
    <Link 
      href={link} 
      className="text-dragon-red group-hover:text-white inline-flex items-center"
    >
      Learn more
      <svg 
        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
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
);

// Project showcase card
const ProjectCard = ({ 
  title, 
  description, 
  image 
}: { 
  title: string; 
  description: string; 
  image: string;
}) => (
  <div className="relative group overflow-hidden rounded-lg">
    <div className="aspect-video relative">
      <Image
        src={`/images/${image}`}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-dark-slate via-dark-slate/80 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

// Accreditation badge
const AccreditationBadge = ({ 
  name, 
  logo 
}: { 
  name: string; 
  logo: string;
}) => (
  <div className="bg-white/5 p-4 rounded-lg flex items-center justify-center h-20">
    <div className="text-center">
      <span className="text-white/70 text-sm">{name}</span>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <SchemaMarkup 
        type="LocalBusiness"
        data={{
          name: "Pendragon Networks",
          description: "Technical services provider based in South Wales specializing in network engineering, structured cabling, and IT infrastructure solutions.",
          url: "https://pendragonnetworks.com",
          logo: "https://pendragonnetworks.com/pendragon-dragon-network-icon-shield-logo.png",
          image: "https://pendragonnetworks.com/pendragon-networks-tech-logo-transparent-background.png",
          address: {
            streetAddress: "Unit 8, Bridgend Business Park",
            addressLocality: "Bridgend",
            addressRegion: "South Wales",
            postalCode: "CF31 3SH",
            addressCountry: "UK"
          },
          geo: {
            latitude: "51.504",
            longitude: "-3.576"
          },
          areaServed: [
            "Cardiff", "Swansea", "Bridgend", "Port Talbot", 
            "Llanelli", "Merthyr Tydfil", "Aberdare", "Carmarthen"
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-dark-slate py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-slate to-transparent"></div>
          {/* Background network pattern - will be replaced with actual background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e60000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block">
                <div className="bg-dragon-red px-4 py-1 rounded-full text-sm font-semibold">South Wales Based</div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Expert Network Engineering & Technical Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Providing professional rack & stack services, structured cabling, and network solutions across South Wales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md text-center transition-all duration-200 hover:!text-black hover:border-black"
                >
                  Explore Services
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white/20 hover:border-dragon-red hover:bg-white/5 text-white px-6 py-3 rounded-md text-center transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image 
                  src="/pendragon-networks-tech-logo-transparent-background.png" 
                  alt="Pendragon Networks Logo" 
                  fill
                  sizes="(max-width: 768px) 264px, 320px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive technical services tailored to meet your network infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Rack & Stack Installations" 
              description="Professional installation and configuration of server racks, network equipment, and hardware components."
              icon="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" 
              link="/services/rack-installations"
            />
            <ServiceCard 
              title="Network Engineering" 
              description="Expert design, deployment, and optimization of network infrastructure for businesses of all sizes."
              icon="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" 
              link="/services/network-engineering"
            />
            <ServiceCard 
              title="Wi-Fi Surveys & Deployment" 
              description="Comprehensive wireless network surveys, planning, and professional installation services."
              icon="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" 
              link="/services/wifi-deployment"
            />
            <ServiceCard 
              title="Structured Cabling" 
              description="High-quality cable installation, testing, and certification for reliable network infrastructure."
              icon="M13 10V3L4 14h7v7l9-11h-7z" 
              link="/services/structured-cabling"
            />
            <ServiceCard 
              title="Remote Support Services" 
              description="Comprehensive remote monitoring, diagnostics, and technical support for your IT infrastructure."
              icon="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
              link="/services/remote-support"
            />
            <ServiceCard 
              title="CCTV & IP Camera Integration" 
              description="Installation and configuration of security camera systems integrated with your network."
              icon="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              link="/services/cctv-integration"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center text-dragon-red hover:text-white transition-colors"
            >
              View all services
              <svg 
                className="w-4 h-4 ml-2" 
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
      </section>
      
      {/* Project Gallery / Showcase */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              See some of our recent deployments and installations across South Wales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Structured Cabling" 
              description="Professional cable installation for a business complex in Cardiff." 
              image="Structured Cabling.jpg"
            />
            <ProjectCard 
              title="Remote Support Services" 
              description="24/7 monitoring and technical support for a regional healthcare provider." 
              image="Remote Support Services.jpg"
            />
            <ProjectCard 
              title="Security Solutions" 
              description="CCTV and IP camera integration for retail locations across South Wales." 
              image="CCTV & IP Camera Integration.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* Trust Indicators / Accreditations */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-dark-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Accreditations</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Trusted by leading organizations and certified to industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AccreditationBadge name="Cisco Certified Partner" logo="cisco-logo" />
            <AccreditationBadge name="Ubiquiti Enterprise Systems" logo="ubiquiti-logo" />
            <AccreditationBadge name="CompTIA Network+" logo="comptia-logo" />
            <AccreditationBadge name="Microsoft Certified" logo="microsoft-logo" />
          </div>
        </div>
      </section>
      
      {/* Contact Strip */}
      <section className="py-12 md:py-16 bg-dragon-red">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to elevate your network infrastructure?</h2>
              <p className="text-white/90">
                Contact us today for a free consultation and site survey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:hello@pendragonnetworks.co.uk" 
                className="bg-white text-dark-slate hover:bg-opacity-90 px-6 py-3 rounded-md text-center transition-all duration-200 inline-flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
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
                Email Us
              </a>
              <Link 
                href="/contact" 
                className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md text-center transition-all duration-200 hover:!text-black hover:border-black inline-flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
