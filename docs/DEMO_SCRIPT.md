# 8-minute demo script

**Important:** The current ZIP is a frontend-only prototype. Explain that authentication, persistent storage, WebSockets, and real notification delivery are planned backend work, not implemented features. Do not claim real patient safety or medical accuracy.

## 0:00–0:30 — Landing / product pitch
Introduce CareCloud as a connected healthcare dashboard concept intended to bring records, appointments and monitoring into one experience. Emphasize that all data is fictional.

## 0:30–2:30 — Patient workspace
1. Select **Patient** in the sidebar role selector.
2. Point out heart rate, SpO₂, temperature and risk score cards.
3. Review the vitals chart and mock wearable status.
4. Open **My Health Records** and search for “Lipid” or “Vitamin”.
5. Return to **Appointments**, book a demo appointment, and show the new pending item.

## 2:30–4:00 — Simulated emergency
1. Return to Overview.
2. Expand **Show demo controls**.
3. Select **Simulate emergency**.
4. Point out the banner, changed sample readings, risk score and explanation.
5. Explain that the alert and notification are UI simulations; no real SMS/email or medical sensor is connected.

## 4:00–6:00 — Doctor workspace
1. Switch role to **Doctor**.
2. Review the clinical snapshot and vitals visualization.
3. Open **AI Health Insights** and show the rule-based explanation.
4. Open **Appointments** and confirm a pending item.
5. Clarify that a production version would enforce doctor assignment and patient authorization on the server.

## 6:00–7:30 — Admin workspace
1. Switch role to **Admin**.
2. Show platform KPI cards, Audit Log and Sent Messages.
3. Explain that these entries are illustrative local demo data, not server-enforced audit events or delivered messages.
4. Describe the intended RBAC, encrypted storage, backup and deployment design from `Architecture.md` and `Security.md`.

## 7:30–8:00 — Agile process and close
Show the six-sprint plan and docs. Be honest about which work is UI simulation and which backend work remains. If your team has completed sprint commits and screenshots, show the real Git history and artifacts; do not fabricate them.
