# Safety note

This project contains **intentional vulnerabilities** for teaching purposes. This document explains why it's safe to deploy.

## The vulnerabilities

| Vulnerability             | Type              | Location       |
| ------------------------- | ----------------- | -------------- |
| Outdated Vite             | Dependency CVE    | package.json   |
| Hardcoded API key         | Exposed secret    | src/config.js  |
| Secret in git history     | Leaked credential | .env (deleted) |
| innerHTML with user input | XSS               | src/index.js   |
| eval() with user input    | Code injection    | src/index.js   |

## Why it's safe to deploy

### Build-time vs runtime

The Vite CVE is a **build-time vulnerability** in the development server. Once the site is built and deployed as static files, Vite isn't running. The production site is just HTML, CSS, and JavaScript served by Netlify.

### Fake credentials

The "secrets" in this project are fake:

- `sk_live_abc123_not_real_but_looks_real` — not a real API key
- `sk_live_real_secret_oops` — also fake

They don't connect to any real service. Exposing them has no consequences.

### Self-XSS only

The innerHTML and eval() vulnerabilities are real, but they're **self-contained**:

- No backend or database
- No authentication or sessions
- No cookies with sensitive data
- No stored user data
- Form inputs come from user typing, not URL parameters

This means:

- You can't craft a malicious link to attack others
- The "attack" only affects the person who typed it
- There's nothing to steal

**Worst case:** Someone types `<script>alert('hi')</script>` and sees their own alert pop up. That's the entire point of the exercise.

### No attack surface for others

| Attack vector         | Why it doesn't work           |
| --------------------- | ----------------------------- |
| Stored XSS            | No database to store payloads |
| Reflected XSS via URL | Form doesn't read URL params  |
| Session hijacking     | No sessions                   |
| Cookie theft          | No sensitive cookies          |
| Data exfiltration     | No data to exfiltrate         |

## Summary

This is a **teaching tool**, not a real application. The vulnerabilities exist for students to discover and fix. Deploying it publicly is safe because:

1. No real services or credentials
2. No persistent data
3. Vulnerabilities only affect the person who triggers them
4. The site is static HTML/CSS/JS — no server-side code

Students clone the repo, find the issues, fix them, and submit PRs. The deployed version demonstrates what "vulnerable" looks like so they can verify their fixes work.
