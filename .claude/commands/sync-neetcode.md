---
description: Pull NeetCode submissions and do all bookkeeping (PROGRESS.md log, SEEN-BEFORE.md ✅, count, phase boundary)
---

Sync the NeetCode submission tracker and reconcile every bookkeeping doc. This is **idempotent** — run it any time; it only writes what's missing.

## Paths

- Repo: `/Users/jibran.kalia/side/neetcode-submissions`
- Solved submissions: `Data Structures & Algorithms/<slug>/submission-N.js` (a folder exists only after a successful submission — its presence = solved in the 2026 JS run)
- `PROGRESS.md`: `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/PROGRESS.md`
- `SEEN-BEFORE.md`: `/Users/jibran.kalia/work/ob-vault/personal/interview-prep/SEEN-BEFORE.md`

## Steps

1. **Pull latest.** Run `jj git fetch` in the repo (syncs land as plain git commits). Then read the truth source: `git log --pretty=format:'%ad %s' --date=short` and `ls "Data Structures & Algorithms"`.

2. **Build the solved set.** Each subfolder of `Data Structures & Algorithms/` is one solved problem (neetcode.io slug). Get each one's completion date from the earliest `Add: <slug>` commit in `git log`. Map each slug → canonical NeetCode 150 `{Problem Name, Category, Difficulty}` (e.g. `top-k-elements-in-list` → Top K Frequent Elements / Arrays & Hashing / Medium). Slugs that are clearly drafts/harnesses, not real submissions, are skipped — note them.

3. **Find the delta.** Compare the solved set against what's already recorded in PROGRESS.md (date entries) and SEEN-BEFORE.md (`✅` marks). Only act on problems not yet reflected. If everything is already recorded, say "nothing to sync" and stop after the summary.

4. **Update PROGRESS.md** for each new problem:
   - Add `- NC · {Easy|Medium|Hard} — {Problem Name} — {Category}` under the matching `## YYYY-MM-DD` header (create the header if absent; most-recent date on top). Follow the Entry-format conventions in the repo `CLAUDE.md` (tabs for sub-bullets, plain `NC`/`IK` tags, no brackets).
   - Recompute the header line `NeetCode 150: N/150 (Easy: e/28, Med: m/101, Hard: h/21)` from the full solved set, and bump `updated:` in the frontmatter to today.

5. **Update SEEN-BEFORE.md** for each new problem:
   - If it's listed under "NC150 problems with a prior solve", append ` ✅` to that line (if not already there).
   - For each newly-synced problem that had a prior solve, surface it in the summary: "↺ {Problem} — you'd solved this before in {tags} (warm restart)."

6. **Phase-boundary check.** The re-solving phase ends at the first NC150 problem with **no** prior solve in SEEN-BEFORE.md. In roadmap order that's `Longest Substring Without Repeating Characters` (Sliding Window #2). If any newly-synced problem is net-new (not in the prior-solve list):
   - Announce it loudly: "🎉 You've left the re-solving phase — {Problem} is net-new ground."
   - Update the phase tracker section in SEEN-BEFORE.md to reflect the new frontier, and bump its `updated:` date.

7. **Summary.** Print a concise report:
   - New problems synced (with name/category/difficulty/date).
   - Any "seen before" flags (↺) and their source/year.
   - New count `N/150` and the difficulty breakdown delta.
   - Phase status: still re-solving, or just crossed the boundary.
   - Any draft/harness folders skipped, or git-vs-doc discrepancies to reconcile.

Do **not** commit anything unless asked — leave the doc edits in the working tree. PROGRESS.md / SEEN-BEFORE.md live in the Obsidian vault, which is outside this git repo.
