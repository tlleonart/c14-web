import type { Metadata } from 'next'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terminos y Condiciones de Uso | Carbono14',
  description:
    'Terminos y condiciones de uso del sitio web carbono-14.net y los servicios de Carbono14.',
  alternates: {
    canonical: 'https://carbono-14.net/terms-of-use',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfUsePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <article className={styles.content}>
          <h1 className={styles.title}>Terminos y Condiciones de Uso</h1>
          <p className={styles.updated}>Ultima actualizacion: marzo 2026</p>

          <section>
            <h2>1. Aceptacion de los terminos</h2>
            <p>
              Al acceder y utilizar el sitio web carbono-14.net (&ldquo;el Sitio&rdquo;) y
              los servicios ofrecidos por Carbono14 (&ldquo;la Empresa&rdquo;,
              &ldquo;nosotros&rdquo;), aceptas estos Terminos y Condiciones de Uso
              (&ldquo;Terminos&rdquo;). Si no estas de acuerdo, por favor no utilices el
              Sitio.
            </p>
          </section>

          <section>
            <h2>2. Descripcion del servicio</h2>
            <p>
              Carbono14 ofrece servicios de consultoria e implementacion de inteligencia
              artificial operativa para empresas, que incluyen:
            </p>
            <ul>
              <li>
                <strong>Validacion de proceso</strong> (gratuita): Evaluacion rapida de
                factibilidad de automatizacion con IA, con respuesta en menos de 48 horas
                habiles.
              </li>
              <li>
                <strong>Auditoria tecnica</strong> (paga): Analisis completo con
                factibilidad detallada, arquitectura propuesta y estimacion de esfuerzo.
              </li>
              <li>
                <strong>Implementacion:</strong> Diseno, desarrollo y despliegue de agentes
                de IA operativa.
              </li>
              <li>
                <strong>Operacion y soporte:</strong> Mantenimiento y evolucion de
                soluciones implementadas.
              </li>
            </ul>
            <p>
              Los terminos especificos de cada servicio contratado se definiran en
              propuestas comerciales o contratos individuales que prevaleceran sobre estos
              Terminos en caso de conflicto.
            </p>
          </section>

          <section>
            <h2>3. Validacion de proceso gratuita</h2>
            <p>La validacion de proceso gratuita:</p>
            <ul>
              <li>
                Es una evaluacion preliminar y orientativa, no un entregable formal.
              </li>
              <li>
                Incluye una respuesta sobre factibilidad y proximos pasos recomendados.
              </li>
              <li>
                <strong>No incluye</strong> arquitectura propuesta, estimacion de esfuerzo
                detallada ni documento tecnico formal — estos son parte de la auditoria
                tecnica paga.
              </li>
              <li>
                Tiene un plazo indicativo de 48 horas habiles, sujeto a disponibilidad.
              </li>
              <li>
                No genera obligacion contractual para ninguna de las partes.
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Propiedad intelectual</h2>
            <h3>4.1 Contenido del Sitio</h3>
            <p>
              Todo el contenido del Sitio (textos, disenos, logos, codigo, imagenes) es
              propiedad de Carbono14 o se usa con autorizacion. No esta permitido copiar,
              reproducir, distribuir o crear obras derivadas sin autorizacion escrita.
            </p>
            <h3>4.2 Contenido del cliente</h3>
            <p>
              La informacion que nos proporcionas sobre tus procesos y operaciones sigue
              siendo de tu propiedad. Al compartirla con nosotros para una validacion o
              auditoria, nos otorgas una licencia limitada para usarla exclusivamente con
              el fin de prestarte el servicio solicitado.
            </p>
            <h3>4.3 Entregables</h3>
            <p>
              La propiedad intelectual de los entregables de proyectos contratados se
              definira en el contrato especifico de cada proyecto. Por defecto, el cliente
              recibe una licencia de uso sobre los entregables una vez completado el pago.
            </p>
          </section>

          <section>
            <h2>5. Confidencialidad</h2>
            <p>
              Tratamos toda la informacion que nos compartis sobre tus procesos, operaciones
              y sistemas como confidencial. No divulgaremos esta informacion a terceros sin
              tu consentimiento, excepto:
            </p>
            <ul>
              <li>Cuando sea requerido por ley u orden judicial.</li>
              <li>
                A proveedores que participen directamente en la prestacion del servicio,
                bajo obligacion de confidencialidad.
              </li>
            </ul>
            <p>
              Para proyectos de implementacion, se recomienda firmar un Acuerdo de
              Confidencialidad (NDA) especifico.
            </p>
          </section>

          <section>
            <h2>6. Limitacion de responsabilidad</h2>
            <ul>
              <li>
                La informacion en el Sitio es de caracter general e informativo. No
                constituye asesoramiento tecnico, legal ni financiero.
              </li>
              <li>
                Las validaciones de proceso gratuitas son orientativas y no garantizan
                resultados especificos.
              </li>
              <li>
                Carbono14 no sera responsable por danos indirectos, incidentales o
                consecuentes derivados del uso del Sitio o de la informacion proporcionada
                en validaciones gratuitas.
              </li>
              <li>
                La responsabilidad de Carbono14 en servicios pagos se limitara al monto
                efectivamente abonado por el cliente, salvo disposicion contractual
                especifica.
              </li>
              <li>
                No garantizamos que el Sitio estara disponible de forma ininterrumpida ni
                libre de errores.
              </li>
            </ul>
          </section>

          <section>
            <h2>7. Uso aceptable</h2>
            <p>Al utilizar el Sitio, te comprometis a:</p>
            <ul>
              <li>No usar el Sitio para fines ilegales o no autorizados.</li>
              <li>
                No intentar acceder a areas restringidas del Sitio o sus sistemas.
              </li>
              <li>No transmitir virus, malware o codigo malicioso.</li>
              <li>
                No recopilar datos de otros usuarios sin su consentimiento.
              </li>
              <li>Proporcionar informacion veraz en los formularios de contacto.</li>
            </ul>
          </section>

          <section>
            <h2>8. Enlaces a terceros</h2>
            <p>
              El Sitio puede contener enlaces a sitios web de terceros (LinkedIn, GitHub,
              etc.). No somos responsables del contenido, politicas de privacidad ni
              practicas de estos sitios.
            </p>
          </section>

          <section>
            <h2>9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos Terminos en cualquier momento. La
              version vigente estara siempre disponible en el Sitio con su fecha de ultima
              actualizacion. El uso continuado del Sitio despues de una modificacion implica
              la aceptacion de los nuevos Terminos.
            </p>
          </section>

          <section>
            <h2>10. Ley aplicable y jurisdiccion</h2>
            <p>
              Estos Terminos se rigen por las leyes de la Republica Argentina. Cualquier
              controversia derivada de estos Terminos sera sometida a la jurisdiccion de los
              tribunales ordinarios de la Ciudad Autonoma de Buenos Aires, renunciando las
              partes a cualquier otro fuero o jurisdiccion que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2>11. Contacto</h2>
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
