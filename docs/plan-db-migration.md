# Database Password Migration Plan

## Goal
Move the default database password from `src/config/db.php` to an environment secret (**DB_PASS**) and guard against accidental use of the default.

## Steps
1. **Code change**: Remove the hard‑coded password and enforce `envVar('DB_PASS')`.
2. **Test**: Add a unit test that verifies a missing `DB_PASS` results in a configuration error.
3. **CI safeguard**: Update CI matrix to fail if `DB_PASS` is absent; ensure all build agents provide the secret in a secure store.
4. **Rollback**: Keep the original `db.php` in a `archive/` branch until a successful production deploy.
5. **Documentation**: Update README / developer docs with new requirement.
6. **Approval**: Await CEO Técnico Local approval before merging.

## Risk Assessment
- **No existing data**: Only password changes; no schema changes.
- **Potential downtime**: If DB_PASS not set correctly in CI or production, the app will fail to start.

## Monitoring
- On deployment, verify health check and database connectivity logs.

## Time Estimate
- Review & PR: 1 hour.
- CI adjustments: 30 min.
- QA & monitoring: 30 min.
