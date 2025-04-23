import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pendragon Networks",
  description: "Pendragon Networks Terms of Service - Read our terms and conditions for using our services and website."
};

export default function TermsOfService() {
  const sections = [
    { id: "agreement", title: "Agreement to Terms" },
    { id: "intellectual-property", title: "Intellectual Property Rights" },
    { id: "user-representations", title: "User Representations" },
    { id: "products", title: "Products and Services" },
    { id: "purchases", title: "Purchases and Payment" },
    { id: "refunds", title: "Cancellation and Refunds" },
    { id: "prohibited", title: "Prohibited Activities" },
    { id: "user-content", title: "User Generated Content" },
    { id: "privacy", title: "Privacy Policy" },
    { id: "term", title: "Term and Termination" },
    { id: "modifications", title: "Modifications to Terms" },
    { id: "governing-law", title: "Governing Law" },
    { id: "dispute", title: "Dispute Resolution" },
    { id: "corrections", title: "Corrections" },
    { id: "disclaimer", title: "Disclaimer" },
    { id: "limitations", title: "Limitations of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "contact", title: "Contact Us" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-slate py-16 md:py-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 mb-8">
              The terms and conditions governing your use of Pendragon Networks services.
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

              {/* Agreement to Terms */}
              <div id="agreement" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Pendragon Networks ("we," "us," or "our"), concerning your access to and use of the pendragonnetworks.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p className="mb-4">
                  You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                </p>
                <p>
                  Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
                </p>
              </div>

              {/* Intellectual Property Rights */}
              <div id="intellectual-property" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                <p className="mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.
                </p>
                <p className="mb-4">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
                <p>
                  Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
                </p>
              </div>

              {/* User Representations */}
              <div id="user-representations" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">User Representations</h2>
                <p className="mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>All registration information you submit will be true, accurate, current, and complete;</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service;</li>
                  <li>You are not a minor in the jurisdiction in which you reside;</li>
                  <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;</li>
                  <li>You will not use the Site for any illegal or unauthorized purpose;</li>
                  <li>Your use of the Site will not violate any applicable law or regulation.</li>
                </ul>
                <p>
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
                </p>
              </div>

              {/* Products and Services */}
              <div id="products" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Products and Services</h2>
                <p className="mb-4">
                  We make every effort to display as accurately as possible the description, specifications, and images of the products and services available on our Site. However, we do not guarantee that the description, specifications, and images are accurate, complete, reliable, current, or error-free. In the event of an error, whether on our Site, in an order confirmation, in processing an order, delivering a product or service or otherwise, we reserve the right to correct such error and revise your order accordingly or to cancel the order and refund any amount charged.
                </p>
                <p>
                  All features, content, specifications, products and prices of products and services described or depicted on the Site are subject to change at any time without notice. We reserve the right to revise or discontinue any product at any time. We shall not be liable to you or to any third party for any modification, suspension or discontinuance of any product or service.
                </p>
              </div>

              {/* Purchases and Payment */}
              <div id="purchases" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Purchases and Payment</h2>
                <p className="mb-4">
                  We accept various payment methods for our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                </p>
                <p className="mb-4">
                  You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes that we may make even if we have already requested or received payment.
                </p>
                <p>
                  All payments must be made in GBP (British Pounds). Prices are subject to change at any time. Payment terms are on a project basis and will be agreed in writing before commencement of any work.
                </p>
              </div>

              {/* Cancellation and Refunds */}
              <div id="refunds" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Cancellation and Refunds</h2>
                <p className="mb-4">
                  All cancellations must be made in writing. Cancellation policies depend on the specific service contracted and will be detailed in your service agreement. For immediate termination of recurring services, please contact us directly at hello@pendragonnetworks.co.uk.
                </p>
                <p className="mb-4">
                  Refunds are processed on a case-by-case basis. Refund eligibility depends on the nature of the services contracted, the extent of services already rendered, and the specific circumstances of the cancellation. Some services may be non-refundable once initiated, particularly custom work that has already been delivered.
                </p>
                <p>
                  For service-related disputes, we recommend contacting us directly to resolve any issues before requesting a refund.
                </p>
              </div>

              {/* Prohibited Activities */}
              <div id="prohibited" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
                <p className="mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <p className="mb-4">
                  As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us;</li>
                  <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email;</li>
                  <li>Use the Site to advertise or offer to sell goods and services;</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site;</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information;</li>
                  <li>Attempt to impersonate another user or person or use the username of another user;</li>
                  <li>Use any information obtained from the Site in order to harass, abuse, or harm another person;</li>
                  <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise;</li>
                  <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site;</li>
                  <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you;</li>
                  <li>Delete the copyright or other proprietary rights notice from any Content;</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming, that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                </ul>
              </div>

              {/* User Generated Content */}
              <div id="user-content" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">User Generated Content</h2>
                <p className="mb-4">
                  The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
                </p>
                <p className="mb-4">
                  Any Contributions you transmit to us will be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party;</li>
                  <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Service;</li>
                  <li>Your Contributions are not false, inaccurate, or misleading;</li>
                  <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation;</li>
                  <li>Your Contributions do not depict or contain any harmful, threatening, offensive, harassing, racial, ethnic, religious, sexually explicit, defamatory, infringing, invasive of privacy, or otherwise unlawful content.</li>
                </ul>
              </div>

              {/* Privacy Policy */}
              <div id="privacy" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="mb-4">
                  We care about data privacy and security. Please review our Privacy Policy at <Link href="/privacy-policy" className="text-dragon-red hover:underline">https://pendragonnetworks.com/privacy-policy</Link>. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Service.
                </p>
              </div>

              {/* Term and Termination */}
              <div id="term" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Term and Termination</h2>
                <p className="mb-4">
                  These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
                </p>
                <p>
                  If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
                </p>
              </div>

              {/* Modifications to Terms */}
              <div id="modifications" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
                <p className="mb-4">
                  We reserve the right, in our sole discretion, to change, modify, add, or remove portions of these Terms of Service at any time by posting the amended Terms of Service on the Site. It is your responsibility to check these Terms of Service periodically for changes. Your continued use of the Site following the posting of revised Terms of Service means that you accept and agree to the changes.
                </p>
              </div>

              {/* Governing Law */}
              <div id="governing-law" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and defined following the laws of the United Kingdom. Pendragon Networks and yourself irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div id="dispute" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
                <p className="mb-4">
                  To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Service (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                </p>
                <p>
                  If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute shall be finally and exclusively resolved by binding arbitration. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA") and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes ("AAA Consumer Rules").
                </p>
              </div>

              {/* Corrections */}
              <div id="corrections" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Corrections</h2>
                <p className="mb-4">
                  There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                </p>
              </div>

              {/* Disclaimer */}
              <div id="disclaimer" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                <p className="mb-4">
                  THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN.
                </p>
                <p>
                  WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                </p>
              </div>

              {/* Limitations of Liability */}
              <div id="limitations" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
                <p className="mb-4">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p>
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                </p>
              </div>

              {/* Indemnification */}
              <div id="indemnification" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Service; (4) any breach of your representations and warranties set forth in these Terms of Service; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site.
                </p>
                <p>
                  Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
                </p>
              </div>

              {/* Contact Us */}
              <div id="contact" className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
