import { Metadata } from "next";
import Link from "next/link";
import { getServiceById, Service } from "@/lib/data";
import { notFound } from "next/navigation";
import SchemaMarkup from "@/components/SchemaMarkup";

// Generate static params for all services
export function generateStaticParams() {
  const services = [
    "rack-installations",
    "network-engineering",
    "wifi-deployment",
    "structured-cabling",
    "remote-support",
    "cctv-integration",
    "ubiquiti-cisco-solutions"
  ];
  
  return services.map((slug) => ({ slug }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string }}): Promise<Metadata> {
  const slug = params.slug;
  const service = getServiceById(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: `${service.title} | Pendragon Networks`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Pendragon Networks`,
      description: service.shortDescription,
      images: [
        {
          url: `/images/services/${service.id}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

// Feature Card component
const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/80">{description}</p>
  </div>
);

// Testimonial component
const Testimonial = ({ 
  quote, 
  author, 
  company 
}: { 
  quote: string; 
  author: string; 
  company: string;
}) => (
  <div className="bg-white/5 p-6 rounded-lg border border-white/10 relative">
    <svg 
      className="absolute top-4 right-4 w-8 h-8 text-dragon-red/20" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
    <p className="text-white/80 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-dragon-red rounded-full flex items-center justify-center text-white font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <p className="font-semibold">{author}</p>
        <p className="text-white/60 text-sm">{company}</p>
      </div>
    </div>
  </div>
);

export default async function ServicePage({ params }: { params: { slug: string }}) {
  const slug = params.slug;
  const service = getServiceById(slug);
  
  if (!service) {
    notFound();
  }
  
  return (
    <>
      <SchemaMarkup 
        type="Service"
        data={{
          name: service.title,
          description: service.fullDescription,
          serviceType: service.title,
          areaServed: [
            "Cardiff", "Swansea", "Bridgend", "Port Talbot", 
            "Llanelli", "Merthyr Tydfil", "Aberdare", "Carmarthen"
          ]
        }}
      />
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/services" className="text-dragon-red hover:underline flex items-center">
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
                Back to Services
              </Link>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="text-dragon-red mr-4">
                <svg 
                  className="w-16 h-16" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={service.icon} 
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            
            <p className="text-xl text-white/80 mb-8">
              {service.shortDescription}
            </p>
            
            <Link 
              href="/contact" 
              className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md inline-block transition-all duration-200 hover:!text-black hover:border-black"
            >
              Enquire About This Service
            </Link>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-lg text-white/90 mb-6">
                  {service.fullDescription}
                </p>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-6 h-6 text-dragon-red mr-2 mt-0.5 flex-shrink-0" 
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
              
              <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.useCases.map((useCase, index) => (
                  <FeatureCard key={index} title={useCase.title} description={useCase.description} />
                ))}
              </div>
              
              {service.testimonials && service.testimonials.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
                  <div className="grid grid-cols-1 gap-6 mb-12">
                    {service.testimonials.map((testimonial, index) => (
                      <Testimonial 
                        key={index} 
                        quote={testimonial.quote} 
                        author={testimonial.author} 
                        company={testimonial.company} 
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 rounded-lg border border-white/10 p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-dragon-red">Request This Service</h3>
                <p className="text-white/80 mb-6">
                  Contact us today to discuss your requirements and get a customized solution for your business.
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
                  Contact Us
                </Link>
                
                <hr className="border-white/10 my-6" />
                
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {/* Get 3 related services (exclude current service) */}
                  {["rack-installations", "network-engineering", "wifi-deployment", "structured-cabling"]
                    .filter(id => id !== service.id)
                    .slice(0, 3)
                    .map((id) => {
                      const relatedService = getServiceById(id);
                      if (!relatedService) return null;
                      
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
                              d="M13 7l5 5m0 0l-5 5m5-5H6" 
                            />
                          </svg>
                          <Link href={`/services/${id}`} className="hover:text-dragon-red transition-colors">
                            {relatedService.title}
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to get started?</h2>
              <p className="text-white/90">
                Contact us today to discuss your {service.title.toLowerCase()} requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-dark-slate hover:bg-opacity-90 px-6 py-3 rounded-md text-center transition-all duration-200 inline-flex items-center justify-center"
              >
                Get in Touch
              </Link>
              <a 
                href={`tel:+447916214843`}
                className="border border-white bg-white hover:bg-opacity-90 text-dragon-red hover:text-dark-slate px-6 py-3 rounded-md text-center transition-all duration-200 inline-flex items-center justify-center"
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
