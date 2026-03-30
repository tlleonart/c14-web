interface LeadNotificationData {
  fullName: string
  email: string
  company: string
  role?: string
  industry?: string
  processDescription?: string
  source: 'LP-001' | 'LP-002' | 'LP-003'
}

const SOURCE_LABELS: Record<string, string> = {
  'LP-001': 'IA Operativa (/ia-operativa)',
  'LP-002': 'White Paper (/white-paper)',
  'LP-003': 'Auditoría (/auditoria)',
}

export async function sendLeadNotificationEmail(data: LeadNotificationData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmails = process.env.CONTACT_EMAILS

  if (!resendApiKey || !contactEmails) {
    console.warn('Email not configured: RESEND_API_KEY or CONTACT_EMAILS missing')
    return false
  }

  const recipients = contactEmails.split(',').map((email) => email.trim())
  const sourceLabel = SOURCE_LABELS[data.source] ?? data.source

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Carbono14 <contacto@carbono-14.net>',
        to: recipients,
        subject: `Nuevo lead: ${data.fullName} — ${data.company} (${sourceLabel})`,
        html: `
          <h2>Nuevo lead de campaña</h2>
          <p><strong>Fuente:</strong> ${sourceLabel}</p>
          <hr>
          <p><strong>Nombre:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Empresa:</strong> ${data.company}</p>
          ${data.role ? `<p><strong>Rol:</strong> ${data.role}</p>` : ''}
          ${data.industry ? `<p><strong>Industria:</strong> ${data.industry}</p>` : ''}
          ${data.processDescription ? `<h3>Descripción del proceso:</h3><p>${data.processDescription.replace(/\n/g, '<br>')}</p>` : ''}
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
    console.error('Error sending lead notification email:', error)
    return false
  }
}
