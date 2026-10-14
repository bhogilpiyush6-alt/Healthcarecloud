# Architecture

## Current ZIP architecture

```mermaid
flowchart LR
  User[Patient / Doctor / Admin] --> Browser[React + TypeScript UI]
  Browser --> LocalState[In-memory demo state]
  LocalState --> Charts[Recharts visualizations]
  LocalState --> Sim[Simulated vitals and alerts]
```

The current artifact is frontend-only. There is no backend or database connection.

## Intended target architecture

```mermaid
flowchart LR
  P[React web client] -->|HTTPS + JWT| API[Express API]
  P <-->|Socket.IO| WS[Realtime gateway]
  API --> Auth[Auth / RBAC / validation]
  API --> DB[(Prisma + SQLite, later PostgreSQL)]
  API --> Encrypt[Field encryption service]
  API --> Audit[Audit event writer]
  WS --> Risk[Node risk rules]
  Risk --> Notify[Notification service]
  Notify --> Mock[Mock email/SMS provider]
  API --> Files[Validated report storage]
  API --> Backup[Scheduled backup job]
  Device[Simulated IoT source] --> WS
```

## Component diagram

```mermaid
flowchart TB
  subgraph Client
    Router[React Router]
    Dash[Role dashboards]
    RecordUI[Records UI]
    ApptUI[Appointments UI]
    VitalsUI[Monitoring and charts]
    Insights[Risk insights]
  end
  subgraph Server (planned)
    Express[Express routes]
    Middleware[JWT, RBAC, Zod, rate limit]
    Services[Domain services]
    Prisma[Prisma ORM]
  end
  Router --> Dash
  Router --> RecordUI
  Router --> ApptUI
  Router --> VitalsUI
  Router --> Insights
  Express --> Middleware --> Services --> Prisma
```

## ER diagram (target)

```mermaid
erDiagram
  HOSPITAL ||--o{ DOCTOR : employs
  HOSPITAL ||--o{ PATIENT : registers
  PATIENT ||--o{ HEALTH_RECORD : owns
  DOCTOR ||--o{ HEALTH_RECORD : authors
  PATIENT ||--o{ APPOINTMENT : books
  DOCTOR ||--o{ APPOINTMENT : attends
  PATIENT ||--o{ VITAL_READING : generates
  PATIENT ||--o{ ALERT : triggers
  USER ||--o{ AUDIT_EVENT : creates
  USER ||--o{ NOTIFICATION : receives
```

## Sequence: login (target)

```mermaid
sequenceDiagram
  actor U as User
  participant C as Client
  participant A as API
  participant D as Database
  U->>C: Submit credentials
  C->>A: POST /auth/login
  A->>D: Find account
  D-->>A: Password hash and role
  A->>A: Verify bcrypt hash
  A-->>C: Short-lived access JWT + refresh cookie
  C-->>U: Role-specific workspace
```

## Sequence: appointment booking (target)

```mermaid
sequenceDiagram
  actor P as Patient
  participant C as Client
  participant A as API
  participant D as Database
  P->>C: Select doctor and slot
  C->>A: POST /appointments
  A->>A: Validate JWT, role and input
  A->>D: Transactionally check slot
  alt Slot available
    A->>D: Create appointment
    A-->>C: Confirmed/pending response
  else Slot taken
    A-->>C: 409 conflict
  end
```

## Sequence: emergency alert (target)

```mermaid
sequenceDiagram
  participant S as Simulated sensor
  participant W as WebSocket gateway
  participant R as Risk rules
  participant N as Notifications
  participant D as Doctor dashboard
  S->>W: Vitals sample
  W->>R: Validate and score sample
  R->>N: High-risk event
  N-->>D: Realtime alert
  N->>N: Log mock email/SMS
```
