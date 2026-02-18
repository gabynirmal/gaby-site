import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Send email to me
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // replace with verified domain later
      to: process.env.CONTACT_EMAIL || "nirmal.g@northeastern.edu",
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>Website Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email", details: String(error) },
      { status: 500 },
    );
  }
}
