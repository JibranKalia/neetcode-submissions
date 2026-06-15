---
name: "source-command-sync-neetcode"
description: "Pull NeetCode submissions and do all bookkeeping (PROGRESS.md log, ALL-TIME.md ✅, count, phase boundary)"
---

# source-command-sync-neetcode

Use this skill when the user asks to run the migrated source command `sync-neetcode`.

## Command Template

Sync the NeetCode submission tracker and reconcile every bookkeeping doc. This is **idempotent** — run it any time; it only writes what's missing.

## Paths

- Repo: `/Users/jibran.kalia/side/neetcode-submissions`
- Solved submissions: `Data Structures & Algorithms/<slug>/submission-N.js` (a folder exists only after a successful submission — its presence = solved in the 2026 JS run)
- `PROGRESS.md`: `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/PROGRESS.md`
- `ALL-TIME.md`: `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/ALL-TIME.md`

## Steps

1. **Pull latest.** Run `jj git fetch` in the repo (syncs land as plain git commits). Then read the truth source: `git log --pretty=format:'%ad %s' --date=short` and `ls "Data Structures & Algorithms"`.

2. **Build the solved set.** Each subfolder of `Data Structures & Algorithms/` is one solved problem (neetcode.io slug). Get each one's completion date from the earliest `Add: <slug>` commit in `git log`. Map each slug → canonical NeetCode 150 `{Problem Name, Category, Difficulty}` (e.g. `top-k-elements-in-list` → Top K Frequent Elements / Arrays & Hashing / Medium). Slugs that are clearly drafts/harnesses, not real submissions, are skipped — note them.

3. **Find the delta.** Compare the solved set against what's already recorded in PROGRESS.md (date entries) and ALL-TIME.md (`✅` marks). Only act on problems not yet reflected. If everything is already recorded, say "nothing to sync" and stop after the summary.

4. **Update PROGRESS.md** for each new problem:
   - Add `- NC · {Easy|Medium|Hard} — {Problem Name} — {Category}` under the matching `## YYYY-MM-DD` header (create the header if absent; most-recent date on top). Follow the Entry-format conventions in the repo `AGENTS.md` (tabs for sub-bullets, plain `NC`/`IK` tags, no brackets).
   - Recompute the header line `NeetCode 150: N/150 (Easy: e/28, Med: m/101, Hard: h/21) — 2026 JS run, from git log` from the solved set. **This count is the 2026 JS run only** (git-log truth) — NOT all-time exposure. Pre-2026 IK/LC coverage lives in ALL-TIME.md and never feeds this number. Bump `updated:` to today.

5. **Update ALL-TIME.md** for each new problem (it's organized **by source**: `IK 2022`, `LeetCode 2022–24`, `2026 JS run — net-new NC150`, `2026 off-NC150`):
   - If the problem already appears in the IK or LeetCode bucket (i.e. it had a prior solve), append ` ✅` to its line (if not already there) to mark it redone this run.
   - If it's a net-new NC150 problem (no prior solve), add it to the **2026 JS run — net-new NC150** section with its date, and `✅`. If it's off-NC150, add it to the **2026 off-NC150** section.
   - For each newly-synced problem that had a prior solve, surface it in the summary: "↺ {Problem} — you'd solved this before in {tags} (warm restart)."
   - Refresh the headline stat blockquote and the affected section-header counts if they changed: **all-time unique** (`~N / 208 goal` — buckets are disjoint, so sum the section counts), **NC150 ever-touched** (`/150`, prior-solve problems + net-new JS-run problems), and **2026 JS run** (`N/150`, matches the PROGRESS.md header). Bump `updated:`.

6. **Phase-boundary check.** The re-solving phase **already ended 2026-06-06** at `Longest Substring Without Repeating Characters` (the first NC150 problem with no prior solve). There's no single frontier now — most new problems are net-new, but warm restarts still appear (check the IK/LeetCode buckets per problem). If a newly-synced problem *is* a warm restart, flag it (↺) per step 5; no phase-tracker rewrite is needed unless the history itself changes.

7. **Summary.** Print a concise report:
   - New problems synced (with name/category/difficulty/date).
   - Any "seen before" flags (↺) and their source/year.
   - New count `N/150` and the difficulty breakdown delta.
   - Phase status: still re-solving, or just crossed the boundary.
   - Any draft/harness folders skipped, or git-vs-doc discrepancies to reconcile.

Do **not** commit anything unless asked — leave the doc edits in the working tree. PROGRESS.md / ALL-TIME.md live in the Obsidian vault, which is outside this git repo.
