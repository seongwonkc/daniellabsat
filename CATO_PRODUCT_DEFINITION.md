# Cato — Product Definition

> B2B academy management software for SAT/AP/TOEFL prep academies.
> Named for the Roman Stoic philosopher Cato — discipline, rigor, structure.
> Built on daniellabsat. Productized for the market.
> Part of the Vindica corporate family: Vindica > {Seneca, OCEAN, VECTOR, Cato}
>
> Status: pre-build. Brain (Seneca) must be functional before Cato V2+ development begins.
> V1 (operations only) can ship independently.
>
> Last updated: April 2026.

---

## What Cato Is

Cato is academy management software built specifically for SAT/AP/TOEFL prep academies.

It beats existing alternatives (Google Docs + generic Korean 학원관리시스템) because it is
purpose-built for the test-prep relationship: score tracking, section-level diagnostics,
teacher-student assignment, session notes, cohort analytics, and parent reporting — all
in one place, all tuned for the data that actually matters in this market.

Cato is NOT a student-facing AI tutor. The Vindica brain (Seneca) is invisible
underneath. Students never interact with Cato directly. Cato is for tutors, admins,
and academy directors.

---

## Who Uses Cato

**Primary users:**
- Academy director / owner (Daniel-level)
- Admin staff
- Tutors (RW, Math, TA)

**Secondary users (limited, read-only):**
- Parents (score reports, progress summaries)

**Not users:**
- Students (students use VECTOR, future Seneca B2C app, or classroom)

---

## Where Cato Fits in Vindica

```
Vindica (parent corp)
├── Seneca        — AI brain + B2C consumer app (post-secondary, lifelong)
├── VECTOR        — B2C student limb (ages 13-18, SAT/AP/TOEFL practice)
├── OCEAN         — B2C student limb (ages 5-12, early learning identity)
└── Cato          — B2B academy limb (tutor/admin-facing, feeds brain invisibly)
```

Both VECTOR and Cato feed behavioral and academic data to the Seneca brain:
- VECTOR sees the student's raw practice behavior (answers, timing, engagement)
- Cato sees the student through the tutor's eyes (notes, score projections, flags)

Brain combines both data streams. When student eventually uses Seneca B2C consumer
app, the brain already knows them from both angles.

Cato is a distribution channel as much as a product. Every student who passes through
a Cato-powered academy is a warm lead for Seneca B2C when they age out of test prep.

---

## The Market

**Current alternatives Korean test-prep academies use:**
- Google Docs + Sheets + KakaoTalk (fragmented, no analytics, no history)
- Generic Korean 학원관리시스템 (캠퍼스21, 학원전산 etc.) — built for K-12 general
  education, not test prep specifically
- Custom Excel sheets per tutor (zero institutional memory)
- Nothing (very common at small academies)

**Why Cato wins:**
- Only academy software built specifically for Digital SAT/AP/TOEFL data model
- Score tracking, section diagnostics, adaptive mock tests already built
- Teacher performance analytics tied to actual student score outcomes
- Korean-parent-friendly reporting

**Market size (rough):**
- Korea: ~10,000+ test-prep focused hagwons (SAT/AP/TOEFL subset is smaller)
- Key pocket: premium international-track academies, ₩300-800K/student/month
- Expansion: Korean diaspora academies in US, Canada, Australia

---

## What's Already Built (daniellabsat)

Codex confirmed these features exist and are in production at DanielLab:

- Student intake flow (baseline scores, domain ratings, study habits, priority generation)
- Student login (student code + PIN)
- Student portal (overview, practice, progress tabs)
- Domain-based SAT practice drills (question bank, explanations, flagging, timing)
- Full adaptive Digital SAT mock tests (3 complete tests, difficulty branching, score calc)
- Per-question response logging (domain, timing, correctness)
- Admin dashboard (student CRM, cohort filtering, detail panel, status management)
- Teacher roster and management (roles: RW, Math, TA)
- Session notes (session number, projected score, progress flag, teacher feedback)
- Teacher performance analytics (ratings, logs, notes-per-month, score delta stats)
- Cohort analytics (counts, avg starting score, avg latest score, avg delta)
- Assignment completion metrics

**Architecture:** Vanilla HTML/JS, Supabase REST directly from browser, Netlify hosting.
No backend functions. No AI. No tests currently.

---

## Productization Gaps (daniellabsat → Cato)

What needs to change before Cato ships to first paying academy outside DanielLab:

### Critical (block any external deployment)
- `config.js` with production Supabase key checked into git — rotate key, gitignore file
- `ADMIN_PIN: '1234'` hardcoded in production — fix immediately
- Missing `terms.html` and `privacy.html` — broken links in production
- Missing `daniellab_admin.html` — broken link in intake flow
- No SQL schema files in repo — write migration files matching production tables

### Required for V1 (multi-tenancy)
- Add `academies` table; scope all other tables with `academy_id`
- RLS policies scoped by academy
- Remove all `daniellab_` prefixes from filenames, routes, branding
- Replace hardcoded DanielLab branding with tenant config
- Academy onboarding flow (self-registration or admin-provisioned)
- package.json + basic test suite (0 tests currently)

### Required for V2 (Vindica brain connection)
- Netlify functions layer (behavioral data routes through Seneca SDK gateway)
- `seneca_limb_bridges` entry for cato limb
- Per-question responses feeding Vindica brain
- AI-generated session summaries for tutors (staff-facing only)
- AI-generated parent progress reports in Korean

### Deferred to V3+
- Billing/payment tracking
- Curriculum/resource library
- Parent portal (login + read-only access)
- Teacher login (currently no teacher auth flow)
- Mobile optimization
- API for third-party integrations
- White-label custom domains per academy

---

## Roadmap

### Cato V0 — Triage (1-2 weeks, do this now regardless of other plans)
Security and broken-link fixes on the live DanielLab deployment.
- Rotate Supabase anon key
- Remove config.js from git, add to .gitignore
- Fix ADMIN_PIN
- Add terms.html and privacy.html stubs
- Fix intake broken link
- Write SQL schema documentation (migration files)

### Cato V1 — Productized Operations (4-8 weeks after Seneca brain functional)
Same features as daniellabsat, works for any academy.

New:
- Multi-tenant data model (academies table, academy_id everywhere)
- RLS policies scoped by academy
- Academy onboarding flow
- Branding/whitelabel (name, logo, colors configurable)
- Renamed routes (no daniellab_ prefix)
- Package.json + test suite
- Basic admin documentation

Pricing: ₩200K base + ₩10K/student/month
Cost to serve: ~₩1K/student/month (no AI)
Margin: ~90% gross

### Cato V2 — Brain-Connected (8-16 weeks after angel/TIPS funding)
Vindica brain connection + staff-facing AI tools.

New:
- Netlify functions layer
- Cato as registered Vindica limb (seneca_limb_bridges)
- Behavioral data routing to Seneca brain
- AI session summaries (tutor-facing: auto-draft after session note entry)
- AI parent reports (auto-generated weekly in Korean, admin reviews before send)
- Score projection engine (ML-based, uses response patterns)

Pricing: ₩200K base + ₩15K/student/month (Plus tier with AI features)
Cost to serve: ~₩3-5K/student/month (staff-facing AI only, bounded)
Margin: ~70% gross

### Cato V3 — Enterprise (post-Seed)
Scale and institutional features.

New:
- Billing/payment tracking per student
- Curriculum and resource library
- Parent portal (login + read-only progress view)
- Teacher login and teacher-specific views
- Multi-academy chain support (franchise management)
- Custom domain per academy

Pricing: negotiated per enterprise account
---

## Pricing Strategy

### Philosophy
Price Cato to be profitable from day 1. No free design partners at full feature set
— variable cost is near-zero but time and support cost is real.

Trial model: 60-day paid pilot at 50% discount. Not free.

### Tier Structure

**Cato Standard (V1)**
₩200,000 base/month + ₩10,000/student/month

- Student CRM and intake
- Score tracking and session notes
- Teacher management
- Cohort analytics
- Practice and mock test runner
- Basic parent reporting (manual)

**Cato Plus (V2)**
₩200,000 base/month + ₩15,000/student/month

- Everything in Standard
- AI session summaries for tutors
- Auto-generated Korean parent reports
- Vindica brain connection (longitudinal profile building begins)
- Score projection engine

**Cato Enterprise (V3)**
Negotiated. Typically ₩500K-1M base + ₩20K/student.

- Everything in Plus
- Billing/payment tracking
- Parent portal
- Custom domain + full white-label
- Priority support

### Sample math (50-student academy, Plus tier)
₩200K + ₩15K × 50 = ₩950K/month
Academy charges students ₩300-500K/month each
Cato = ~0.6-1% of revenue. Defensible.

### Revenue targets
- 5 academies × 50 students × ₩950K = ₩4.75M/month (Year 1 end)
- 20 academies × 80 students × ₩1.4M = ₩28M/month (Year 2 end)
- 80 academies × 100 students × ₩1.7M = ₩136M/month (Year 3 end, ~₩1.6B ARR)

---

## Distribution Strategy

Cato's distribution advantage is Kevin's existing network. Not a cold-sales product.

**Tier 1 — Existing relationships (months 0-6)**
- DanielLab (Daniel) — design partner, already using daniellabsat
- Former students' parents with academy connections
- Tutoring network colleagues

**Tier 2 — Adjacent professional network (months 3-9)**
- Other hagwon owners in Kevin's circle
- International school teachers and coordinators
- SAT prep colleagues in Korea and Korean diaspora

**Tier 3 — Korean education media (months 6-12)**
- 강남엄마 카페, 베이비키즈맘, 영재 커뮤니티
- Parent influencers in test-prep circles
- Naver Café communities for US college admissions

**Tier 4 — Institutional (months 9-18)**
- Named hagwon chains (메가스터디, 시대인재, 종로학원)
- International schools (KIS, SIS, Dwight, Chadwick)
- Korean private K-12 (휘문, 대원, 민사고)

**The funnel mechanic:**
Every Cato student is a warm Seneca B2C lead when they finish test prep.
Academy optionally receives referral commission on Seneca B2C conversions.
This aligns academy incentives with Vindica's B2C growth.

---

## The Seneca Bridge

When a Cato student finishes test prep and transitions to Seneca B2C consumer app:

1. Student's Cato behavioral history (responses, session notes, score progression)
   is already stored and linked via seneca_limb_bridges.
2. Seneca brain backfills depth analysis on historical data.
3. Seneca already "knows" the student before first session.
4. First session starts from context, not cold start.

This is the product-level version of the Vindica funnel mechanic. It's the reason
the "wow, it remembers me" moment lands harder for Cato alumni than cold Seneca users.

---

## What Must Be True Before Building V1

Gating conditions. Don't start V1 until these are met:

1. Seneca brain (Memory layer) functional in alpha — even rough. Data needs somewhere
   to go before wiring Cato to it makes sense.
2. VECTOR_USE_SDK flag flipped in production (Day 15) and stable for 30 days.
   Proves the limb architecture works before adding a second limb.
3. V0 triage complete on daniellabsat. Security fixes shipped.
4. At least one Cato customer committed (LOI or paid pilot agreement from Daniel
   or another academy). Build to a real customer, not into the void.

---

## Open Questions (to resolve before V1 build)

- Teacher login: does V1 need it? Currently no teacher auth flow. Admin-only
  for V1 is simpler. Teacher login moves to V2 or V3.
- Parent report delivery: email or KakaoTalk? KakaoTalk is more Korean-native
  but requires KakaoTalk business API setup. Email is simpler for V1.
- Student access to Cato: V1 says no student login to Cato. They use VECTOR for
  practice. But some academies might want integrated student portal. Defer to V2.
- Pricing currency: KRW for Korean market, USD for diaspora market. Same product,
  different billing config. V1 is KRW only.
- Franchise support: chain academies with multiple branches. How does the data model
  handle sub-academy grouping under one owner? V3 problem, but schema should not
  block it.

---

## Updates Log

**April 2026 — Initial document.** Built from conversation with Claude (Opus).
Ground-truth architecture confirmed by Codex reconnaissance of daniellabsat repo.
Codex confirmed: 61 files, 10 tables inferred from client code, 8 user-facing pages,
no backend functions, no AI, no tests, clearly single-tenant. Security issues
(config.js checked in, ADMIN_PIN 1234) flagged as V0 critical fixes.

---

*Cato is the institutional distribution arm of Vindica. Every Cato academy is a
pipeline of students to Seneca. Build it well, keep it profitable, and let the
funnel do the work.*
