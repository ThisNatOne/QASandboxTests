A) Test Review

Review this Playwright test.
Focus only on:
1. locator quality
2. readability
3. stability
4. unnecessary waits or weak assertions

Do not rewrite the whole file.
Suggest only 3 concrete improvements and explain why.

B) Page Object Review

Review this Playwright Page Object.
Check:
1. whether responsibilities are correct
2. whether locators belong here
3. whether methods are too big or too small
4. whether naming is clear

Do not rewrite everything.
Suggest only practical improvements for my current level.

C) Test Case Ideas

Based on this page object / test file, suggest 5 realistic Playwright test cases.
Split them into:
- happy path
- negative path
- edge cases

Do not invent UI elements that are not present in the file.
If something is missing, say it clearly.

D) Locator Improvements

I want to improve my Playwright locators.
Based on this code, suggest better locators using this priority:
1. getByRole
2. getByLabel
3. getByPlaceholder
4. getByText
5. getByTestId

Avoid CSS selectors unless really necessary.
Explain why your suggested locator is better.

E) Assertion Review

Review my assertions in this Playwright test.
Tell me:
1. which assertions are strong
2. which assertions are weak
3. what should be asserted instead

Do not rewrite the entire test.
Focus only on assertion quality.

F) Test Refactor

Refactor only this selected fragment of my Playwright test.
Goals:
- improve readability
- keep the same logic
- do not change behavior
- do not add new abstractions unless needed

Show the improved code and briefly explain changes.

G) Where this code belong?

Does this code belong in a Playwright Page Object or in the test file?
For each part, explain:
- keep in Page Object
- keep in test
- move to test data
- move to helper

Keep the answer practical, not theoretical.

H) Test data /users

Based on this test file, suggest what data should be extracted into separate test data files.
Split suggestions into:
- users
- form data
- reusable constants

Do not overengineer the structure.
Keep it suitable for a small Playwright project.

I) Login Review

Review this login/logout Playwright test.
Check:
1. whether the flow is clear
2. whether login verification is strong enough
3. whether logout verification is strong enough
4. whether there is any flaky risk

Suggest 3 concrete improvements only.

J) Generate New based on this test

Based only on the attached file(s), propose one new Playwright test.
Rules:
- do not invent elements that are not visible in the code
- use the same naming style as my project
- keep the test simple
- explain what this test verifies

K) Debug Test

This Playwright test fails.
Analyze the code and the error message.
Tell me:
1. most likely root cause
2. what to check first
3. minimal fix
4. whether the issue is locator, timing, assertion, or app behavior

Do not give 10 possibilities.
Give the most likely explanation first.

L) Playwright config review

This Playwright test fails.
Analyze the code and the error message.
Tell me:
1. most likely root cause
2. what to check first
3. minimal fix
4. whether the issue is locator, timing, assertion, or app behavior

Do not give 10 possibilities.
Give the most likely explanation first.

M) Explain code
Act like a senior QA mentor.
Explain this Playwright code step by step:
- what each part does
- why it is written this way
- what is good
- what is risky

Keep the explanation simple and practical.

N) Do not guess

Do not assume missing files, UI elements, or project structure.
Use only the attached code.
If something is unknown, say clearly that it is unknown.