import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pendragon Networks",
  description: "Pendragon Networks Privacy Policy - Learn how we collect, use, and protect your personal information."
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "information-sharing", title: "Information Sharing" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "cookies", title: "Cookies and Similar Technologies" },
    { id: "your-rights", title: "Your Rights" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to This Privacy Policy" },
    { id: "contact-us", title: "Contact Us" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Learn how Pendragon Networks collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-b from-dark-slate to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Floating Navigation Menu - fixed to left */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto bg-white/5 rounded-lg border border-white/10 p-6">
                <h2 className="text-xl font-bold mb-4 text-dragon-red">On This Page</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-2 hover:text-dragon-red transition-colors"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="order-1 lg:order-2 lg:col-span-3 space-y-8">
              {/* Last Updated */}
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <p className="text-white/70">Last Updated: April 23, 2025</p>
              </div>

              {/* Introduction */}
              <div id="introduction" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="mb-4">
                  Pendragon Networks ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pendragonnetworks.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
                </p>
                <p className="mb-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
                <p>
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
                </p>
              </div>

              {/* Information We Collect */}
              <div id="information-collect" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <h3 className="text-xl font-bold mb-2">Personal Data</h3>
                <p className="mb-4">
                  When you visit our website, contact us, or use our services, we may collect certain personally identifiable information, including but not limited to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name and address</li>
                  <li>Job title</li>
                  <li>IP address</li>
                </ul>

                <h3 className="text-xl font-bold mb-2">Derivative Data</h3>
                <p className="mb-4">
                  Our servers automatically collect information when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site. This information is primarily needed to maintain the security and operation of our website, and for our internal analytics and reporting purposes.
                </p>

                <h3 className="text-xl font-bold mb-2">Financial Data</h3>
                <p>
                  We do not store your financial information such as payment card details. All financial transactions are processed through a secure, third-party payment processor.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div id="how-we-use" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We may use the information we collect about you for various purposes, including to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send administrative information, such as updates, security alerts, and support messages</li>
                  <li>Communicate with you about products, services, offers, promotions, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize your experience on our website</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div id="information-sharing" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                  <li><strong>Vital Interests and Legal Rights:</strong> We may disclose information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation.</li>
                </ul>
              </div>

              {/* Data Security */}
              <div id="data-security" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Data Retention */}
              <div id="data-retention" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                <p className="mb-4">
                  We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                </p>
              </div>

              {/* Cookies */}
              <div id="cookies" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Cookies and Similar Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to track activity on our Site and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
                </p>
                <p className="mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                </p>
                <p>
                  We use the following types of cookies:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li><strong>Essential Cookies:</strong> Necessary for the functioning of the website and its features.</li>
                  <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                  <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div id="your-rights" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="mb-4">
                  Depending on where you reside, you may have certain rights regarding your personal information, such as:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request that we correct any inaccurate or incomplete personal information</li>
                  <li>The right to request that we delete your personal information</li>
                  <li>The right to restrict or object to our processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at hello@pendragonnetworks.co.uk.
                </p>
              </div>

              {/* Children's Privacy */}
              <div id="children" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Our Site is not intended for use by children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us. If we discover that a child under 16 has provided us with personal information, we will delete such information from our servers.
                </p>
              </div>

              {/* Changes */}
              <div id="changes" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div id="contact-us" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="space-y-2">
                  <p>Pendragon Networks</p>
                  <p>Unit 8, Bridgend Business Park</p>
                  <p>Bridgend, CF31 3SH</p>
                  <p>South Wales, United Kingdom</p>
                  <p className="mt-4">
                    <a href="mailto:hello@pendragonnetworks.co.uk" className="text-dragon-red hover:underline">
                      hello@pendragonnetworks.co.uk
                    </a>
                  </p>
                  <p>
                    <a href="tel:+447916214843" className="text-dragon-red hover:underline">
                      +44 (0) 7916 214 843
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
