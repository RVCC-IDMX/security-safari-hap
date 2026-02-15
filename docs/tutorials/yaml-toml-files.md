# YAML and TOML configuration files

> **Optional reading.** This tutorial explains the configuration file formats used in modern web projects. You don't need to master these to complete the assignment — just understand enough to read them.

Configuration files tell tools how to behave. Two common formats are YAML and TOML.

---

## Why configuration files matter

Instead of hardcoding settings, projects use configuration files to:

- Define build settings
- Set up CI/CD pipelines
- Configure deployment
- Specify project metadata

You'll encounter these files in almost every project.

---

## YAML basics

YAML (YAML Ain't Markup Language) is used by GitHub Actions, Docker Compose, and many other tools.

### Key-value pairs

```yaml
name: Security Check
version: 1.0
enabled: true
```

### Nested structures (indentation matters!)

```yaml
server:
  port: 3000
  host: localhost
```

**Important:** YAML uses spaces for indentation, never tabs. Typically 2 spaces per level.

### Lists

```yaml
# Inline
colors: [red, green, blue]

# Block style
fruits:
  - apple
  - banana
  - cherry
```

### Multi-line strings

```yaml
# Literal block (preserves newlines)
description: |
  This is line one.
  This is line two.

# Folded block (joins lines)
summary: >
  This is a long sentence
  that spans multiple lines
  but becomes one line.
```

### Common YAML in this project

GitHub Actions workflow (`.github/workflows/security-check.yml`):

```yaml
name: Security Check

on:
  pull_request:
    branches: [main]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
```

| Element   | Meaning                          |
| --------- | -------------------------------- |
| `name:`   | Human-readable name              |
| `on:`     | Trigger events                   |
| `jobs:`   | Work to perform                  |
| `steps:`  | List of tasks                    |
| `- name:` | A single step (dash = list item) |

---

## TOML basics

TOML (Tom's Obvious Minimal Language) is used by Netlify, Rust (Cargo), Python (pyproject.toml), and others.

### Assignments

```toml
name = "my-project"
version = "1.0.0"
enabled = true
```

Note: TOML uses `=` instead of `:`, and strings need quotes.

### Tables (sections)

```toml
[server]
port = 3000
host = "localhost"

[database]
url = "postgres://localhost/mydb"
```

Square brackets define sections (called "tables").

### Nested tables

```toml
[build]
command = "npm run build"

[build.environment]
NODE_VERSION = "20"
```

### Arrays

```toml
colors = ["red", "green", "blue"]

# Array of tables
[[plugins]]
name = "plugin-one"

[[plugins]]
name = "plugin-two"
```

### Common TOML: Netlify config

A `netlify.toml` file might look like:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

| Element         | Meaning                 |
| --------------- | ----------------------- |
| `[build]`       | Build settings section  |
| `command`       | Shell command to run    |
| `publish`       | Folder to deploy        |
| `[[redirects]]` | Array of redirect rules |

---

## YAML vs TOML comparison

| Feature    | YAML                   | TOML                      |
| ---------- | ---------------------- | ------------------------- |
| Assignment | `key: value`           | `key = "value"`           |
| Strings    | Quotes optional        | Quotes required           |
| Nesting    | Indentation            | `[section]` headers       |
| Lists      | `- item`               | `["item"]` or `[[table]]` |
| Comments   | `# comment`            | `# comment`               |
| Used by    | GitHub Actions, Docker | Netlify, Cargo, Python    |

---

## Common mistakes

### YAML

```yaml
# Wrong: tabs instead of spaces
server:
  port: 3000    # TAB character here would fail!

# Wrong: inconsistent indentation
server:
  port: 3000
   host: localhost  # 3 spaces instead of 2

# Right
server:
  port: 3000
  host: localhost
```

### TOML

```toml
# Wrong: missing quotes on string
name = my-project

# Wrong: wrong bracket type for array of tables
[plugins]  # This is a single table, not an array

# Right
name = "my-project"

[[plugins]]  # Double brackets for array of tables
```

---

## Reading configuration files

You don't need to memorize syntax. When you see a config file:

1. **Identify the format** — `.yml`/`.yaml` = YAML, `.toml` = TOML
2. **Look for sections** — indentation (YAML) or `[headers]` (TOML)
3. **Find key-value pairs** — the actual settings
4. **Check documentation** — each tool documents its config options

---

## Files in this project

| File                      | Format     | Purpose                  |
| ------------------------- | ---------- | ------------------------ |
| `.github/workflows/*.yml` | YAML       | GitHub Actions workflows |
| `netlify.toml`            | TOML       | Netlify build settings   |
| `package.json`            | JSON       | Node.js project config   |
| `postcss.config.js`       | JavaScript | PostCSS plugins          |
| `tailwind.config.js`      | JavaScript | Tailwind settings        |
| `vite.config.js`          | JavaScript | Vite build settings      |

Note: This project uses JavaScript config files for Vite/Tailwind/PostCSS. Many tools support both formats — JS configs allow dynamic logic, while YAML/TOML are simpler.

---

## Learn more

- [YAML specification](https://yaml.org/spec/1.2.2/)
- [TOML specification](https://toml.io/)
- [Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/)
- [Learn TOML in Y minutes](https://learnxinyminutes.com/docs/toml/)
