# Interview Prep

Solving NeetCode 150 problems in JavaScript (natively supported on neetcode.io). Also working through Interview Kickstart material on the side. Many of these problems were solved over a year ago in Ruby — switched to JavaScript on 2026-05-05 and refreshing.

This repo serves two roles:

1. **Auto-synced NC submission tracker** — neetcode.io pushes each successful JavaScript submission to `Data Structures & Algorithms/<problem-slug>/submission-N.js`. Sync is one-way (neetcode.io → here) and triggers only on completion.
2. **Claude Code working directory** — sessions start here so this `CLAUDE.md` and its conventions get loaded.

Companion file (outside this repo):

- `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/PROGRESS.md` — human-readable date log in the Obsidian vault. Captures IK concepts, pitfalls, and any narrative notes that don't fit a code submission.

Language: JavaScript

## Checking what's been completed

When asked "what have I done", "what NC problems have I solved", or anything similar:

1. **Pull latest first**: `jj git fetch` (or `cd /Users/jibran.kalia/side/neetcode-submissions && git log` directly — the syncs land as plain git commits).
2. **`git log` here is canonical for NC completion** — dates and problem slugs come from successful submissions only.
3. **`PROGRESS.md` may lag** — it's a hand-maintained journal, so trust the git log for what's actually solved. But `PROGRESS.md` is canonical for IK material and pitfalls (those don't auto-sync).
4. Reconcile if they disagree: git log is truth for NC; flag the discrepancy so I can update PROGRESS.md.

## Learning style

When teaching me a new concept or testing my understanding:

- **Concrete before abstract.** Walk through a small example with real numbers first (e.g., n=5), then generalize. Don't open with the formula.
- **Hints, not answers.** When I get something wrong, give a hint that points at the mistake — don't show the full solution unless I ask.
- **Test me progressively.** Ask questions in increasing difficulty. Wait for my answer before giving the next.
- **Sanity-check formulas at multiple values of n.** One data point can be a coincidence. Always verify with at least two.
- **Use comparison tables** when two formulas/concepts are easy to confuse (e.g., n(n+1)/2 vs n(n-1)/2).
- **Flag off-by-one risks explicitly.** I'm prone to them.

## Study log

`PROGRESS.md` lives at `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/PROGRESS.md` (Obsidian vault, not this repo). It's the combined log of what I've studied — NeetCode problems and IK concepts, with pitfalls noted. To request review on a past topic, I'll ask "test me on [topic] from PROGRESS.md" or "test me on [date]". Read the file at that path; use the entry's pitfalls list to target weak spots, not just re-test what already clicked.

### Entry format

When adding a new entry, follow these conventions (rendering is optimized for Obsidian, not GitHub):

- **Date headers** are H2 (`## YYYY-MM-DD`), most recent at the top.
- **NeetCode entries**: `- NC · {Easy|Medium|Hard} — {Problem Name} — {Category}`
- **Interview Kickstart entries**: `- IK — {Topic Name}` (no difficulty — IK is concept-based)
- **Sub-bullets** use tabs, not spaces, and appear under the topic to capture: technique, variants practiced, applications, and (importantly) pitfalls hit during the session.
- **Inline code/formulas** wrap in backticks (e.g., `` `n(n+1)/2` ``, `` `j <= i` ``).
- **Plain-text tags, no brackets and no bold** — use `NC` / `IK` literally. Never `[NC]` / `[IK]` (Obsidian renders single brackets as broken wikilinks).
