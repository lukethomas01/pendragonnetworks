import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us | Pendragon Networks",
  description: "Get in touch with our team of network engineering experts in South Wales. We provide technical services across Cardiff, Swansea, Bridgend, and surrounding areas.",
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup 
        type="LocalBusiness"
        data={{
          name: "Pendragon Networks",
          description: "Technical services provider based in South Wales specializing in network engineering, structured cabling, and IT infrastructure solutions.",
          address: {
            streetAddress: "Unit 8, Bridgend Business Park",
            addressLocality: "Bridgend",
            addressRegion: "South Wales",
            postalCode: "CF31 3SH",
            addressCountry: "UK"
          },
          telephone: "+44 7916 214 843",
          email: "hello@pendragonnetworks.co.uk",
          openingHours: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:30',
              closes: '17:30'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '09:00',
              closes: '16:00',
              description: 'By appointment only'
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Pendragon Networks
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our team of technical experts is ready to assist with your network infrastructure needs across South Wales.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-dragon-red p-3 rounded-lg mr-4">
                    <svg 
                      className="w-6 h-6 text-white" 
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
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <a 
                      href="mailto:hello@pendragonnetworks.co.uk" 
                      className="text-dragon-red hover:underline"
                    >
                      hello@pendragonnetworks.co.uk
                    </a>
                    <p className="text-white/60 mt-1">
                      We aim to respond to all enquiries within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dragon-red p-3 rounded-lg mr-4">
                    <svg 
                      className="w-6 h-6 text-white" 
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
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <a 
                      href="tel:+447916214843" 
                      className="text-dragon-red hover:underline"
                    >
                      +44 (0) 7916 214 843
                    </a>
                    <p className="text-white/60 mt-1">
                      Available Monday to Friday, 8:30am - 5:30pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dragon-red p-3 rounded-lg mr-4">
                    <svg 
                      className="w-6 h-6 text-white" 
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
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                    <address className="text-white not-italic">
                      Pendragon Networks<br />
                      Unit 8, Bridgend Business Park<br />
                      Bridgend, CF31 3SH<br />
                      South Wales, United Kingdom
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <table className="w-full text-white/80">
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Monday - Friday</td>
                      <td className="py-2">8:30am - 5:30pm</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Saturday</td>
                      <td className="py-2">By appointment</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                <p className="text-white/80 mb-4">
                  For existing clients with emergency technical issues outside of business hours, please call our support line:
                </p>
                <a 
                  href="tel:+447916214843" 
                  className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md inline-flex items-center transition-all duration-200 hover:!text-black hover:border-black"
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
                      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" 
                    />
                  </svg>
                  +44 (0) 7916 214 843
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name*
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name*
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                      placeholder="+44 7700 900000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                    >
                      <option value="">Please select a service</option>
                      <option value="rack-installations">Rack & Stack Installations</option>
                      <option value="network-engineering">Network Engineering</option>
                      <option value="wifi-deployment">Wi-Fi Surveys & Deployment</option>
                      <option value="structured-cabling">Structured Cabling</option>
                      <option value="remote-support">Remote Support Services</option>
                      <option value="cctv-integration">CCTV & IP Camera Integration</option>
                      <option value="ubiquiti-cisco-solutions">Ubiquiti & Cisco Solutions</option>
                      <option value="other">Other (Please Specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message*
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent"
                      placeholder="Please describe your requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      name="privacy"
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-dragon-red focus:ring-dragon-red"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-white/70">
                      I agree to the <Link href="/privacy-policy" className="text-dragon-red hover:underline">Privacy Policy</Link> and consent to Pendragon Networks processing my data for the purpose of responding to my enquiry.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white py-3 px-6 rounded-md transition-all duration-200 hover:!text-black hover:border-black"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-white/80">
              Located in Bridgend, we provide services across the whole of South Wales.
            </p>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
            {/* Google Maps embed showing South Wales */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263155!2d-4.051134867291502!3d51.56261215780862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e16ef85926c07%3A0x3d2178356feebd9e!2sSouth%20Wales!5e0!3m2!1sen!2suk!4v1713953463902!5m2!1sen!2suk" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of South Wales"
              aria-label="Google Maps showing South Wales region"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Service Area Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-dark-slate">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Service Areas</h2>
            <p className="text-white/80 text-center mb-10">
              Pendragon Networks provides technical services across South Wales, covering the following areas:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <Link 
                href="/services/network-engineering/cardiff" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Cardiff</h3>
                  <p className="text-white/60 text-sm">CF10, CF11, CF14</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/swansea" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Swansea</h3>
                  <p className="text-white/60 text-sm">SA1, SA2, SA3</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/bridgend" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Bridgend</h3>
                  <p className="text-white/60 text-sm">CF31, CF32, CF33</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/port-talbot" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Port Talbot</h3>
                  <p className="text-white/60 text-sm">SA12, SA13</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/llanelli" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Llanelli</h3>
                  <p className="text-white/60 text-sm">SA14, SA15</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/merthyr" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Merthyr Tydfil</h3>
                  <p className="text-white/60 text-sm">CF47, CF48</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/aberdare" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Aberdare</h3>
                  <p className="text-white/60 text-sm">CF44, CF45</p>
                </div>
              </Link>
              
              <Link 
                href="/services/network-engineering/carmarthen" 
                className="bg-gradient-to-br from-white/10 to-white/5 hover:from-dragon-red/20 hover:to-dragon-red/10 border border-white/10 rounded-lg p-5 text-center transition-all duration-300 hover:border-dragon-red/30 hover:shadow-md hover:shadow-dragon-red/5 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3 group-hover:bg-dragon-red/10">
                    <svg 
                      className="w-6 h-6 text-dragon-red" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-1 text-lg group-hover:text-dragon-red transition-colors">Carmarthen</h3>
                  <p className="text-white/60 text-sm">SA31, SA32</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
