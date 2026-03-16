import { test, expect } from '@playwright/test'

test.describe('Homepage — Sprint 3 Sections Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('full page screenshot (sprint 3 — complete homepage)', async ({ page }, testInfo) => {
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-sprint3-full-page.png`,
      fullPage: true,
    })
  })

  test('gobernanza — 4 cards + compliance bar', async ({ page }, testInfo) => {
    const section = page.locator('#gobernanza')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByText('Trazabilidad completa')).toBeVisible()
    await expect(section.getByText('Rollback instantáneo')).toBeVisible()
    await expect(section.getByText(/SOC 2/)).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-gobernanza.png`,
    })
  })

  test('testimonios — 3 cards + metrics strip', async ({ page }, testInfo) => {
    const section = page.locator('#testimonios')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByText('Marcos Delgado')).toBeVisible()
    await expect(section.getByText('Carolina Ibáñez')).toBeVisible()
    await expect(section.getByText('78%', { exact: true })).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-testimonios.png`,
    })
  })

  test('contacto — split layout with form', async ({ page }, testInfo) => {
    const section = page.locator('#contacto')
    await section.scrollIntoViewIfNeeded()
    await expect(section).toBeVisible()
    await expect(section.getByText(/Analizamos tus procesos/)).toBeVisible()
    await expect(section.getByRole('button', { name: /Solicitar análisis/ })).toBeVisible()
    await section.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-contacto.png`,
    })
  })

  test('pre-footer CTA band', async ({ page }, testInfo) => {
    const cta = page.getByText('Solicitar análisis ahora')
    await cta.scrollIntoViewIfNeeded()
    await expect(cta).toBeVisible()
  })

  test('homepage has all 12 sections', async ({ page }) => {
    // Verify all section IDs exist
    await expect(page.locator('#top')).toBeAttached()
    await expect(page.locator('#clientes')).toBeAttached()
    await expect(page.locator('#problema')).toBeAttached()
    await expect(page.locator('#agentes')).toBeAttached()
    await expect(page.locator('#metodologia')).toBeAttached()
    await expect(page.locator('#gobernanza')).toBeAttached()
    await expect(page.locator('#testimonios')).toBeAttached()
    await expect(page.locator('#contacto')).toBeAttached()
    await expect(page.locator('footer')).toBeAttached()
  })
})
