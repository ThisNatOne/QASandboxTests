# QA Sandbox — Playwright Test Automation Project

A personal sandbox project for practising and developing test automation skills using **Playwright + TypeScript**, covering both UI (end-to-end) and API testing. Built against a locally running full-stack application.

This project also serves as a practical environment for experimenting with **AI-assisted QA workflows** — using local LLMs (via Ollama) to support test analysis, edge-case generation, and test quality review.

---

## Tech Stack

- [Playwright](https://playwright.dev/) — test automation framework
- TypeScript
- Page Object Model (POM) pattern
- HTML Reporter
- Local LLM integration via [Ollama](https://ollama.com/) (Qwen2.5-Coder, Mistral)

---

## Project Structure

```
├── tests/
│   ├── login.spec.ts           # Login and logout flow
│   ├── orders.spec.ts          # Order creation (UI)
│   ├── contact-form.spec.ts    # Contact form submission
│   ├── home.spec.ts            # Home page checks
│   ├── features-testing.spec.ts
│   └── api/
│       ├── users.spec.ts       # API: GET /users with and without auth token
│       └── orders.spec.ts      # API: GET /orders with auth token
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── OrdersPage.ts
├── test-data/
│   ├── users.ts                # Test user credentials and contact data
│   └── testData.ts
├── docs-AI/
│   └── ai-prompts-playwright.md   # Prompt library for AI-assisted QA (see below)
└── playwright.config.ts
```

---

## Test Coverage

### UI Tests
| Test | Description |
|------|-------------|
| Login / Logout | Valid credentials, dashboard verification, logout flow |
| Create Order | Form submission, status dropdown, order visibility |
| Contact Form | Field input, successful submission message |

### API Tests
| Endpoint | Scenario |
|----------|----------|
| `POST /api/auth/login` | Valid credentials return 200 + JWT token |
| `GET /api/users` | Returns user list with correct schema (authenticated) |
| `GET /api/users` | Returns 401 without token |
| `GET /api/orders` | Returns orders list with correct schema (authenticated) |

---

## Running the Tests

**Prerequisites:** Node.js, npm, a locally running app on `http://localhost:5173` and API on `http://localhost:4000`.

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run specific file
npx playwright test tests/login.spec.ts

# Run API tests only
npx playwright test tests/api/

# Open HTML report
npx playwright show-report
```

---

## AI-Assisted QA Workflow

The `docs-AI/ai-prompts-playwright.md` file contains a structured prompt library used with local LLMs (Qwen2.5-Coder via Ollama) to support QA analysis tasks without sending code to external APIs.

**Use cases covered by the prompt library:**

- **Test Review** — locator quality, stability, assertion strength
- **Edge Case Generation** — based on existing page objects and test files
- **Page Object Review** — responsibility separation, naming, locator placement
- **Locator Improvements** — priority-based suggestions (getByRole → getByLabel → etc.)
- **Test Refactoring** — readability improvements without changing behaviour
- **Assertion Review** — identifying weak vs strong assertions
- **Debug Assistance** — root cause analysis for failing tests
- **New Test Generation** — proposing tests based only on existing code (no invented elements)

This setup reflects a **privacy-conscious approach** suited to regulated environments: all LLM inference runs locally, no code or test data leaves the machine.

---

## Key Design Decisions

- **Page Object Model** keeps locators and interactions separate from test logic
- **Test data separation** (`test-data/`) avoids hardcoded values in specs
- **API tests use real auth flow** — login first, extract token, use in subsequent requests
- **Local LLM** preferred over cloud AI tools for confidentiality

---

## Status

Active sandbox — regularly updated as new patterns and AI-assisted approaches are explored.
