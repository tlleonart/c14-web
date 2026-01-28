<!--
================================================================================
SYNC IMPACT REPORT
================================================================================
Version Change: 0.0.0 → 1.0.0 (MAJOR - initial constitution ratification)

Added Principles:
  - I. Code Quality Excellence
  - II. Testing Standards
  - III. User Experience Consistency
  - IV. Performance Excellence

Added Sections:
  - Quality Gates
  - Development Workflow

Removed Sections: N/A (initial version)

Templates Requiring Updates:
  - .specify/templates/plan-template.md ✅ (Constitution Check section already present)
  - .specify/templates/spec-template.md ✅ (Success Criteria already includes measurable outcomes)
  - .specify/templates/tasks-template.md ✅ (Test phases and checkpoints already present)

Follow-up TODOs: None
================================================================================
-->

# c14_v2 Constitution

## Core Principles

### I. Code Quality Excellence

All code MUST adhere to the following non-negotiable standards:

- **Single Responsibility**: Every function, class, and module MUST have one clear purpose. Functions exceeding 30 lines MUST be reviewed for decomposition opportunities.
- **Meaningful Naming**: Variables, functions, and classes MUST use descriptive names that reveal intent. Abbreviations are prohibited except for universally understood terms (e.g., `id`, `url`, `api`).
- **DRY (Don't Repeat Yourself)**: Code duplication MUST NOT exceed 3 lines. Repeated logic MUST be extracted into reusable functions or utilities.
- **Code Documentation**: Public APIs MUST include documentation describing purpose, parameters, return values, and possible exceptions. Internal code SHOULD be self-documenting through clear naming.
- **Cyclomatic Complexity**: Functions MUST NOT exceed a cyclomatic complexity of 10. Complex logic MUST be decomposed into smaller, testable units.
- **Error Handling**: All external calls (I/O, network, database) MUST have explicit error handling. Silent failures are prohibited.

**Rationale**: Clean, readable code reduces maintenance burden, minimizes bugs, and enables efficient collaboration across team members.

### II. Testing Standards

Testing is NON-NEGOTIABLE for all production code:

- **Test Coverage Minimum**: All new code MUST achieve minimum 80% line coverage. Critical paths (authentication, payments, data persistence) MUST have 100% coverage.
- **Test Types Required**:
  - **Unit Tests**: Every public function/method MUST have corresponding unit tests covering happy path and error scenarios.
  - **Integration Tests**: All external integrations (APIs, databases, third-party services) MUST have integration tests.
  - **Contract Tests**: API endpoints MUST have contract tests validating request/response schemas.
- **Test-First Approach**: For bug fixes, a failing test reproducing the bug MUST be written before the fix is implemented.
- **Test Independence**: Each test MUST be independent and idempotent. Tests MUST NOT depend on execution order or shared mutable state.
- **Test Naming**: Test names MUST describe the scenario being tested using the pattern: `test_[unit]_[scenario]_[expected_result]`.
- **Mocking Policy**: External dependencies MUST be mocked in unit tests. Integration tests SHOULD use real dependencies where feasible.

**Rationale**: Comprehensive testing prevents regressions, documents expected behavior, and enables confident refactoring.

### III. User Experience Consistency

All user-facing interfaces MUST maintain consistency:

- **Design System Compliance**: UI components MUST use the established design system. Custom styling is prohibited without explicit approval and documentation.
- **Response Time Feedback**: Operations exceeding 200ms MUST display loading indicators. Operations exceeding 2 seconds MUST display progress information.
- **Error Messages**: User-facing errors MUST be actionable and human-readable. Technical details MUST be logged but NOT displayed to users.
- **Accessibility**: All interfaces MUST meet WCAG 2.1 AA standards. This includes proper contrast ratios, keyboard navigation, and screen reader compatibility.
- **Responsive Design**: All web interfaces MUST function correctly on viewport widths from 320px to 1920px.
- **State Persistence**: Form data MUST NOT be lost on accidental navigation. Draft states MUST be preserved for user convenience.
- **Confirmation for Destructive Actions**: Any action that deletes or permanently modifies data MUST require explicit user confirmation.

**Rationale**: Consistent UX builds user trust, reduces support burden, and improves overall product quality perception.

### IV. Performance Excellence

Performance is a feature, not an afterthought:

- **Page Load Time**: Initial page load MUST complete within 3 seconds on 3G networks. Time to Interactive (TTI) MUST be under 5 seconds.
- **API Response Time**: API endpoints MUST respond within 200ms (p50) and 500ms (p95). Endpoints exceeding these thresholds MUST be optimized or documented with justification.
- **Database Queries**: Individual queries MUST NOT exceed 100ms. N+1 query patterns are prohibited. All queries MUST use appropriate indexes.
- **Memory Efficiency**: Memory leaks are prohibited. Long-running processes MUST maintain stable memory consumption.
- **Bundle Size**: Frontend bundles MUST be code-split appropriately. Initial bundle MUST NOT exceed 250KB gzipped.
- **Caching Strategy**: Cacheable resources MUST implement appropriate caching. Cache invalidation strategies MUST be documented.
- **Performance Testing**: Critical user flows MUST have performance benchmarks. Performance regressions MUST block releases.

**Rationale**: Performance directly impacts user satisfaction, conversion rates, and system scalability.

## Quality Gates

All code changes MUST pass through the following gates before merge:

| Gate | Requirement | Enforcement |
|------|-------------|-------------|
| Lint | Zero errors, zero warnings | Automated CI |
| Type Check | Full type coverage (where applicable) | Automated CI |
| Unit Tests | 100% pass, ≥80% coverage | Automated CI |
| Integration Tests | 100% pass | Automated CI |
| Performance Benchmarks | No regressions >10% | Automated CI |
| Code Review | Minimum 1 approval | Pull Request |
| Accessibility Audit | WCAG 2.1 AA compliance | Manual + Automated |

## Development Workflow

### Code Review Requirements

- All changes MUST be submitted via pull request
- Reviews MUST verify compliance with all four core principles
- Reviewers MUST check for:
  - Code quality (naming, structure, complexity)
  - Test completeness and quality
  - UX consistency (if applicable)
  - Performance implications

### Breaking Changes

- Breaking changes to public APIs MUST be documented
- Deprecations MUST provide migration paths
- Breaking changes MUST increment the major version

### Technical Debt

- Technical debt MUST be documented with `TODO(debt):` comments
- Debt items MUST include justification and remediation timeline
- Debt MUST NOT accumulate beyond 5% of codebase

## Governance

This Constitution supersedes all other development practices. Violations MUST be addressed before code can be merged.

**Amendment Process**:
1. Propose amendment with rationale
2. Document impact on existing codebase
3. Obtain team consensus (>50% approval)
4. Update constitution with new version
5. Communicate changes to all team members

**Compliance Review**:
- All pull requests MUST include Constitution compliance statement
- Quarterly audits SHOULD verify ongoing compliance
- Violations discovered post-merge MUST be remediated within current sprint

**Version**: 1.0.0 | **Ratified**: 2026-01-28 | **Last Amended**: 2026-01-28
