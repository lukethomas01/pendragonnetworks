'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/contact/action';
import Link from 'next/link';

// FormStatus component to display form submission status
function FormStatus({ errors, success, message }: {
  errors?: Record<string, string[]>;
  success?: boolean;
  message?: string;
}) {
  if (!errors && !success && !message) return null;
  
  return (
    <div className={`p-4 mb-6 rounded-md ${success ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
      {success ? (
        <div className="flex items-center">
          <svg 
            className="w-5 h-5 mr-2 text-green-500" 
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
          <span className="text-white">{message}</span>
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-2">
            <svg 
              className="w-5 h-5 mr-2 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-white font-medium">{message}</span>
          </div>
          {errors && Object.entries(errors).map(([field, fieldErrors]) => (
            <ul key={field} className="ml-8 list-disc text-red-300">
              {fieldErrors.map((error, index) => (
                <li key={`${field}-${index}`}>{error}</li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white py-3 px-6 rounded-md transition-all duration-200 hover:!text-black hover:border-black ${pending ? 'opacity-70 cursor-not-allowed' : ''}`}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </div>
      ) : (
        'Send Message'
      )}
    </button>
  );
}

// Form field with validation
function FormField({ 
  id, 
  label, 
  type = 'text', 
  placeholder, 
  required = false,
  errors,
  children
}: { 
  id: string; 
  label: string; 
  type?: string; 
  placeholder?: string; 
  required?: boolean;
  errors?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}{required && <span className="text-dragon-red ml-1">*</span>}
      </label>
      {children || (
        <input 
          type={type} 
          id={id} 
          name={id}
          className={`w-full px-4 py-3 rounded-md bg-white/10 border ${errors ? 'border-red-500/50' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent`}
          placeholder={placeholder}
          required={required}
        />
      )}
      {errors && errors.map((error, index) => (
        <p key={`${id}-error-${index}`} className="mt-1 text-sm text-red-400">{error}</p>
      ))}
    </div>
  );
}

// Initial form state
const initialState = {
  errors: undefined,
  success: false,
  message: undefined,
};

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  
  // If form was successfully submitted, show only success message
  if (state.success) {
    return (
      <div className="bg-white/5 rounded-lg border border-white/10 p-8">
        <div className="text-center py-8">
          <div className="bg-green-500/20 rounded-full p-4 inline-flex mb-4">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-white/80 mb-6">{state.message}</p>
          <p className="text-white/60 mb-4">We aim to respond to all enquiries within 24 hours.</p>
          <Link 
            href="/" 
            className="bg-dragon-red hover:bg-opacity-90 !text-white font-medium border border-white px-6 py-3 rounded-md transition-all duration-200 hover:!text-black hover:border-black inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-8">
      <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
      
      <FormStatus 
        errors={state.errors} 
        success={state.success} 
        message={state.message || (state.errors?._form ? state.errors._form[0] : undefined)} 
      />
      
      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField 
            id="firstName" 
            label="First Name" 
            placeholder="Your first name"
            required={true}
            errors={state.errors?.firstName}
          />
          <FormField 
            id="lastName" 
            label="Last Name" 
            placeholder="Your last name"
            required={true}
            errors={state.errors?.lastName}
          />
        </div>
        
        <FormField 
          id="email" 
          label="Email Address" 
          type="email"
          placeholder="your.email@example.com"
          required={true}
          errors={state.errors?.email}
        />
        
        <FormField 
          id="phone" 
          label="Phone Number" 
          type="tel"
          placeholder="+44 7700 900000"
          errors={state.errors?.phone}
        />
        
        <FormField 
          id="company" 
          label="Company Name" 
          placeholder="Your company"
          errors={state.errors?.company}
        />
        
        <FormField 
          id="service" 
          label="Service of Interest"
          errors={state.errors?.service}
        >
          <select 
            id="service" 
            name="service"
            className={`w-full px-4 py-3 rounded-md bg-white/10 border ${state.errors?.service ? 'border-red-500/50' : 'border-white/20'} text-white focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent`}
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
        </FormField>
        
        <FormField 
          id="message" 
          label="Message" 
          required={true}
          errors={state.errors?.message}
        >
          <textarea 
            id="message" 
            name="message"
            rows={5}
            className={`w-full px-4 py-3 rounded-md bg-white/10 border ${state.errors?.message ? 'border-red-500/50' : 'border-white/20'} text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-dragon-red focus:border-transparent`}
            placeholder="Please describe your requirements..."
            required
          ></textarea>
        </FormField>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input 
              type="checkbox" 
              id="privacy" 
              name="privacy"
              className={`h-4 w-4 rounded border-white/20 bg-white/10 text-dragon-red focus:ring-dragon-red ${state.errors?.privacy ? 'border-red-500' : ''}`}
              required
            />
          </div>
          <div className="ml-3">
            <label htmlFor="privacy" className={`text-sm ${state.errors?.privacy ? 'text-red-400' : 'text-white/70'}`}>
              I agree to the <Link href="/privacy-policy" className="text-dragon-red hover:underline">Privacy Policy</Link> and consent to Pendragon Networks processing my data for the purpose of responding to my enquiry.
            </label>
            {state.errors?.privacy && (
              <p className="mt-1 text-sm text-red-400">{state.errors.privacy[0]}</p>
            )}
          </div>
        </div>
        
        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
