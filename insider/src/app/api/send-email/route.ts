import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, mobileNumber, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !mobileNumber || !email || !message) {
      return NextResponse.json(
        { error: 'First name, last name, mobile number, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');

    if (!smtpUser || !smtpPassword) {
      console.error('Missing SMTP configuration:', {
        hasUser: !!smtpUser,
        hasPassword: !!smtpPassword,
      });
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter
    // Note: You'll need to configure these environment variables
    // For Gmail, you'll need an App Password
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      // Add timeout and connection options
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: `Email service configuration error: ${verifyError.message || 'Unable to connect to email server'}` },
        { status: 500 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitize = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    };

    // Email content
    const fullName = `${sanitize(firstName)} ${sanitize(lastName)}`;
    const mailOptions = {
      from: `"Latrix Contact Form" <${smtpUser}>`,
      to: 'anithapalaniyappan2@gmail.com',
      subject: `Contact Form Message from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #393D75; border-bottom: 2px solid #B871E1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>First Name:</strong> ${sanitize(firstName)}</p>
            <p><strong>Last Name:</strong> ${sanitize(lastName)}</p>
            <p><strong>Mobile Number:</strong> ${sanitize(mobileNumber)}</p>
            <p><strong>Email:</strong> ${sanitize(email)}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #B871E1;">
              ${sanitize(message).replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Latrix Insider contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check SMTP credentials.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Unable to connect to email server. Please try again later.';
    } else if (error.response) {
      errorMessage = `Email server error: ${error.response}`;
    } else if (error.message) {
      // Log the actual error but don't expose sensitive details to client
      console.error('Detailed error:', error.message);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

