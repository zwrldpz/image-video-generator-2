# Roadmap

- [x] Simplify the Namecheap shared-hosting export with a Node startup file, build helper, configuration checklist and step-by-step cPanel instructions (233-file v2 ZIP; syntax, missing-settings safeguards and archive integrity checked; no cPanel deployment/build verified)
- [ ] Complete standalone cPanel AI/payment/account migration (blocked by replacement provider/backend configuration and access to the user's hosting; managed credentials cannot be exported)

- [x] Deliver a clean full-website source ZIP with Namecheap cPanel compatibility instructions (230 files; archive integrity/exclusions checked; secrets, customer data, repository metadata, dependencies and generated build output excluded; source-only, not a verified cPanel deployment)

- [x] Publish the $1/100-credit pack to zayenai.org and verify live checkout availability (published homepage returned 200; signed-in live Stripe form showed $1.00 and 100 credits with no test mode or runtime errors; no payment submitted)

- [x] Add $1 one-time pack granting 100 credits, register Stripe product, test pricing and authenticated sandbox checkout ($1.00 / 100 credits confirmed; no payment made; live sync requires publishing)
- [x] Remove persistent homepage Advertising settings button; preserve privacy-page withdrawal and all X events (browser verified; 23 tests passed)

- [x] Connect X purchase-complete event to confirmed live checkout with deduplication, regional consent and privacy disclosure; 9 tests and mocked browser allowed/blocked/withdrawal checks passed
- [ ] Verify live X purchase receipt after publishing (live zayenai.org checkout checked: new event and Advertising settings are not deployed; requires publishing then owner-entered real payment details; fixture checks are not real purchases)

- [x] Store exact requested video duration and support seconds, minutes and hours
- [x] Assemble completed clips into one full-length MP4 with a full-video player and download
- [x] Verify a two-clip seven-second export and MP4 download; validate complete file decoding
- [ ] Verify a generated one-hour video and browser playback end to end (no completed videos on tested account; test Chromium lacks H264/AAC playback; long browser exports remain device-memory limited and reliable all-device hour exports need an external media processor)

- [x] Fix credit balance tampering and unsafe customer-site uploads before publishing
- [x] Enable production live checkout while keeping preview payments in test mode
- [x] Request publishing Pro, Elite and Legendary live prices (scheduled; deployment and catalog sync not yet confirmed)
- [ ] Verify a real payment and resulting credits (requires owner-entered payment details)

- [x] Fix atomic purchase credit fulfillment and accurate checkout status/recovery

- [x] Connect every current pricing option to token-selected test/live Stripe checkout; preserve selections through sign-in and handle checkout failures
- [x] Request publishing updated pricing to sync missing live prices
- [ ] Verify completed test purchase, 4,500 Pro credits and 25 daily bonus (Stripe form stayed processing after two complete submissions; requires manual preview test)

- [x] Make displayed text usage match actual balance deductions and pause at zero with explicit Resume

- [x] Gate 5 free daily credits behind an active paid plan (welcome 50 stays free for everyone)
- [x] Increase credit consumption across all tools (chat, goals, site builder, coder, images; video ladder unchanged per user's explicit pricing)
- [x] Admin dashboard: grant/revoke tool unlocks, cancel/reactivate customer plans
- [x] Admin-only pricing page (/admin-pricing) with rates, plans, packs, unlocks, retired products
- [x] Show the $10k Unlimited plan on the Home Screen pricing
- [x] Fix: unlimited check in spend_credits now environment-scoped; tool_unlocks CHECK allows 'unlimited'

## GitHub export (Nov 22, 2026)
- [x] Created ZayenAi-github.zip (265 files) with GITHUB-SETUP.md and blank .env.example; excluded .env keys, .git, node_modules, build output.
- [ ] Create revised GitHub ZIP including an index.html launcher and export-only ignore-file renames to git and prettier; check archive integrity and secret exclusions.
