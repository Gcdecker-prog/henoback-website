/**
 * Profit and Loss — Summary YTD by Month
 * Structure and labels from the Monthly Reporting Package screenshot.
 * Values are representative monthly actuals for the marketing preview.
 */

export const standardPlReportMeta = {
  packageTitle: 'Monthly Reporting Package',
  reportTitle: 'Profit and Loss-Summary YTD by Month',
  asOf: '12/31/2041',
  locationFilter: '1-Location Summary',
  timestamp: '06/15/2026 10:22:54',
} as const;

export type PlPeriodKey = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'ytd';

export const standardPlPeriods: readonly {
  key: PlPeriodKey;
  label: string;
  shortLabel: string;
}[] = [
  { key: 'jan', label: 'Month Ending 01/31/2041', shortLabel: 'Jan' },
  { key: 'feb', label: 'Month Ending 02/28/2041', shortLabel: 'Feb' },
  { key: 'mar', label: 'Month Ending 03/31/2041', shortLabel: 'Mar' },
  { key: 'apr', label: 'Month Ending 04/30/2041', shortLabel: 'Apr' },
  { key: 'may', label: 'Month Ending 05/31/2041', shortLabel: 'May' },
  { key: 'jun', label: 'Month Ending 06/30/2041', shortLabel: 'Jun' },
  { key: 'ytd', label: 'Year To Date 12/31/2041', shortLabel: 'YTD' },
] as const;

export type PlValues = Record<PlPeriodKey, number | null>;

export type PlRowKind = 'section' | 'line' | 'subtotal' | 'total' | 'percent';

export type PlReportRow = {
  id: string;
  label: string;
  kind: PlRowKind;
  depth: number;
  values: PlValues;
  defaultExpanded?: boolean;
  children?: readonly PlReportRow[];
};

function v(
  jan: number | null,
  feb: number | null,
  mar: number | null,
  apr: number | null,
  may: number | null,
  jun: number | null,
  ytd: number | null,
): PlValues {
  return { jan, feb, mar, apr, may, jun, ytd };
}

/** Hierarchical P&L — matches screenshot chart of accounts */
export const standardPlReportRows: readonly PlReportRow[] = [
  {
    id: 'revenues',
    label: 'Revenues',
    kind: 'section',
    depth: 0,
    values: v(null, null, null, null, null, null, null),
    defaultExpanded: true,
    children: [
      {
        id: 'recurring-revenues',
        label: 'Recurring Revenues',
        kind: 'section',
        depth: 1,
        values: v(null, null, null, null, null, null, null),
        defaultExpanded: true,
        children: [
          {
            id: 'recurring-cat-1',
            label: 'Recurring Category 1',
            kind: 'line',
            depth: 2,
            values: v(12450, 13120, 12880, 13200, 13540, 13890, 79080),
          },
          {
            id: 'recurring-cat-2',
            label: 'Recurring Category 2',
            kind: 'line',
            depth: 2,
            values: v(8920, 9105, 9240, 9380, 9510, 9640, 55795),
          },
          {
            id: 'recurring-cat-3',
            label: 'Recurring Category 3',
            kind: 'line',
            depth: 2,
            values: v(6180, 6320, 6410, 6550, 6680, 6720, 38860),
          },
          {
            id: 'recurring-cat-4',
            label: 'Recurring Category 4',
            kind: 'line',
            depth: 2,
            values: v(4210, 4350, 4280, 4420, 4510, 4590, 26360),
          },
          {
            id: 'recurring-discounts',
            label: 'Recurring Discounts',
            kind: 'line',
            depth: 2,
            values: v(-420, -380, -410, -395, -420, -440, -2465),
          },
          {
            id: 'total-recurring',
            label: 'Total Recurring Revenues',
            kind: 'subtotal',
            depth: 2,
            values: v(31340, 32515, 32400, 33155, 33820, 34400, 197630),
          },
        ],
      },
      {
        id: 'nonrecurring-revenues',
        label: 'Non-recurring Revenues',
        kind: 'section',
        depth: 1,
        values: v(null, null, null, null, null, null, null),
        defaultExpanded: false,
        children: [
          {
            id: 'fixed-fee',
            label: 'Fixed Fee Revenue',
            kind: 'section',
            depth: 2,
            values: v(null, null, null, null, null, null, null),
            children: [
              {
                id: 'fixed-fee-cat-1',
                label: 'Fixed Fee Category 1',
                kind: 'line',
                depth: 3,
                values: v(5420, 5680, 5510, 5790, 5920, 6010, 34330),
              },
              {
                id: 'fixed-fee-cat-2',
                label: 'Fixed Fee Category 2',
                kind: 'line',
                depth: 3,
                values: v(3180, 3290, 3340, 3410, 3480, 3520, 20220),
              },
              {
                id: 'fixed-fee-discounts',
                label: 'Fixed Fee Discounts',
                kind: 'line',
                depth: 3,
                values: v(-180, -160, -175, -170, -185, -190, -1060),
              },
              {
                id: 'total-fixed-fee',
                label: 'Total Fixed Fee Revenue',
                kind: 'subtotal',
                depth: 3,
                values: v(8420, 8810, 8675, 9030, 9215, 9340, 53490),
              },
            ],
          },
          {
            id: 'time-material',
            label: 'Time & Material Revenue',
            kind: 'section',
            depth: 2,
            values: v(null, null, null, null, null, null, null),
            children: [
              {
                id: 'tm-cat-1',
                label: 'Time & Material Category 1',
                kind: 'line',
                depth: 3,
                values: v(6840, 7120, 6980, 7240, 7380, 7510, 43070),
              },
              {
                id: 'tm-cat-2',
                label: 'Time & Material Category 2',
                kind: 'line',
                depth: 3,
                values: v(4520, 4680, 4610, 4790, 4880, 4950, 28430),
              },
              {
                id: 'tm-discounts',
                label: 'Time & Material Discounts',
                kind: 'line',
                depth: 3,
                values: v(-220, -210, -215, -205, -220, -225, -1295),
              },
              {
                id: 'total-tm',
                label: 'Total Time & Material Revenue',
                kind: 'subtotal',
                depth: 3,
                values: v(11140, 11590, 11375, 11825, 12040, 12235, 70205),
              },
            ],
          },
          {
            id: 'total-nonrecurring',
            label: 'Total Non-recurring Revenues',
            kind: 'subtotal',
            depth: 2,
            values: v(19560, 20400, 20050, 20855, 21255, 21575, 123695),
          },
        ],
      },
      {
        id: 'third-party',
        label: '3rd Party Revenue',
        kind: 'section',
        depth: 1,
        values: v(null, null, null, null, null, null, null),
        defaultExpanded: false,
        children: [
          {
            id: 'total-third-party',
            label: 'Total 3rd Party Revenue',
            kind: 'subtotal',
            depth: 2,
            values: v(4280, 4410, 4350, 4520, 4610, 4680, 26850),
          },
        ],
      },
      {
        id: 'other-operating',
        label: 'Other Operating Revenue',
        kind: 'line',
        depth: 1,
        values: v(1240, 1310, 1280, 1350, 1380, 1410, 7970),
      },
    ],
  },
  {
    id: 'total-revenues',
    label: 'Total Revenues',
    kind: 'total',
    depth: 0,
    values: v(56420, 58635, 58080, 59880, 61065, 62065, 356145),
  },
  {
    id: 'cost-of-sales',
    label: 'Cost of Sales',
    kind: 'section',
    depth: 0,
    values: v(null, null, null, null, null, null, null),
    defaultExpanded: false,
    children: [
      {
        id: 'direct-cos',
        label: 'Direct COS',
        kind: 'section',
        depth: 1,
        values: v(null, null, null, null, null, null, null),
        children: [
          {
            id: 'cos-recurring',
            label: 'Cost of Sales Recurring',
            kind: 'line',
            depth: 2,
            values: v(9840, 10210, 10120, 10440, 10620, 10780, 62010),
          },
          {
            id: 'cos-nonrecurring',
            label: 'Cost of Sales Non-recurring',
            kind: 'line',
            depth: 2,
            values: v(6120, 6380, 6290, 6510, 6640, 6720, 38660),
          },
          {
            id: 'total-direct-cos',
            label: 'Total Direct COS',
            kind: 'subtotal',
            depth: 2,
            values: v(15960, 16590, 16410, 16950, 17260, 17500, 100670),
          },
        ],
      },
      {
        id: 'operational-cos',
        label: 'Operational COS',
        kind: 'line',
        depth: 1,
        values: v(1840, 1910, 1880, 1950, 1980, 2010, 11570),
      },
      {
        id: 'total-cos',
        label: 'Total Cost of Sales',
        kind: 'subtotal',
        depth: 1,
        values: v(17800, 18500, 18290, 18900, 19240, 19510, 112240),
      },
    ],
  },
  {
    id: 'total-gross-profit',
    label: 'Total Gross Profit',
    kind: 'total',
    depth: 0,
    values: v(38620, 40135, 39790, 40980, 41825, 42555, 243905),
  },
  {
    id: 'gross-profit-pct',
    label: 'Gross Profit %',
    kind: 'percent',
    depth: 0,
    values: v(68.5, 68.4, 68.4, 68.4, 68.5, 68.5, 68.5),
  },
] as const;

export function formatPlAmount(value: number | null, kind: PlRowKind): string {
  if (value === null) return '';
  if (kind === 'percent') return `${value.toFixed(1)}%`;
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString('en-US', { maximumFractionDigits: 0 });
  return value < 0 ? `($${formatted})` : `$${formatted}`;
}

const MONTH_KEYS: readonly PlPeriodKey[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];

/** Six-month shape for inline spark bars — no extra columns */
export function plMonthTrend(values: PlValues): readonly number[] {
  return MONTH_KEYS.map((key) => values[key]).filter((n): n is number => n !== null);
}
