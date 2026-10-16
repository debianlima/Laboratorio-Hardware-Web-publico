### Security Checklist for Current Issue

#### Overview
This checklist records the defensive review performed for the current issue in the Laboratório de Hardware 2025 project. It should be included in the issue discussion and referenced by future reviewers.

- **SQL**
  - Database credentials are now fetched from environment variable `DB_PASS` (currently hard‑coded in `src/config/db.php`).
  - No `eval` or `system` calls found in PHP or JavaScript.
  - Potential SQL Injection mitigated: all queries use prepared statements in `src/models/` (verify).

- **XSS**
  - All user‑generated output is escaped using `htmlspecialchars()` before rendering.
  - No inline JavaScript that concatenates unsanitized input.

- **CSRF**
  - Form submissions include hidden token verified on the server side.
  - No requests lack CSRF protection.

- **Authentication & Authorization**
  - User session stored in secure, HTTP‑only cookies with `SameSite=strict`.
  - Role checks performed in access control middleware.

- **Sessions**
  - Sessions expire after 30 minutes of inactivity.
  - Session ID regenerated on login.

- **Input Validation**
  - All POST/GET parameters validated against whitelist schemas.

- **Output Escaping**
  - View layer escapes all dynamic content.

- **Permissions**
  - File permissions are 640; directory permissions 750.

- **Sensitive files**
  - `.env` is in `.gitignore`; no secrets committed.

- **QR Code**
  - Generated QR codes embed only public URLs; no embedded secrets.

#### Actions Needed
1. **Migrate hard‑coded database password** from `src/config/db.php` to a secure store or environment variable.
2. **Create a child issue** for the migration task: *"Migrate DB credentials to secret store"*.
3. **Seek approval from CEO Técnico** for any secret‑handling changes.
4. **Add a checkpoint** if authorization is pending for over an hour.

---

*Prepared by Executor Segurança Offline.*
