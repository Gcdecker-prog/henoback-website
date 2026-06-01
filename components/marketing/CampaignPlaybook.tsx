'use client';

import { useState } from 'react';
import {
  buildExampleAssessmentHandoff,
  buildExampleGtmHandoff,
  buildInboundCampaignUrl,
  landingPages,
  type CampaignLinkParams,
} from '@/lib/landing-pages';
import { GTM_UTM_DEFAULTS } from '@/lib/gtm-links';
import { cn } from '@/lib/cn';

const EXAMPLE_PARAMS: CampaignLinkParams = {
  medium: 'linkedin',
  campaign: 'q1_consulting',
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-neutral-500">{label}</span>
        <button
          type="button"
          onClick={copy}
          className="text-xs font-semibold text-heno-orange-600 hover:text-heno-orange-700"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <code className="block break-all rounded-lg bg-neutral-100 px-3 py-2 text-[11px] leading-relaxed text-neutral-800">
        {value}
      </code>
    </div>
  );
}

export function CampaignPlaybook() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-heno-orange-500/15 bg-heno-orange-50/40 px-5 py-4 text-sm text-neutral-700">
        <p className="font-medium text-neutral-900">How to use this page</p>
        <p className="mt-2 leading-relaxed">
          Use <strong>Inbound campaign URLs</strong> in ads and email. When someone converts, GTM
          receives <code className="text-xs">utm_source={GTM_UTM_DEFAULTS.source}</code>, your
          campaign params, plus <code className="text-xs">landing_page</code> and{' '}
          <code className="text-xs">utm_content</code> from the button they clicked.
        </p>
      </div>

      <ul className="space-y-6">
        {landingPages.map((page) => {
          const inbound = buildInboundCampaignUrl(page.path, EXAMPLE_PARAMS);
          const gtm = buildExampleGtmHandoff(page.path, `${page.slug}-consultation`, EXAMPLE_PARAMS);
          const assessment = buildExampleAssessmentHandoff(page.path, EXAMPLE_PARAMS);

          return (
            <li
              key={page.path}
              className={cn(
                'rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_12px_40px_-20px_rgba(23,23,23,0.08)] sm:p-6',
              )}
            >
              <h2 className="text-h3 font-semibold text-neutral-900">{page.label}</h2>
              <p className="mt-1 font-mono text-xs text-neutral-500">{page.path}</p>
              <div className="mt-4 space-y-4">
                <CopyField label="Inbound campaign URL (use in ads)" value={inbound} />
                <CopyField label="Example GTM intake after CTA (for QA)" value={gtm} />
                <CopyField label="Example assessment handoff" value={assessment} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
