'use server';

import { z } from 'zod';

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactMessage(values: z.infer<typeof contactFormSchema>) {
  try {
    const validatedData = contactFormSchema.parse(values);
    // In a real application, you would send an email or save to a database here.
    console.log('Received contact message:', validatedData);
    
    // Simulate a successful API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Error sending contact message:', error);
    return { success: false, error: 'Failed to send message.' };
  }
}
