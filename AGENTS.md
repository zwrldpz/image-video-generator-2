<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules
- Advertising tags load only through the shared regional permission gate; X purchase events use authenticated fulfilled live payment details and persisted purchase references to prevent repeats and blocked-event replay.
- Video rows retain exact requested_seconds across generation and resume; full-video playback/export lazily normalizes clips in a browser worker and validates the final MP4 duration, because the server runtime cannot run native media processes. Browser export can be device-memory limited on long videos.
- Load browser-only video export through createClientOnlyFn so SSR never follows the client-only media import.
- Text streams count whitespace-delimited words across chunk boundaries, charge before delivery, and send confirmed deductions/balance as metadata; this keeps billing independent of token estimates and interruption.
- Generation status uses shared CreditPause and GenerationError views across tools to keep customer credit recovery separate from service errors.
- Credit-paused browser requests are saved per authenticated account and tool in local storage; Resume requires explicit action, and workspace AI errors must never open customer checkout.
- Credits are granted only by the payments webhook through fulfill_credit_purchase, atomically inserting the unique provider session/invoice purchase and granting credits so failures roll back and retries cannot lose or duplicate credits.
- Admin access is checked with the has_role database function against the user_roles table, never client-side.
- Customer-published pages live in published_pages with owner-only direct reads; public /s/$slug pages use get_published_page_by_slug for one exact slug and rendered fields only, preventing public record browsing. Publishing is free because credits are spent during generation.
- User notifications are durable rows keyed by user and event, so completion and payment retries cannot create duplicates.
- Branded account and app emails use Lovable managed sending through notify.zayenai.org, so delivery and suppression remain centralized.
- Discount/affiliate codes live in affiliate_codes and are validated server-side via affiliate_discount/claim_affiliate_code, so customers can't invent discounts or steal taken codes.
- Affiliate commissions are rows in affiliate_commissions written only by the payments webhook, unique per payment id, so retries never double-pay; payout status is changed only by admins.
- Customer site backends live in site_* tables (owner-only RLS); published sites reach them only through /api/public/site/$key, which enforces each table's read/write rule server-side, so visitors never get direct database access.
- Unlimited-plan users are a tool_unlocks row with tool "unlimited"; spend_credits skips deduction for them, so every tool needs no special-case billing code.
- Retired packs/plans stay resolvable via getPack/getPlan but checkout only accepts isSellable() ids, so old subscriptions keep renewing without being sold.
- Pricing links preserve the selected sellable product through sign-in, and checkout resolves the embedded session before mounting Stripe so failures are recoverable without iframe promise errors; test/live mode comes only from the client token prefix.
- Vite selects the managed test token for preview and live token for production, failing closed on mismatched prefixes; unrelated account keys must not be mixed with the managed catalog and webhook.
- Customer-site uploads use a shared size, extension, MIME and content-signature validator before storage, so visitors cannot upload executable content disguised as files.
- Direct authenticated profile updates are column-granted only for display_name; credits and daily-claim timestamps remain server-managed so own-row RLS cannot permit balance tampering.
