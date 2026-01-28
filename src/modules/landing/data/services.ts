export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'automation',
    title: 'Automatización con IA',
    description:
      'Optimizá procesos de tu negocio con soluciones inteligentes que ahorran tiempo y reducen errores.',
    icon: 'smart_toy',
    features: [
      'Automatización de tareas repetitivas',
      'Integración con sistemas existentes',
      'Workflows personalizados',
    ],
  },
  {
    id: 'ai-development',
    title: 'Desarrollo de IA',
    description:
      'Creamos modelos y aplicaciones de inteligencia artificial adaptados a tus necesidades específicas.',
    icon: 'psychology',
    features: [
      'Modelos de machine learning',
      'Procesamiento de lenguaje natural',
      'Visión por computadora',
    ],
  },
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description:
      'Sitios web modernos, rápidos y optimizados que impulsan tu presencia digital.',
    icon: 'language',
    features: [
      'Aplicaciones web progresivas',
      'E-commerce y plataformas',
      'Optimización de rendimiento',
    ],
  },
  {
    id: 'software-development',
    title: 'Desarrollo de Software',
    description:
      'Software a medida que resuelve los problemas específicos de tu empresa.',
    icon: 'code',
    features: [
      'Aplicaciones empresariales',
      'APIs y microservicios',
      'Integración de sistemas',
    ],
  },
]
