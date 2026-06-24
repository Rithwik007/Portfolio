import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@portfolio/content';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate request body using contact Zod schema
    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Log the contact message to server stdout/logs
    console.log(`[CONTACT FORM SUBMISSION]`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`-----------------------------------`);

    // In a real-world scenario, you would integrate a mail service like Resend, SendGrid, etc.
    // For now, we simulate success response.
    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Your message was received successfully.',
    });
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: error?.message || 'Server error occurred' },
      { status: 500 }
    );
  }
}
