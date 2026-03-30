export interface BaseEmailOptions {
  previewText?: string
  body: string
}

const LOGO_URL = 'https://carbono-14.net/images/logo-email.png'

export function buildEmailHtml({ previewText = '', body }: BaseEmailOptions): string {
  const preview = previewText
    ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${previewText}&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;&nbsp;&#847;&zwsp;</div>`
    : ''

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>Carbono14</title>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;min-width:100%;background-color:#fafaf8;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  ${preview}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fafaf8;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header con logo -->
          <tr>
            <td style="padding:24px 40px;border-bottom:2px solid #d44030;">
              <a href="https://carbono-14.net" style="display:inline-block;text-decoration:none;">
                <img src="${LOGO_URL}" width="120" height="auto" alt="Carbono14" style="display:block;border:0;height:auto;max-height:32px;width:auto;" />
              </a>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              ${body}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #eaeaea;background-color:#fafaf8;">
              <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#868690;line-height:1.5;">Carbono14 &mdash; IA Operativa para Empresas &mdash; <a href="https://carbono-14.net" style="color:#868690;text-decoration:none;">carbono-14.net</a></p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#b0b0ba;"><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#b0b0ba;text-decoration:underline;">Darse de baja</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export const p = (text: string) =>
  `<p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#1c1c1e;line-height:1.7;">${text}</p>`

export const h3 = (text: string) =>
  `<h3 style="margin:0 0 12px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;color:#1c1c1e;line-height:1.4;">${text}</h3>`

export const ctaLink = (href: string, label: string) =>
  `<p style="margin:0 0 28px 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;"><strong><a href="${href}" style="color:#d44030;text-decoration:none;">&rarr; ${label}</a></strong></p>`

export const divider =
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;"><tr><td style="border-top:1px solid #eaeaea;height:1px;padding:0;"></td></tr></table>`

export const signature =
  `<p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#1c1c1e;line-height:1.7;"><strong>Carbono14</strong><br><a href="https://carbono-14.net" style="color:#555558;text-decoration:none;">carbono-14.net</a></p>`
