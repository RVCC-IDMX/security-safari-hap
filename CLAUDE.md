# Security Safari project instructions

## Purpose

This is a **teaching repo with intentional vulnerabilities**. Students learn security auditing by finding and fixing these issues.

## Override global rules

The following global rules are **intentionally violated** in this project:

- **innerHTML:** Used intentionally as XSS vulnerability for students to find
- **eval():** Used intentionally as code injection vulnerability for students to find
- **Old Vite version:** Used intentionally so `npm audit` finds a CVE

**Do not "fix" these vulnerabilities** - they are the point of the assignment.

## Project structure

```text
security-safari-starter/
├── index.html              # Main app (styled with Tailwind)
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Tailwind configuration
├── src/
│   ├── index.js            # App logic (contains vulnerabilities)
│   ├── config.js           # Config (contains hardcoded secret)
│   └── styles.css          # Tailwind directives
├── docs/
│   ├── INSTRUCTIONS.md     # Student mission and deliverables
│   ├── CHECKLIST.md        # Progress tracker
│   ├── references/         # Audit guides
│   │   ├── FIELD-GUIDE.md
│   │   ├── SPOTTER-TIPS.md
│   │   └── KNOW-YOUR-PREY.md
│   └── tutorials/          # Background reading (optional)
│       ├── intro-to-vite.md
│       ├── tailwind-css.md
│       └── netlify-previews.md
└── reports/                # Planning docs (gitignored)
```

## Tech stack

- Vite ~5.1.0 (intentionally old)
- Tailwind CSS v3 with PostCSS
- Vanilla JavaScript (no framework)

## Safe despite vulnerabilities

- No real credentials or services
- Runs only locally
- Fake API keys that don't connect to anything
