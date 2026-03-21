import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Politica de Privacidad | Carbono14',
  description:
    'Politica de privacidad de Carbono14. Como recopilamos, usamos y protegemos tu informacion personal.',
  alternates: {
    canonical: 'https://carbono-14.net/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <article className={styles.content}>
          <h1 className={styles.title}>Politica de Privacidad</h1>
          <p className={styles.updated}>Ultima actualizacion: marzo 2026</p>

          <section>
            <h2>1. Introduccion</h2>
            <p>
              Carbono14 (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;la
              Empresa&rdquo;), con domicilio en Buenos Aires, Argentina, se compromete a
              proteger la privacidad de quienes visitan nuestro sitio web carbono-14.net
              (&ldquo;el Sitio&rdquo;) y utilizan nuestros servicios de consultoria e
              implementacion de inteligencia artificial operativa (&ldquo;los
              Servicios&rdquo;).
            </p>
            <p>
              Esta Politica de Privacidad describe que informacion recopilamos, como la
              usamos, con quien la compartimos y que derechos tenes como titular de los
              datos.
            </p>
          </section>

          <section>
            <h2>2. Informacion que recopilamos</h2>
            <h3>2.1 Informacion que nos proporcionas directamente</h3>
            <ul>
              <li>
                <strong>Datos de contacto:</strong> correo electronico, empresa y
                descripcion de proceso (cuando completas el formulario de contacto o
                solicitas una validacion de proceso).
              </li>
              <li>
                <strong>Informacion del proyecto:</strong> descripcion de procesos,
                requerimientos tecnicos y otra informacion que compartas durante la
                validacion o auditoria.
              </li>
              <li>
                <strong>Comunicaciones:</strong> contenido de correos electronicos,
                mensajes o cualquier comunicacion que mantengas con nosotros.
              </li>
            </ul>
            <h3>2.2 Informacion que recopilamos automaticamente</h3>
            <ul>
              <li>
                <strong>Datos de navegacion:</strong> direccion IP, tipo de navegador,
                sistema operativo, paginas visitadas, fecha y hora de acceso, URL de
                referencia.
              </li>
              <li>
                <strong>Cookies y tecnologias similares:</strong> utilizamos cookies
                tecnicas necesarias para el funcionamiento del Sitio. Ver seccion 7.
              </li>
            </ul>
            <h3>2.3 Informacion de terceros</h3>
            <p>
              No compramos ni obtenemos datos personales de terceros. Si nos contactas a
              traves de LinkedIn u otra plataforma, solo procesamos la informacion que nos
              proporcionas directamente.
            </p>
          </section>

          <section>
            <h2>3. Como usamos tu informacion</h2>
            <p>Utilizamos la informacion recopilada para:</p>
            <ul>
              <li>
                <strong>Responder a tu consulta</strong> y proporcionarte la validacion de
                proceso solicitada.
              </li>
              <li>
                <strong>Elaborar propuestas comerciales</strong> de auditoria tecnica o
                implementacion, si lo solicitas.
              </li>
              <li>
                <strong>Mejorar nuestros servicios</strong> mediante analisis agregado y
                anonimo del uso del Sitio.
              </li>
              <li>
                <strong>Enviarte comunicaciones</strong> relacionadas con tu consulta o,
                con tu consentimiento, contenido educativo sobre IA operativa.
              </li>
              <li>
                <strong>Cumplir obligaciones legales</strong> cuando la ley argentina lo
                requiera.
              </li>
            </ul>
            <p>
              No utilizamos tus datos para tomar decisiones automatizadas que te afecten.
            </p>
          </section>

          <section>
            <h2>4. Con quien compartimos tu informacion</h2>
            <p>
              <strong>No vendemos tus datos personales.</strong> Podemos compartir
              informacion en los siguientes casos:
            </p>
            <ul>
              <li>
                <strong>Proveedores de infraestructura:</strong> utilizamos servicios de
                hosting y procesamiento (Vercel, Convex) que pueden acceder a datos
                tecnicos como parte de la operacion del Sitio.
              </li>
              <li>
                <strong>Obligaciones legales:</strong> cuando sea requerido por ley, orden
                judicial o autoridad regulatoria argentina.
              </li>
              <li>
                <strong>Proteccion de derechos:</strong> cuando sea necesario para
                proteger nuestros derechos legales o la seguridad de nuestros usuarios.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Retencion de datos</h2>
            <ul>
              <li>
                <strong>Datos de contacto y proyecto:</strong> los conservamos mientras
                exista una relacion comercial activa o potencial, y hasta 2 anos despues
                del ultimo contacto.
              </li>
              <li>
                <strong>Datos de navegacion:</strong> se retienen por un maximo de 12
                meses.
              </li>
              <li>
                <strong>Comunicaciones:</strong> se conservan mientras sean relevantes para
                la prestacion de servicios.
              </li>
            </ul>
            <p>
              Podes solicitar la eliminacion de tus datos en cualquier momento (ver
              seccion 8).
            </p>
          </section>

          <section>
            <h2>6. Seguridad</h2>
            <p>
              Implementamos medidas de seguridad tecnicas y organizativas razonables para
              proteger tu informacion personal, incluyendo:
            </p>
            <ul>
              <li>Transmision cifrada (HTTPS/TLS) en todo el Sitio.</li>
              <li>Acceso restringido a datos personales dentro del equipo.</li>
              <li>
                Proveedores de infraestructura con certificaciones de seguridad estandar
                de la industria.
              </li>
            </ul>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>El Sitio utiliza:</p>
            <ul>
              <li>
                <strong>Cookies tecnicas:</strong> funcionamiento del Sitio, sesion de
                usuario (duracion: sesion).
              </li>
              <li>
                <strong>Cookies de analisis:</strong> metricas agregadas de uso (duracion:
                12 meses).
              </li>
            </ul>
            <p>
              No utilizamos cookies de publicidad ni de seguimiento de terceros. Podes
              configurar tu navegador para rechazar cookies, aunque esto podria afectar el
              funcionamiento del Sitio.
            </p>
          </section>

          <section>
            <h2>8. Tus derechos</h2>
            <p>
              De acuerdo con la Ley 25.326 de Proteccion de Datos Personales de Argentina,
              tenes derecho a:
            </p>
            <ul>
              <li>
                <strong>Acceder</strong> a los datos personales que tenemos sobre vos.
              </li>
              <li>
                <strong>Rectificar</strong> datos inexactos o incompletos.
              </li>
              <li>
                <strong>Suprimir</strong> tus datos personales.
              </li>
              <li>
                <strong>Oponerte</strong> al procesamiento de tus datos para fines
                especificos.
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, contactanos a:{' '}
              <a href="mailto:contacto@carbono-14.net">contacto@carbono-14.net</a>
            </p>
            <p>Responderemos dentro de los 10 dias habiles establecidos por la ley.</p>
            <p>
              La Direccion Nacional de Proteccion de Datos Personales (DNPDP), Organo de
              Control de la Ley N 25.326, tiene la atribucion de atender las denuncias y
              reclamos que se interpongan con relacion al incumplimiento de las normas
              sobre proteccion de datos personales.
            </p>
          </section>

          <section>
            <h2>9. Transferencias internacionales</h2>
            <p>
              Algunos de nuestros proveedores de infraestructura operan fuera de Argentina.
              Al utilizar el Sitio, consentis la transferencia de datos a jurisdicciones
              que pueden tener niveles de proteccion de datos diferentes al de Argentina.
            </p>
          </section>

          <section>
            <h2>10. Menores</h2>
            <p>
              Nuestros servicios estan dirigidos a empresas y profesionales. No recopilamos
              intencionalmente datos de menores de 18 anos.
            </p>
          </section>

          <section>
            <h2>11. Cambios a esta politica</h2>
            <p>
              Podemos actualizar esta Politica de Privacidad periodicamente. La fecha de
              &ldquo;ultima actualizacion&rdquo; al inicio del documento reflejara la
              version vigente.
            </p>
          </section>

          <section>
            <h2>12. Contacto</h2>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:contacto@carbono-14.net">contacto@carbono-14.net</a>
              </li>
              <li>
                <strong>Sitio web:</strong>{' '}
                <a href="https://carbono-14.net">https://carbono-14.net</a>
              </li>
              <li>
                <strong>Ubicacion:</strong> Buenos Aires, Argentina
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
