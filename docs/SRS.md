# Software Requirements Specification (SRS)

## 1. Purpose
CareCloud is a university prototype exploring a connected healthcare experience for patients, doctors and hospital administrators.

## 2. Problem statement
Health records, appointments and remote observations can be fragmented across separate systems. The proposed platform brings these workflows into one interface and demonstrates how alerts and transparent analytics might support timely review.

## 3. Users
- **Patient:** view a personal dashboard, review records, request appointments and inspect simulated vitals.
- **Doctor:** view a clinical dashboard, review patient-oriented UI and see alerts.
- **Hospital administrator:** inspect platform KPIs, illustrative audit events and message logs.

## 4. Functional requirements
1. Centralized health records: profile and record list, report categories, search/filter. **Current status:** fictional list and search UI; upload/storage is not implemented.
2. Appointment and consultation: request, confirm, cancel and display statuses. **Current status:** local demo state; rescheduling, persistent consultation notes, availability locking and server-side double-booking prevention are not implemented.
3. Remote monitoring: vitals visualization and emergency/offline/reset controls. **Current status:** local simulated chart and UI state; no IoT hardware, WebSocket or backend stream.
4. AI analytics: score, category, plain-language explanation and trend wording. **Current status:** illustrative rule-based score; not a trained or validated AI model.
5. Secure management: hashed credentials, JWT refresh, server-side RBAC, validation, rate limiting, helmet, CORS, AES-256 at rest, audit logging, backups and HTTPS-ready deployment. **Current status:** backend/security features are not implemented in this frontend starter.
6. Notifications and dashboards: role-specific overview, unread badge, toast and mock messages. **Current status:** local UI simulation.

## 5. Non-functional requirements
- Responsive on laptop and mobile.
- Accessible contrast, readable typography and visible control labels.
- Simple one-command demo startup.
- No medical accuracy claims.
- Production version should have tests, secure server-side authorization, logging, backup/restore and monitored deployment.

## 6. Constraints
This archive prioritizes a zero-database, frontend-only demo that is simple for beginners to run. All people and clinical values shown are fictional. A production implementation requires additional backend development, validation, threat modeling and clinical governance.
