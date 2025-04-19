export type CellValue = "check" | "cross" | string;

export interface CompareRow {
  type: "row";
  label: string;
  tooltip?: string;
  values: CellValue[];
}

export interface CompareSection {
  type: "section";
  label: string;
}

export type ComparePlansItem = CompareRow | CompareSection;

const defaultTooltip =
  "Native adapter support for Anthropic, Azure OpenAI, Google Generative AI, Groq, LangChain, OpenAI and OpenAI Assistant";

export const comparePlansData: ComparePlansItem[] = [
  {
    type: "section",
    label: "Platform",
  },
  {
    type: "row",
    label: "CoAgents",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "Copilot Actions",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "Authenticated Actions",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "Analytics",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "Voice",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "Teams",
    tooltip: defaultTooltip,
    values: ["cross", "check", "check"],
  },
  {
    type: "row",
    label: "Accessibility",
    values: ["cross", "cross", "check"],
  },
  {
    type: "section",
    label: "Hosting",
  },
  {
    type: "row",
    label: "Self-hosted Runtime",
    tooltip: defaultTooltip,
    values: ["1 Instance", "3 Instances", "Custom"],
  },
  {
    type: "row",
    label: "Cloud Hosted",
    tooltip: defaultTooltip,
    values: ["check", "check", "check"],
  },
  {
    type: "row",
    label: "On prem hosting",
    values: ["cross", "check", "check"],
  },
  {
    type: "section",
    label: "Support",
  },
  {
    type: "row",
    label: "Channel",
    values: ["Discord", "Slack (48 Hour Response)", "Slack (24 Hour SLA)"],
  },
  {
    type: "row",
    label: "Onboarding consultation",
    tooltip: defaultTooltip,
    values: ["cross", "cross", "check"],
  },
];
