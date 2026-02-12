import { NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactRequestBody = await request.json()

    // Basic validation
    if (!name || !message) {
      return NextResponse.json(
        { message: 'Name and message are required' },
        { status: 400 }
      )
    }

    try {
      await emailjs.send(
        'service_nkc5tco',
        'template_8bhh6fj',
        { name, email, message },
        { publicKey: '_526SZEotjmMHkLDa' }
      )
    } catch (error) {
      console.error('EmailJS send error:', error)
      return NextResponse.json(
        { message: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
