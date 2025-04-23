import { Metadata } from "next";
import Link from "next/link";
import { getServiceLocation, getServiceById, getLocationById } from "@/lib/data";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/SchemaMarkup";

// Generate static params for service-location combinations
export function generateStaticParams() {
  // Generate all combinations of service-location pairs
  const services = [
    "rack-installations",
    "network-engineering",
    "wifi-deployment",
    "structured-cabling",
    "remote-support",
    "cctv-integration",
    "ubiquiti-cisco-solutions"
  ];
  
  const locations = [
    "cardiff",
    "swansea",
    "bridgend",
    "port-talbot",
    "llanelli",
    "merthyr",
    "aberdare",
    "carmarthen"
  ];
  
  return services.flatMap(slug => 
    locations.map(location => ({
      slug,
      location,
    }))
  );
}

// Generate metadata for each service-location page
export async function generateMetadata({ params }: { params: { slug: string, location: string }}): Promise<Metadata> {
  const serviceLocation = getServiceLocation(params.slug, params.location);
  
  if (!serviceLocation) {
    return {
      title: "Service Not Found",
    };
  }
  
  const { service, location } = serviceLocation;
  
  return {
    title: `${service.title} in ${location.name} | Pendragon Networks`,
    description: `Professional ${service.title.toLowerCase()} services in ${location.name}, ${location.county}. Expert technical support and network engineering solutions across ${location.name} and surrounding areas.`,
    openGraph: {
      title: `${service.title} in ${location.name} | Pendragon Networks`,
      description: `Professional ${service.title.toLowerCase()} services in ${location.name}, ${location.county}. Expert technical support and network engineering solutions across ${location.name} and surrounding areas.`,
      images: [
        {
          url: `/images/locations/${location.id}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} in ${location.name}`,
        },
      ],
    },
  };
}

export default async function ServiceLocationPage({ params }: { params: { slug: string, location: string }}) {
  const serviceData = getServiceById(params.slug);
  const locationData = getLocationById(params.location);
  
  if (!serviceData || !locationData) {
    notFound();
  }
  
  return (
    <>
      <SchemaMarkup 
        type="Service"
        data={{
          name: `${serviceData.title} in ${locationData.name}`,
          description: `Professional ${serviceData.title.toLowerCase()} services in ${locationData.name}, ${locationData.county}. Expert technical support and network engineering solutions across ${locationData.name} and surrounding areas.`,
          serviceType: serviceData.title,
          areaServed: locationData.name
        }}
      />
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link href={`/services/${params.slug}`} className="text-dragon-red hover:underline flex items-center">
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to {serviceData.title}
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {serviceData.title} in {locationData.name}
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              Professional {serviceData.title.toLowerCase()} services across {locationData.name} and surrounding areas in {locationData.county}.
            </p>
            
            <div className="bg-dragon-red/10 border border-dragon-red/20 rounded-lg p-4 flex items-start">
              <svg 
                className="w-6 h-6 text-dragon-red mr-3 mt-0.5 flex-shrink-0" 
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
              <div>
                <p className="text-white/90">
                  <strong>Serving:</strong> {locationData.name} ({locationData.postcode}) and surrounding areas
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md inline-block transition-all duration-200 hover:!text-black hover:border-black"
              >
                Contact Our {locationData.name} Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">{serviceData.title} Services in {locationData.name}</h2>
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-lg text-white/90 mb-6">
                  Pendragon Networks provides professional {serviceData.title.toLowerCase()} services throughout {locationData.name} and the surrounding {locationData.county} area. Our team of certified engineers delivers high-quality technical solutions to businesses of all sizes.
                </p>
                
                <p className="text-lg text-white/90 mb-6">
                  {serviceData.fullDescription}
                </p>
                
                <p className="text-lg text-white/90 mb-6">
                  Based in South Wales, our {locationData.name} service team understands the specific needs and challenges of local businesses. Whether you're located in {locationData.name} {locationData.postcode} or the wider {locationData.county} region, we provide reliable, responsive technical support and infrastructure solutions.
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Why Choose Pendragon Networks in {locationData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
                  <p className="text-white/80">
                    Our engineers have extensive knowledge of the {locationData.name} area and understand the unique technical challenges faced by businesses in {locationData.county}.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
                  <p className="text-white/80">
                    With our team based in South Wales, we provide fast response times to {locationData.name} businesses, minimizing downtime and disruption.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Comprehensive Services</h3>
                  <p className="text-white/80">
                    From installation and configuration to ongoing support, we offer complete {serviceData.title.toLowerCase()} solutions for {locationData.name} businesses.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Industry Accreditations</h3>
                  <p className="text-white/80">
                    Our team holds certifications from leading technology providers, ensuring the highest standards of service for our {locationData.name} clients.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Our {serviceData.title} Process in {locationData.name}</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-dragon-red rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mt-0.5 mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-white/80">
                      We begin with a thorough assessment of your requirements, visiting your {locationData.name} premises to understand your specific needs and challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dragon-red rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mt-0.5 mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Solution Design</h3>
                    <p className="text-white/80">
                      Our technical team creates a tailored solution for your business, considering factors specific to your {locationData.name} location and industry requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dragon-red rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mt-0.5 mr-3 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Professional Implementation</h3>
                    <p className="text-white/80">
                      Our experienced engineers deliver the solution efficiently and with minimal disruption to your {locationData.name} business operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dragon-red rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mt-0.5 mr-3 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                    <p className="text-white/80">
                      We provide continued technical support and maintenance to ensure your systems remain reliable and secure, with rapid response times for {locationData.name} businesses.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dragon-red/10 border border-dragon-red/20 rounded-lg p-6 mb-12">
                <h2 className="text-2xl font-bold mb-4">Areas We Serve in {locationData.county}</h2>
                <p className="text-white/90 mb-4">
                  Our {serviceData.title.toLowerCase()} services are available throughout {locationData.name} and nearby areas including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div className="bg-white/5 p-2 rounded text-center">{locationData.name} {locationData.postcode}</div>
                  <div className="bg-white/5 p-2 rounded text-center">Surrounding Areas</div>
                  <div className="bg-white/5 p-2 rounded text-center">Business Parks</div>
                  <div className="bg-white/5 p-2 rounded text-center">Industrial Estates</div>
                  <div className="bg-white/5 p-2 rounded text-center">Town Centers</div>
                  <div className="bg-white/5 p-2 rounded text-center">Commercial Zones</div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 rounded-lg border border-white/10 p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-dragon-red">Contact Our {locationData.name} Team</h3>
                <p className="text-white/80 mb-6">
                  Get in touch with our local {locationData.name} specialists to discuss your {serviceData.title.toLowerCase()} requirements.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <a href="mailto:hello@pendragonnetworks.co.uk" className="text-dragon-red hover:underline">
                      hello@pendragonnetworks.co.uk
                    </a>
                  </div>
                  <div className="flex items-start">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <a href="tel:+442920100100" className="text-dragon-red hover:underline">
                      +44 (0) 7916 214 843
                    </a>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white w-full py-3 rounded-md text-center inline-block transition-all duration-200 hover:!text-black hover:border-black"
                >
                  Request a Site Survey
                </Link>
                
                <hr className="border-white/10 my-6" />
                
                <h3 className="text-xl font-bold mb-4">{serviceData.title} Features</h3>
                <ul className="space-y-2 mb-6">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
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
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <hr className="border-white/10 my-6" />
                
                <h3 className="text-xl font-bold mb-4">Other Locations</h3>
                <ul className="space-y-2">
                  {/* List 3 other locations (excluding current) */}
                  {["cardiff", "swansea", "bridgend", "port-talbot"]
                    .filter(id => id !== locationData.id)
                    .slice(0, 3)
                    .map((id) => {
                      const otherLocation = getLocationById(id);
                      if (!otherLocation) return null;
                      
                      return (
                        <li key={id} className="flex items-start">
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
                          <Link href={`/services/${params.slug}/${otherLocation.id}`} className="hover:text-dragon-red transition-colors">
                            {otherLocation.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-dragon-red">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need {serviceData.title} in {locationData.name}?</h2>
              <p className="text-white/90">
                Contact our {locationData.name} specialists today for a free consultation and quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-dark-slate hover:bg-opacity-90 px-6 py-3 rounded-md text-center transition-all duration-200 inline-flex items-center justify-center"
              >
                Request a Quote
              </Link>
              <a 
                href={`tel:+447916214843`}
                className="border border-white hover:bg-white hover:text-dragon-red text-white px-6 py-3 rounded-md text-center transition-all duration-200 inline-flex items-center justify-center"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
