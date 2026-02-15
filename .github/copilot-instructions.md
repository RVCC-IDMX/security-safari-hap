# Copilot instructions

## Branch naming convention

Use the `fix/` prefix for each security fix:

- `fix/xss-vulnerability`
- `fix/eval-injection`
- `fix/hardcoded-secret`
- `fix/outdated-dependency`
- `fix/secret-in-history`

Create a **separate branch and PR for each fix** (5 total).

## Security rules

<!--
TODO: After completing your security audit, add rules here
that would help Copilot avoid suggesting the vulnerabilities you found.

Example rules you might add:
- Use textContent instead of innerHTML
- Never use eval() or new Function()
- Check npm audit before adding dependencies

This file teaches your AI assistant to follow security best practices.
-->
