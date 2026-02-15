# README best practices

A good README helps others (and future you) understand a project quickly.

---

## Essential sections

Every project README should include:

1. **Project name and description** - What does this app do? (1-2 sentences)
2. **Quick start** - How to run it locally
3. **Tech stack** - What tools/frameworks are used

---

## Optional sections

Add these if relevant:

- **Features** - What can users do?
- **Project structure** - Where are key files?
- **Scripts** - What npm commands are available?
- **License** - How can others use this code?

---

## Example structure

```markdown
# Project Name

![Badge](https://img.shields.io/badge/Status-Active-brightgreen)

Brief description of what the app does.

## Quick start

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech stack

- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- Vanilla JavaScript

## License

MIT
```

---

## Tips

- **Be concise** - README is a quick reference, not documentation
- **Show, don't tell** - Code examples are clearer than explanations
- **Keep it current** - Update when the project changes
- **Link to details** - Point to docs for deeper info

---

## What NOT to include

- Implementation details (put in code comments)
- Changelog (use git history or CHANGELOG.md)
- Lengthy tutorials (link to separate docs)

---

## Achievement badges

Badges show project status at a glance. [Shields.io](https://shields.io/) generates them for free.

### Where to place them

Put badges at the **top of your README**, right after the title:

```markdown
# Project Name

![Badge 1](url) ![Badge 2](url) ![Badge 3](url)

Brief description...
```

Badges on the same line (no blank line between them) display inline.

### Basic format

```text
https://img.shields.io/badge/LABEL-MESSAGE-COLOR
```

Replace spaces with underscores (`_`) in the URL.

### Security Safari badges

Add these to your README as you complete each fix:

```markdown
![Dependencies](https://img.shields.io/badge/✓_Dependencies-Fixed-228B22)
![Secrets](https://img.shields.io/badge/✓_Secrets-Removed-228B22)
![Git History](https://img.shields.io/badge/✓_Git_History-Cleaned-228B22)
![XSS](https://img.shields.io/badge/✓_XSS-Patched-228B22)
![Code Injection](<https://img.shields.io/badge/✓_eval()-Secured-228B22>)
```

When you've fixed all five:

```markdown
![Big Five](https://img.shields.io/badge/🏆_Big_Five-Complete!-gold)
```

### How they look

![Dependencies](https://img.shields.io/badge/✓_Dependencies-Fixed-228B22)

![Secrets](https://img.shields.io/badge/✓_Secrets-Removed-228B22)

![Git History](https://img.shields.io/badge/✓_Git_History-Cleaned-228B22)

![XSS](https://img.shields.io/badge/✓_XSS-Patched-228B22)

![Code Injection](<https://img.shields.io/badge/✓_eval()-Secured-228B22>)

![Big Five](https://img.shields.io/badge/🏆_Big_Five-Complete!-gold)

### Custom badges

Create your own with this pattern:

```markdown
![Label](https://img.shields.io/badge/LABEL-MESSAGE-COLOR)
```

Common colors: `brightgreen`, `green`, `yellow`, `orange`, `red`, `blue`, `gold`
