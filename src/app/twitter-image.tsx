import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Carbono14 — IA operativa determinista para empresas'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at center, rgba(217, 78, 40, 0.15) 0%, transparent 50%)',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Corner decorations */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 60,
            height: 3,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 3,
            height: 60,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 60,
            height: 3,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 3,
            height: 60,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            width: 60,
            height: 3,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            width: 3,
            height: 60,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 60,
            height: 3,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 3,
            height: 60,
            backgroundColor: '#d94e28',
            opacity: 0.6,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              color: '#f1f5f9',
              marginBottom: 16,
            }}
          >
            Carbono
            <span style={{ color: '#d94e28' }}>14</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 400,
              color: '#94a3b8',
              marginBottom: 24,
            }}
          >
            IA operativa determinista para empresas
          </div>

          {/* Services */}
          <div
            style={{
              fontSize: 20,
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 300,
              color: '#64748b',
              marginBottom: 40,
            }}
          >
            Agentes operativos · Consultoría · Monitoreo · Desarrollo a medida
          </div>

          {/* Accent line */}
          <div
            style={{
              width: 200,
              height: 3,
              backgroundColor: '#d94e28',
              borderRadius: 2,
              marginBottom: 32,
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: 24,
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 500,
              color: '#d94e28',
            }}
          >
            carbono-14.net
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
