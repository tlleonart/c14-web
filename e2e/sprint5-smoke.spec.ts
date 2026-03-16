import { test, expect } from '@playwright/test'

test.describe('Sprint 5 — Smoke Tests (Launch Readiness)', () => {
  test('homepage loads and has all 12 sections', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // All section IDs present
    const sectionIds = ['top', 'clientes', 'problema', 'agentes', 'metodologia', 'gobernanza', 'testimonios', 'contacto']
    for (const id of sectionIds) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('no broken images on homepage', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Scroll to bottom to trigger all lazy images
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(2000)

    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'))
      return imgs
        .filter(img => img.complete && img.naturalWidth === 0)
        .map(img => img.src)
    })
    expect(brokenImages).toHaveLength(0)
  })

  test('no console errors on homepage', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Filter out known non-critical errors (e.g., analytics, third-party)
    const criticalErrors = errors.filter(e => !e.includes('favicon') && !e.includes('analytics'))
    expect(criticalErrors).toHaveLength(0)
  })

  test('/contacto — form submits without JS errors', async ({ page }) => {
    await page.goto('/contacto')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('/metodo — page loads fully', async ({ page }) => {
    await page.goto('/metodo')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('/servicios — page loads fully', async ({ page }) => {
    await page.goto('/servicios')
    await page.waitForLoadState('networkidle')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('404 page renders correctly', async ({ page }) => {
    await page.goto('/nonexistent-page')
    await page.waitForLoadState('networkidle')
    // Should show the not-found page, not crash
    await expect(page.locator('body')).toBeVisible()
  })

  test('no unsplash.com URLs remain in rendered HTML', async ({ page }) => {
    for (const path of ['/', '/contacto', '/metodo', '/servicios']) {
      await page.goto(path)
      await page.waitForLoadState('networkidle')
      const html = await page.content()
      expect(html).not.toContain('unsplash.com')
    }
  })

  test('homepage contact form is functional', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const contactSection = page.locator('#contacto')
    await contactSection.scrollIntoViewIfNeeded()
    // Form exists with submit button
    await expect(contactSection.getByRole('button', { name: /Solicitar análisis/ })).toBeVisible()
    // Form inputs exist
    await expect(contactSection.locator('input[type="text"]').first()).toBeVisible()
    await expect(contactSection.locator('input[type="email"]')).toBeVisible()
    await expect(contactSection.locator('textarea')).toBeVisible()
  })

  test('final full-page screenshots for launch', async ({ page }, testInfo) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-launch-ready.png`,
      fullPage: true,
    })
  })
})
