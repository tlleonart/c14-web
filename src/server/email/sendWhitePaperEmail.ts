import { n1Html } from './templates/nurturing-white-paper'

interface WhitePaperEmailData {
  fullName: string
  email: string
}

export async function sendWhitePaperEmail(data: WhitePaperEmailData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  const whitePaperUrl =
    process.env.NEXT_PUBLIC_WHITE_PAPER_URL ??
    'https://carbono-14.net/downloads/carbono14-whitepaper-ia-gen-vs-op-v1.pdf'

  if (!resendApiKey) {
    console.warn('Email not configured: RESEND_API_KEY missing')
    return false
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Carbono14 <contacto@carbono-14.net>',
        to: [data.email],
        subject: 'Tu White Paper llegó. Esto es lo que vas a encontrar adentro.',
        html: n1Html(whitePaperUrl),
        reply_to: 'contacto@carbono-14.net',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error (white paper delivery):', errorData)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending white paper email:', error)
    return false
  }
}
