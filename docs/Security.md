# Security notes

## Prototype status
The current ZIP is a client-side demonstration. It does not implement authentication, server-side authorization, encrypted persistence, or a production audit trail. Role switching is only a presentation convenience and is not a security boundary. Do not enter real patient information.

## Threats and required mitigations for a production version

| Threat | Planned mitigation |
|---|---|
| Credential theft / password database leak | bcrypt or Argon2 password hashing, strong password policy, rate limiting, MFA where feasible |
| Stolen or replayed access token | Short-lived JWT, issuer/audience validation, refresh-token rotation and revocation |
| Insecure direct object references | Server-side ownership/assignment checks on every patient-data route |
| Malicious or malformed input | Zod schema validation, parameterized ORM queries, output encoding |
| Cross-site scripting | React escaping, strict CSP, avoid unsafe HTML, sanitize any rich content |
| Cross-site request forgery | SameSite secure cookies and CSRF protection where cookie auth is used |
| Sensitive data exposure | TLS in transit, AES-256-GCM field encryption at rest, key rotation and managed secrets |
| Excessive file upload | MIME/signature validation, size limits, malware scanning and private object storage |
| Abuse / denial of service | Express rate limiting, request limits, helmet, controlled CORS, monitoring |
| Untraceable access | Append-only server-side audit events with actor, target, action, timestamp and outcome |
| Data loss | Encrypted scheduled backups, restore tests and documented retention policy |
| Secret leakage | `.env` excluded from Git; use `.env.example` with placeholders only |

Security controls above are recommendations for the target system, not claims that the current UI implements them.
