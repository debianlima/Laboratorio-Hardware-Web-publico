# Security Audit Report – Laboratório de Hardware 2025

## Scope
- PHP backend (src/
- Database configuration (src/config/db.php)
- Frontend forms (src/login.php)
- Legacy prototype files (fontes_recebidas/prototipos/)
- Docker tooling

## Findings
1. **Missing CSRF token in login form** – CSRF token is generated but not rendered.
2. **Potential `.env` missing** – DB credentials default to hard‑coded values `lab_user`/`lab_password`.
3. **CSRF token present in other forms** but not in critical authentication flows.
4. **Sessions**: secure, httpOnly, SameSite=Strict, 30‑min lifetime—good.
5. **SQL injection mitigated** via prepared statements.
6. **XSS**: inputs are escaped on output; no dynamic exec.
7. **Legacy prototipos**: review for embedded secrets—no obvious QR with secrets.
8. **Docker container**: contains phpstan for static analysis.

## Recommendations
- Add hidden `<input type="hidden" name="csrf" value="<?php echo htmlspecialchars($_SESSION["csrf_token"] ?? ""); ?>">` to login form.
- Create an `.env` template (`.env.example`) and refactor `db.php` to use environment variables.
- Run phpstan analysis and review findings.
- Add an audit log entry whenever credentials are read.
- Store secrets in vault or CI/CD env vars.

## Next Steps
- Implement CSRF input in login.php.
- Commit `.env.example` and remove hard‑coded credentials from db.php.
- Run phpstan locally.
- Review prototipos for any sensitive data.

## Checklist
- [ ] CSRF token added to login form.
- [ ] `.env` created, `db.php` refactored.
- [ ] phpstan run, no critical findings.
- [ ] Legacy prototipos scanned.
- [ ] All changes committed.
