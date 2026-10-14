# Testing plan and current status

## Current status
No automated unit, API, or end-to-end tests are included in this frontend starter. This document does not claim that the app has been browser-tested in this environment.

## Manual smoke test checklist
- [ ] `npm run demo` installs dependencies when needed and starts Vite.
- [ ] Landing dashboard renders without a blank screen.
- [ ] Role selector switches Patient / Doctor / Admin dashboard labels and menus.
- [ ] Dark-mode toggle changes the theme.
- [ ] Record search filters matching sample records and shows an empty state.
- [ ] Book appointment modal validates through native required browser behavior where applicable and adds a local pending item.
- [ ] Confirm and cancel actions update the local appointment list.
- [ ] Emergency simulation shows the warning banner and high risk score.
- [ ] Offline simulation updates device status.
- [ ] Return to normal resets simulation flags.
- [ ] Notification popover opens and unread badge clears.
- [ ] Mobile viewport remains usable.
- [ ] Browser console and terminal have no uncaught runtime errors.

## Production test requirements
- Unit tests for risk scoring and RBAC middleware.
- API integration tests for login, records, appointments, validation failures and unauthorized access.
- Appointment concurrency test proving double-booking is prevented transactionally.
- WebSocket tests for incoming vitals, disconnect/reconnect and alert delivery.
- End-to-end test for patient booking through doctor confirmation and admin audit review.
- Security tests for role/ownership boundaries, token expiry, rate limiting, uploads and sensitive-field encryption.
- Backup restore test and dependency audit.

Record actual command, date, result, and issue for every completed test before final submission.
