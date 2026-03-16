import { test, expect } from '@playwright/test'

test.describe('Sprint 4 — QA Visual + Internal Pages', () => {
  test('homepage — full page screenshot (post-polish)', async ({ page }, testInfo) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-sprint4-homepage.png`,
      fullPage: true,
    })
  })

  test('homepage — self-hosted hero image loads', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Verify no unsplash URLs remain
    const content = await page.content()
    expect(content).not.toContain('unsplash.com')
  })

  test('/contacto page renders', async ({ page }, testInfo) => {
    await page.goto('/contacto')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-contacto-page.png`,
      fullPage: true,
    })
  })

  test('/metodo page renders', async ({ page }, testInfo) => {
    await page.goto('/metodo')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-metodo-page.png`,
      fullPage: true,
    })
  })

  test('/servicios page renders', async ({ page }, testInfo) => {
    await page.goto('/servicios')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-servicios-page.png`,
      fullPage: true,
    })
  })

  test('all internal pages use new Header with nav links', async ({ page }) => {
    for (const path of ['/contacto', '/metodo', '/servicios']) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      const header = page.locator('header')
      await expect(header).toBeVisible()
      // Header should have CTA button
      await expect(header.getByText('Hablemos')).toBeVisible()
    }
  })

  test('all internal pages use new Footer with newsletter', async ({ page }) => {
    for (const path of ['/contacto', '/metodo', '/servicios']) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      const footer = page.locator('footer')
      await expect(footer).toBeVisible()
      await expect(footer.getByText('Suscribirme')).toBeVisible()
    }
  })
})
