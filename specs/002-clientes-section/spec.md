# Feature Specification: Clientes Section

**Feature Branch**: `002-clientes-section`
**Created**: 2026-02-21
**Status**: Draft
**Input**: User description: "Add a 'Clientes' section to show clients to everyone. It must take data from the API, so we need to create them in the database. Clients should have a name, an image and a URL associated."

## Clarifications

### Session 2026-02-21

- Q: How should clients be ordered in the Clientes section? → A: Manual order — an explicit display-order field set by the administrator.
- Q: Where should the Clientes section appear on the landing page? → A: Between Services and Contact (social proof after showcasing services, before the contact form).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Clients on Landing Page (Priority: P1)

A visitor lands on the website and scrolls through the landing page. They see a "Clientes" section that displays a grid/list of client logos. Each client shows their logo/image and name. Clicking on a client navigates the visitor to that client's website (the associated URL). This section is visible to all visitors without authentication.

**Why this priority**: This is the core feature — displaying clients publicly is the primary value. Without this, nothing else matters.

**Independent Test**: Can be fully tested by navigating to the landing page and verifying that client entries appear with their name, image, and clickable URL.

**Acceptance Scenarios**:

1. **Given** at least one client exists in the database, **When** a visitor loads the landing page, **Then** they see the "Clientes" section (between Services and Contact) with all active clients displayed in administrator-defined order.
2. **Given** a client has a name, image, and URL stored, **When** the visitor views the Clientes section, **Then** each client entry displays the image, the name, and links to the client's URL.
3. **Given** no clients exist in the database, **When** a visitor loads the landing page, **Then** the Clientes section is hidden entirely (no empty state shown).
4. **Given** a client entry is displayed, **When** the visitor clicks on it, **Then** the client's URL opens in a new browser tab.

---

### User Story 2 - Manage Clients in Database (Priority: P2)

An administrator needs to add, update, or remove clients from the Clientes section. They interact with the database (via Convex dashboard or an admin workflow) to create new client records with a name, image, and URL. Changes are reflected on the public landing page.

**Why this priority**: Without the ability to manage client data, the section cannot be populated. This is the data management backbone but secondary to the display feature.

**Independent Test**: Can be tested by creating a client record in the database and verifying it appears on the landing page, then removing it and verifying it disappears.

**Acceptance Scenarios**:

1. **Given** an administrator creates a new client with name, image, and URL, **When** a visitor loads the landing page, **Then** the new client appears in the Clientes section.
2. **Given** an administrator updates a client's information, **When** a visitor reloads the page, **Then** the updated information is displayed.
3. **Given** an administrator removes a client, **When** a visitor reloads the page, **Then** the removed client no longer appears.

---

### Edge Cases

- What happens when a client's image fails to load? The client name MUST still display with a fallback placeholder.
- What happens when a client's URL is invalid or empty? The client entry MUST still display but without a clickable link.
- What happens when there are many clients (e.g., 50+)? The section MUST handle large numbers gracefully without breaking layout.
- What happens when the API is unavailable? The section MUST either show a cached version or hide gracefully without breaking the page.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST store client records with four fields: name (text), image (file/URL), associated URL (link), and display order (numeric).
- **FR-002**: System MUST expose a public API endpoint that returns all client records without requiring authentication.
- **FR-003**: The landing page MUST display a "Clientes" section between the Services and Contact sections, showing all clients from the database ordered by their display-order field (ascending).
- **FR-004**: Each client entry MUST display the client's image and name visibly.
- **FR-005**: Each client entry MUST link to the client's associated URL, opening in a new tab.
- **FR-006**: The Clientes section MUST be hidden when no clients exist in the database.
- **FR-007**: The Clientes section MUST be responsive, displaying correctly on viewports from 320px to 1920px.
- **FR-008**: Client images MUST have fallback handling when the image cannot be loaded.
- **FR-009**: System MUST support creating, updating, and deleting client records through the database layer.

### Key Entities

- **Client**: Represents a company or organization that is a client. Attributes: name (required, text), image (required, file or URL reference), url (required, link to client's website), displayOrder (required, numeric — controls position in the section). Displayed publicly on the landing page, ordered by displayOrder ascending.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors see client logos and names within 2 seconds of the Clientes section entering the viewport.
- **SC-002**: 100% of client entries display a clickable link that opens in a new tab.
- **SC-003**: The Clientes section renders correctly on mobile (320px), tablet (768px), and desktop (1920px) viewports.
- **SC-004**: When a new client is added to the database, it appears on the landing page on the next page load without any deployment or code change.

### Assumptions

- Client management (CRUD) will be handled via the Convex dashboard or a future admin panel — no dedicated admin UI is in scope for this feature.
- Client images will be stored as URLs (either Convex storage URLs or external URLs), not as raw file uploads through the frontend.
- The section is positioned between Services and Contact on the existing landing page (Hero → Services → **Clientes** → Contact → CallToAction).
- All clients are public; there is no concept of draft/hidden clients in this initial version.
