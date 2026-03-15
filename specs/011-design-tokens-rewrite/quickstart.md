# Quickstart Validation: Design Tokens Rewrite

## Scenario 1: All mockup tokens present
- Setup: Read updated `variables.css`
- Action: Verify every CSS custom property from mockup `:root` block exists
- Expected: All 16 color tokens, 4 radius tokens, 4 shadow tokens, 1 transition token, 4 layout tokens present with exact mockup hex values

## Scenario 2: Old tokens removed
- Setup: Read updated `variables.css`
- Action: Search for old token names: --bg-primary, --bg-secondary, --accent-primary, --accent-functional, --font-headline, --shadow-subtle, --transition-fast, --transition-normal, --radius-max, --content-max
- Expected: Zero matches — none of these tokens exist in the file

## Scenario 3: Spacing tokens preserved
- Setup: Compare spacing section before and after
- Action: Verify --spacing-xs through --spacing-5xl values
- Expected: All 9 spacing tokens have identical values to current file

## Scenario 4: Z-index tokens preserved
- Setup: Compare z-index section before and after
- Action: Verify --z-base through --z-tooltip values
- Expected: All 8 z-index tokens have identical values to current file

## Scenario 5: WCAG AA contrast verification
- Setup: Calculate contrast ratios for all text/background combinations
- Action: Use relative luminance formula for each pair in plan.md contrast table
- Expected: All pairs meet 4.5:1 for normal text or 3:1 for large text (--text-muted exempted for normal text)

## Scenario 6: Build check
- Setup: Run `npx next build` or `npx next dev`
- Action: Check for CSS parsing errors
- Expected: No CSS-related build errors (note: JS/TS errors from --font-headline removal are expected and out of scope)
