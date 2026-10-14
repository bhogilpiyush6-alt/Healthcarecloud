# Process Model — Agile + Incremental Delivery

## Why Agile?
The project has six separable feature areas and will be presented to a mentor. Incremental delivery makes it possible to demo a working UI early, receive feedback, and test each addition before the next sprint.

## Six-sprint plan and current artifact status

| Sprint | Planned increment | Present in this ZIP | Important gaps |
|---|---|---|---|
| 1 | App shell, roles, profile | Role selector, profile widgets, dashboard shell | No real login or secure profile API |
| 2 | Records and dashboard | Searchable sample records and charts | No database or file upload |
| 3 | Appointment module | Request, confirm and cancel UI | No server, rescheduling or conflict locking |
| 4 | Monitoring and alerts | Simulated vitals, emergency/offline/reset controls | No sensor, WebSocket or push to doctor |
| 5 | Analytics | Sample score and rule explanation | Not trained/validated ML, no rolling patient baseline |
| 6 | Notifications, integration, testing, deployment and docs | Local toast/notification UI and docs | Backend integration, automated test suite and production deployment remain |

## Test and retrospective record
This document describes the current artifact, not a fabricated history of six completed development sprints. Before submission, the team should run each sprint increment, test the flow in a browser, capture screenshots in `docs/screenshots/`, record actual test output, and commit with clear messages such as `Sprint 2: searchable health records dashboard`.

## Suggested sprint exit criteria
- App starts from a clean checkout.
- Main flow can be clicked without runtime errors.
- Relevant unit/API/end-to-end tests pass.
- Known limitations are documented.
- Screenshots and a Git commit are saved before starting the next sprint.
