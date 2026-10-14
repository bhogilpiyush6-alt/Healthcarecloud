# CareCloud — Smart Healthcare Cloud Platform

A responsive university project demo for **MIT School of Computing, Group SY2514**. The UI uses a teal/blue medical design system, dashboard cards, vitals charts, appointment management, records search, risk insights, notifications, and demo simulation controls.

> **Safety notice:** Educational prototype only. It is not a medical device, does not provide a diagnosis, and must not be used for clinical decisions. The current implementation is a frontend demo with fictional data. Do not enter real patient information.

## Run in 3 commands

1. Install [Node.js 20+](https://nodejs.org/).
2. Unzip this folder and open a terminal in it.
3. Run:

```bash
npm run demo
```

The command installs npm dependencies if needed and starts Vite. Open the local URL printed in the terminal (normally `http://localhost:5173`).

For development use `npm run dev`. For a production frontend build use `npm run build`, then `npm run preview`.

## Demo roles

Use the role selector in the left sidebar to switch between **Patient**, **Doctor**, and **Admin** demo workspaces. No password is needed in this frontend-only preview. This is not authentication and must not be treated as secure access control.

## Current demo features

- Role-specific dashboard layouts and KPIs
- Searchable fictional health records
- Appointment request form, confirmation and cancellation interactions
- Simulated heart rate, SpO₂ and temperature chart
- Rule-based sample risk score and plain-language explanation
- Emergency / device-offline / return-to-normal demo controls
- Notification popover and toast feedback
- Audit-log and sent-message sample screens
- Responsive layout and dark-mode toggle

## Honest implementation status

This ZIP is a runnable **frontend demo starter**, not the full production architecture from the project brief. It currently does **not** include a backend, database, real login/JWT, bcrypt, server-enforced RBAC, AES encryption, real file upload/storage, WebSocket sensor stream, persistent data, validated AI/ML model, real email/SMS, automated backups, or a production audit trail. Appointment interactions are local browser state and do not prevent conflicts across users. The UI labels simulations where relevant. Do not claim these backend capabilities during a presentation.

## Suggested Agile increments

1. Sprint 1 — establish app shell, role-specific demo workspaces, profile and visual theme.
2. Sprint 2 — health records list, search, and dashboard visualizations.
3. Sprint 3 — appointment request / confirm / cancel interactions.
4. Sprint 4 — simulated monitoring states and emergency alert UI.
5. Sprint 5 — transparent rule-based risk explanation UI.
6. Sprint 6 — docs and verification checklist; production backend, security and tests remain follow-up work.

Each sprint should be tested and committed in Git by your team. This archive does not contain an invented Git history or claim browser testing that has not been performed.

## Project structure

```text
smart-healthcare-cloud/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── scripts/demo.mjs
├── docs/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

## Troubleshooting

- **`npm` is not recognized:** install Node.js LTS and restart the terminal.
- **Port 5173 is occupied:** Vite normally offers another available port; open the URL shown in the terminal.
- **Install errors:** use a current Node.js LTS version, then run `npm install` and `npm run demo`.
- **Blank page:** inspect terminal output and browser developer console; ensure the install completed successfully.

## Deployment

This frontend can be deployed to a static host such as Netlify or Vercel after `npm run build`; publish the `dist/` directory. A real backend must be built and deployed separately before claiming secure multi-user functionality. Configure secrets in the hosting provider's environment settings, never in frontend source.
