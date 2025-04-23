'use server';

import { z } from 'zod';
import { sendContactEmails } from '@/lib/email';
import { getServiceById } from '@/lib/data';

// Define form validation schema
const ContactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Please provide a message with at least 10 characters'),
  privacy: z.literal('on', {
    invalid_type_error: 'You must accept the privacy policy',
  }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;
type ContactFormState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    company?: string[];
    service?: string[];
    message?: string[];
    privacy?: string[];
    _form?: string[];
  };
  success?: boolean;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const rawFormData = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    company: formData.get('company') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
    privacy: formData.get('privacy') as string,
  };

  // Validate form data
  const validationResult = ContactFormSchema.safeParse(rawFormData);

  // If validation fails, return errors
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      errors,
      success: false,
      message: 'Please fix the form errors and try again.'
    };
  }

  // Form is valid at this point
  const validatedData = validationResult.data;

  try {
    // Get the full service name if a service was selected
    let serviceName = undefined;
    if (validatedData.service && validatedData.service !== 'other') {
      const serviceData = getServiceById(validatedData.service);
      serviceName = serviceData?.title;
    }

    // Send emails
    const result = await sendContactEmails(
      `${validatedData.firstName} ${validatedData.lastName}`,
      validatedData.email,
      validatedData.phone,
      validatedData.message,
      serviceName,
    );

    if (!result.success) {
      console.error('Failed to send emails:', result.error);
      return {
        errors: {
          _form: ['Failed to send your message. Please try again later or contact us directly via email or phone.']
        },
        success: false,
        message: 'There was an error sending your message.'
      };
    }

    // Success!
    return {
      success: true,
      message: 'Thank you for your message. We will be in touch soon!'
    };
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return {
      errors: {
        _form: ['An unexpected error occurred. Please try again later or contact us directly.']
      },
      success: false,
      message: 'An unexpected error occurred.'
    };
  }
}
