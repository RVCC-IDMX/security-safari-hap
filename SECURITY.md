# Security

## Reporting vulnerabilities

If you discover a security vulnerability, please report it by opening a GitHub issue.

## Known issues and remediation

### Secret exposed in git history

**Status:** Remediated

**Description:** An API key was accidentally committed to the repository in a `.env` file and later deleted. However, the secret remains accessible in git history.

**Discovery:** The exposed secret can be found using:

```bash
git log --all --oneline -- "*.env"
git show <commit-hash>:.env
```

**Remediation steps taken:**

1. The exposed API key (`API_KEY=sk_live_real_secret_oops`) has been rotated
2. The `.env` file is now properly gitignored
3. Application code now reads secrets from environment variables
4. Added `.env.example` as a template (without real values)

**Prevention:**

- Always add `.env` to `.gitignore` before the first commit
- Use `.env.example` files with placeholder values
- Consider using git hooks to prevent committing sensitive files
- Rotate any secrets that have been exposed, even briefly
