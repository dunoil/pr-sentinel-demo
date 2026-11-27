# pr-sentinel-demo

Demo target repository for PR Sentinel, the AgentWare 2026 hackathon entry
(Track 5: Developer Workflow). A tiny Node.js codebase with a small test
suite. It exists so the PR Sentinel agent has a real repository to review.

## Run it

```bash
npm install
npm test
npm start
```

## The seeded PR

One seeded pull request is open in this repository: **"Demo PR: dependency
bump, auth tweak, typo and formatting"**. It holds two deliberate changes:

1. A risky change: a dependency version bump in `package.json` with no test
   coverage, plus a change to the authentication helper in `src/auth.js`
   (the constant-time password comparison is replaced with a plain `===`
   comparison).
2. A trivial fix: a typo in a comment in `src/greet.js` and a formatting
   error in `src/index.js`.

## Expected outcome

When PR Sentinel reviews the seeded PR, it should:

- Flag the dependency bump with a line comment (medium severity).
- Flag the authentication helper change with a line comment (high severity:
  security-sensitive path, and the change weakens the password check).
- Note that source code changed with no test file changed.
- Fix the typo in the comment and reformat the file, then push those fixes
  as one commit on the PR branch.
- Never merge anything.
- Post a summary comment describing what it checked, found, and fixed.

The test suite passes before and after the agent's fixes, because the
risky change keeps the existing behavior (the tests do not cover the
timing-safety regression, which is exactly why the agent flags it).
