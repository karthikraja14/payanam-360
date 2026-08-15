# Security policy

Report vulnerabilities privately to the repository owner. Do not submit real provider credentials, user movement histories or personal data in public issues.

Production deployments must keep provider tokens server-side, terminate TLS, use a managed PostgreSQL role with least privilege, rate-limit all writes, monitor ingestion lag, retain an audit trail, and implement user export/deletion before accounts launch. Demo fixtures and JSONL report storage are suitable only for a controlled single-instance pilot.
