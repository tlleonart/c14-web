interface ContactEmailData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  service?: string
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!resendApiKey || !contactEmail) {
    console.warn('Email not configured: RESEND_API_KEY or CONTACT_EMAIL missing')
    return false
  }

  const serviceLabels: Record<string, string> = {
    automation: 'Automatización con IA',
    'ai-development': 'Desarrollo de IA',
    'web-development': 'Desarrollo Web',
    'software-development': 'Desarrollo de Software',
  }

  const serviceLabel = data.service ? serviceLabels[data.service] || data.service : 'No especificado'

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        // Use Resend's test sender until a custom domain is verified
        from: 'Carbono14 <onboarding@resend.dev>',
        to: contactEmail,
        subject: `Nuevo contacto: ${data.name}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
          <p><strong>Servicio de interés:</strong> ${serviceLabel}</p>
          <h3>Mensaje:</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: data.email,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return false
    }

    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
