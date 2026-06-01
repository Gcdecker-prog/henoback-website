/**
 * Server-only gate for /campaigns — never use NEXT_PUBLIC_* (would ship to the browser bundle).
 * Production: leave unset. Local/internal: CAMPAIGN_PLAYBOOK_ENABLED=true in .env.local only.
 */
export function isCampaignPlaybookEnabled(): boolean {
  return process.env.CAMPAIGN_PLAYBOOK_ENABLED === 'true';
}
