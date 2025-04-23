import { Resend } from 'resend';

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY || 're_JfAVDCQi_NDzKZX9C7i6jYBoC6bAwiqb3';
export const resend = new Resend(resendApiKey);

// Company information
export const companyInfo = {
  name: 'Pendragon Networks',
  email: 'hello@pendragonnetworks.com',
  phone: '+44 (0) 7916 214 843',
  address: 'Unit 8, Bridgend Business Park, Bridgend, CF31 3SH',
  website: 'https://pendragonnetworks.com',
  logo: 'https://pendragonnetworks.com/pendragon-dragon-network-icon-shield-logo.png'
};

// Email sender configuration - using Resend's default domain since the custom domain needs verification
export const emailSender = {
  // Use a Resend-provided email address until your domain is verified in Resend dashboard
  // Format: "Your Name <onboarding@resend.dev>" or "Your Name <yourteam@resend.dev>"
  from: `${companyInfo.name} <onboarding@resend.dev>`,
  replyTo: companyInfo.email
};

// Email template for customer confirmation
export function generateCustomerEmail(customerName: string, service?: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Pendragon Networks</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-top: 4px solid #e60000;
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #eeeeee;
        }
        .logo {
          max-height: 60px;
          margin-bottom: 10px;
        }
        .content {
          padding: 20px 0;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777777;
          border-top: 1px solid #eeeeee;
          padding-top: 20px;
        }
        h1 {
          color: #1a1a1a;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 15px;
        }
        .button {
          display: inline-block;
          background-color: #e60000;
          color: #ffffff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 10px;
        }
        .contact-info {
          background-color: #f8f8f8;
          padding: 15px;
          border-radius: 4px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${companyInfo.logo}" alt="${companyInfo.name}" class="logo">
          <h1>Thank You for Contacting Pendragon Networks</h1>
        </div>
        
        <div class="content">
          <p>Dear ${customerName},</p>
          
          <p>Thank you for reaching out to Pendragon Networks. We have received your enquiry${service ? ` regarding our ${service} services` : ''}.</p>
          
          <p>One of our technical specialists will review your request and get back to you within 1 business day. We pride ourselves on providing expert technical solutions tailored to your specific needs.</p>
          
          <p>If your matter is urgent, please don't hesitate to call us directly at ${companyInfo.phone}.</p>
          
          <div class="contact-info">
            <strong>Our Contact Information:</strong><br>
            Email: ${companyInfo.email}<br>
            Phone: ${companyInfo.phone}<br>
            Address: ${companyInfo.address}
          </div>
        </div>
        
        <div class="footer">
          <p>&copy; 2025 ${companyInfo.name}. All rights reserved.</p>
          <p><a href="${companyInfo.website}">Visit our website</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Email template for business notification
export function generateBusinessEmail(
  customerName: string,
  customerEmail: string,
  customerPhone: string | undefined,
  message: string,
  service?: string,
  location?: string
) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-top: 4px solid #e60000;
        }
        .header {
          padding-bottom: 20px;
          border-bottom: 1px solid #eeeeee;
        }
        .logo {
          max-height: 50px;
          margin-bottom: 10px;
        }
        .content {
          padding: 20px 0;
        }
        .footer {
          font-size: 12px;
          color: #777777;
          border-top: 1px solid #eeeeee;
          padding-top: 20px;
        }
        h1 {
          color: #1a1a1a;
          font-size: 22px;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 15px;
        }
        .customer-details {
          background-color: #f8f8f8;
          padding: 15px;
          border-radius: 4px;
          margin: 20px 0;
        }
        .message-box {
          background-color: #f8f8f8;
          padding: 15px;
          border-radius: 4px;
          margin-top: 20px;
          white-space: pre-wrap;
        }
        .highlight {
          color: #e60000;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${companyInfo.logo}" alt="${companyInfo.name}" class="logo">
          <h1>New Enquiry from Website</h1>
        </div>
        
        <div class="content">
          <p>A new enquiry has been submitted through the website contact form.</p>
          
          <div class="customer-details">
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
            ${customerPhone ? `<p><strong>Phone:</strong> ${customerPhone}</p>` : ''}
            ${service ? `<p><strong>Service:</strong> <span class="highlight">${service}</span></p>` : ''}
            ${location ? `<p><strong>Location:</strong> <span class="highlight">${location}</span></p>` : ''}
            <p><strong>Submission Date:</strong> ${new Date().toLocaleString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <p><strong>Customer Message:</strong></p>
          <div class="message-box">
            ${message}
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the contact form on ${companyInfo.website}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Function to send emails
export async function sendContactEmails(
  customerName: string,
  customerEmail: string,
  customerPhone: string | undefined,
  message: string,
  service?: string,
  location?: string
) {
  try {
    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: emailSender.from,
      replyTo: emailSender.replyTo,
      to: [customerEmail],
      subject: 'Thank You for Contacting Pendragon Networks',
      html: generateCustomerEmail(customerName, service),
    });

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: emailSender.from,
      replyTo: emailSender.replyTo,
      to: [companyInfo.email],
      subject: `New Website Enquiry: ${service || 'General Enquiry'}`,
      html: generateBusinessEmail(customerName, customerEmail, customerPhone, message, service, location),
    });

    return {
      success: true,
      customerEmailResponse,
      businessEmailResponse,
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return {
      success: false,
      error,
    };
  }
}
