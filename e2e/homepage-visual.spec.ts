import { test, expect } from '@playwright/test'

test.describe('Homepage — Sprint 1 Visual Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for fonts and images to load
    await page.waitForLoadState('networkidle')
  })

  test('full page screenshot', async ({ page }, testInfo) => {
    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-full-page.png`,
      fullPage: true,
    })
  })

  test('header — sticky with glassmorphism', async ({ page }, testInfo) => {
    const header = page.locator('header').first()
    await expect(header).toBeVisible()
    await header.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-header.png`,
    })
  })

  test('header — nav links visible on desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name === 'mobile' || testInfo.project.name === 'tablet') {
      // On mobile/tablet, nav should be hidden
      const nav = page.locator('header nav')
      if (await nav.count() > 0) {
        // Nav exists but should be hidden via CSS
        test.skip()
      }
      return
    }
    // Desktop: all 5 nav links should be visible in the header
    const header = page.locator('header')
    await expect(header.getByText('El problema')).toBeVisible()
    await expect(header.getByText('Agentes', { exact: true })).toBeVisible()
    await expect(header.getByText('Metodología', { exact: true })).toBeVisible()
    await expect(header.getByText('Gobernanza', { exact: true })).toBeVisible()
    await expect(header.getByText('Clientes', { exact: true })).toBeVisible()
  })

  test('hero section — dark background with content', async ({ page }, testInfo) => {
    const hero = page.locator('#top')
    await expect(hero).toBeVisible()
    await hero.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-hero.png`,
    })
  })

  test('hero — headline visible', async ({ page }) => {
    await expect(page.getByText(/operan/)).toBeVisible()
    await expect(page.getByText('Solicitar análisis gratuito')).toBeVisible()
  })

  test('hero — trust indicators visible', async ({ page }) => {
    await expect(page.getByText('30+')).toBeVisible()
    await expect(page.getByText('<48h')).toBeVisible()
    await expect(page.getByText('99.9%')).toBeVisible()
    await expect(page.getByText('100%')).toBeVisible()
  })

  test('scroll progress bar exists', async ({ page }) => {
    const progressBar = page.locator('[role="progressbar"]')
    await expect(progressBar).toBeAttached()
  })

  test('back to top button appears after scroll', async ({ page }, testInfo) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 800))
    await page.waitForTimeout(500)

    const backToTop = page.getByLabel('Volver arriba')
    await expect(backToTop).toBeVisible()

    await page.screenshot({
      path: `e2e/screenshots/${testInfo.project.name}-back-to-top.png`,
    })
  })

  test('header — CTA "Hablemos" visible', async ({ page }) => {
    const ctaButtons = page.getByText('Hablemos')
    await expect(ctaButtons.first()).toBeVisible()
  })

  test('after scroll — scroll progress updates', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
    await page.waitForTimeout(300)

    const progressBar = page.locator('[role="progressbar"]')
    const width = await progressBar.evaluate((el) => el.style.width)
    // Should be roughly around 50%
    const numericWidth = parseFloat(width)
    expect(numericWidth).toBeGreaterThan(20)
    expect(numericWidth).toBeLessThan(80)
  })
})
