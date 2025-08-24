import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, service } = body

    // TODO: Integrate with Google Sheets API
    // For now, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      service,
      timestamp: new Date().toISOString()
    })

    // TODO: Send to Google Sheets
    // const response = await fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     company,
    //     phone,
    //     message,
    //     service,
    //     timestamp: new Date().toISOString()
    //   })
    // })

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'Error processing form submission' },
      { status: 500 }
    )
  }
}