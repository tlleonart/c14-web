import { test, expect } from '@playwright/test'

test.describe('Homepage — Sprint 2 Sections Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('full page screenshot (sprint 2)', async ({ page }, testInfo) => {
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-sprint2-full-page.png`,
      fullPage: true,
    })
  })

  test('social proof — logos visible', async ({ page }, testInfo) => {
    const section = page.locator('#clientes')
    await expect(section).toBeVisible()
    await expect(section.getByText('ACME Corp')).toBeVisible()
    await expect(section.getByText('NovaTech')).toBeVisible()
    await expect(section.getByText(/30\+ agentes desplegados/)).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-social-proof.png`,
    })
  })

  test('problema — comparison table', async ({ page }, testInfo) => {
    const section = page.locator('#problema')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByRole('cell', { name: 'Determinismo' })).toBeVisible()
    await expect(section.getByText('Garantizado')).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-problema.png`,
    })
  })

  test('agentes — 4 agent cards', async ({ page }, testInfo) => {
    const section = page.locator('#agentes')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByText('AGENT / STOCK-001')).toBeVisible()
    await expect(section.getByText('AGENT / ORCH-000')).toBeVisible()
    await expect(section.getByText('Tu Agente Personalizado')).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-agentes.png`,
    })
  })

  test('metodologia — stepper with 4 phases', async ({ page }, testInfo) => {
    const section = page.locator('#metodologia')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Auditoría' })).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Especificación' })).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Implementación' })).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Operación', exact: true })).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-metodologia.png`,
    })
  })

  test('footer — multi-column with newsletter', async ({ page }, testInfo) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    await expect(footer).toBeVisible()
    await expect(footer.getByText('Servicios', { exact: true })).toBeVisible()
    await expect(footer.getByText('Empresa', { exact: true })).toBeVisible()
    await expect(footer.getByText('Newsletter', { exact: true })).toBeVisible()
    await expect(footer.getByRole('button', { name: 'Suscribirme' })).toBeVisible()
    await footer.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-footer.png`,
    })
  })
})
