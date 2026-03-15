# Technical Research: Design Tokens Rewrite

## Libraries/Frameworks Investigated
None required — pure CSS custom properties. No Context7 lookup needed for this task.

## Current Codebase Analysis

### Current variables.css structure (78 lines):
1. **Colors** (lines 3-11): 8 tokens, dark-first palette
2. **Typography - Fonts** (lines 13-16): 3 font-family tokens including `--font-headline` (Playfair Display)
3. **Typography - Scale** (lines 18-23): 5 fluid size tokens with clamp()
4. **Layout** (lines 25-30): 6 layout tokens
5. **Spacing** (lines 32-41): 9 spacing tokens (xs through 5xl) — PRESERVE
6. **Shadows** (line 43-44): 1 shadow token
7. **Transitions** (lines 46-48): 2 transition tokens
8. **Z-index** (lines 50-58): 8 z-index tokens — PRESERVE
9. **Mobile overrides** (lines 61-77): 2 media queries (768px, 480px)

### Files referencing --font-headline: 31 files
These will break when `--font-headline` is removed from variables.css. This is expected and addressed by TASK-003 (layout.tsx) and TASK-004 (CSS Modules update).

### Token naming convention:
- Current: kebab-case with category prefix (--bg-primary, --text-primary, --accent-primary)
- New (mockup): shorter kebab-case (--bg, --text, --primary, --secondary)
- Strategy: Adopt mockup naming. Old names are not preserved (spec AC-15 requires removal).

## API Compatibility
N/A — CSS custom properties, no API involved.

## Performance Considerations
- CSS custom properties have negligible performance impact
- No additional HTTP requests
- No change in number of stylesheets
