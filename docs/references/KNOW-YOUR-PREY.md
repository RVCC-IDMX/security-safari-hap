# Know your prey: AI blind spots

AI assistants are powerful tools, but they have predictable weaknesses. Understanding these helps you use AI effectively AND protects you from blindly trusting AI-generated code.

## Why AI suggests vulnerable code

### The training data problem

AI models learn from existing code on the internet. This creates several issues:

**Old code, old patterns**

Training data has a cutoff date. The AI might:

- Recommend deprecated APIs
- Miss recent security best practices
- Not know about CVEs published after training
- Suggest patterns that were secure in 2020 but not today

**Example:** An AI might suggest an old sanitization library that has since been found vulnerable.

**Popularity over security**

AI learns from what's common, not what's best. If millions of tutorials use `innerHTML`, the AI will suggest it too.

**Example:** Stack Overflow is full of `innerHTML` examples because it's easy to explain. AI learns this pattern even though `textContent` is usually safer.

**Tutorial code isn't production code**

Tutorials prioritize clarity over security. They:

- Skip error handling
- Hardcode credentials for simplicity
- Use `eval()` to demonstrate concepts
- Ignore edge cases

AI trained on tutorials will reproduce these shortcuts.

## Specific blind spots

### 1. innerHTML and XSS

**What AI might suggest:**

```javascript
element.innerHTML = userInput;
```

**Why it suggests this:**

- Millions of tutorials use innerHTML
- It works and is easy to understand
- Security implications require context the AI might not have

**What you should do instead:**

```javascript
element.textContent = userInput; // Safe for text
```

Or use a sanitization library like DOMPurify for HTML content.

### 2. eval() and code injection

**What AI might suggest:**

```javascript
const result = eval(userExpression);
```

**Why it suggests this:**

- It's the "obvious" solution for dynamic code execution
- Tutorials use it to teach JavaScript evaluation
- Safer alternatives are more complex to explain

**What you should do instead:**

```javascript
// For math, use a safe parser
import { evaluate } from "mathjs";
const result = evaluate(userExpression);
```

### 3. Hardcoded secrets

**What AI might suggest:**

```javascript
const API_KEY = "sk_live_abc123";
fetch(url, { headers: { Authorization: API_KEY } });
```

**Why it suggests this:**

- Tutorials hardcode keys for simplicity
- The AI doesn't know this code will be committed
- Environment variables require more setup to explain

**What you should do instead:**

```javascript
// Use environment variables
const API_KEY = import.meta.env.VITE_API_KEY;
```

### 4. Outdated dependencies

**What AI might suggest:**

```bash
npm install some-package@2.0.0
```

**Why it suggests this:**

- That version was current when training data was collected
- AI can't check npm for latest versions
- It doesn't know about CVEs published after training

**What you should do instead:**

Always check:

```bash
npm audit
npm outdated
```

### 5. Git mistakes

**What AI might NOT catch:**

- Secrets committed then "deleted" (still in history)
- Sensitive files that should be in .gitignore
- Overly permissive .gitignore patterns

**Why it misses this:**

- Git history is stateful context the AI might not see
- Checking history requires running commands, not just reading code

**What you should do:**

```bash
git log --all -- "*.env"
git log --diff-filter=D --summary  # Show deleted files
```

## The confidence trap

AI assistants sound confident even when wrong. They will:

- State incorrect information with certainty
- Recommend insecure patterns without warnings
- Miss vulnerabilities and say "this code looks secure"
- Provide "fixes" that introduce new vulnerabilities

**Never trust "I reviewed this code and found no issues."**

The absence of a warning is not proof of security.

## How to use AI safely

### DO

- Use AI to find patterns (grep-like searches)
- Ask AI to explain what vulnerabilities mean
- Use AI to generate boilerplate you'll review
- Ask AI to suggest where to look for issues

### DON'T

- Trust "no vulnerabilities found"
- Copy-paste AI code without review
- Assume AI knows about recent CVEs
- Let AI be your only security check

## The student's takeaway

**You are the security check.**

AI is a powerful spotter, but it has blind spots. Your job is to:

1. Understand why AI makes mistakes
2. Verify everything AI suggests
3. Know the secure patterns yourself
4. Check AI's work against current best practices

The goal isn't to avoid AI - it's to use it wisely while maintaining your own security knowledge.

## Further reading

- OWASP Top 10: https://owasp.org/www-project-top-ten/
- CWE Top 25: https://cwe.mitre.org/top25/
- npm audit documentation: https://docs.npmjs.com/cli/audit
- GitHub secret scanning: https://docs.github.com/en/code-security/secret-scanning
