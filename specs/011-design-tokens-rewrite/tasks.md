# Tasks: Design Tokens Rewrite

## Task Group 1 (sequential — single file)

### TASK-001-A: Rewrite variables.css `:root` block [P]
- **File:** `src/shared/styles/variables.css`
- **Action:** Replace all tokens in `:root` (colors, typography, shadows, radius, transitions, layout) with mockup values. Preserve spacing and z-index sections unchanged. Update mobile media query typography overrides.
- **AC refs:** AC-01 through AC-13, AC-15
- **Done when:** File contains all new tokens, no old tokens remain, spacing/z-index unchanged

### TASK-001-B: Verify WCAG AA contrast ratios
- **File:** N/A (verification only)
- **Action:** Calculate contrast ratios for all text/background pairs from the updated tokens
- **AC refs:** AC-14
- **Done when:** All pairs meet 4.5:1 (normal text) or 3:1 (large text)

### TASK-001-C: Validate build
- **File:** N/A (build check)
- **Action:** Run build/dev to verify CSS parses correctly
- **AC refs:** All
- **Done when:** No CSS parsing errors (TS errors from --font-headline OK, addressed in TASK-003/004)
