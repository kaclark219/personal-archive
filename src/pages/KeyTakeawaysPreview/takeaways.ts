export type Takeaway = {
  id: string;
  number: string;
  label: string;
  leadIn: string;
  body: string;
};

/**
 * Poster-ready Key Takeaways copy (shared across all three drafts).
 * Distilled from the thesis conclusions on parameterized style space,
 * evaluation results, and limitations / future work.
 */
export const TAKEAWAYS: Takeaway[] = [
  {
    id: "style-space",
    number: "01",
    label: "Style Space",
    leadIn: "Interpretable style space.",
    body: "Familiar artistic properties map onto Gaussian rendering parameters and can be manipulated predictably—without reference images or scene retraining.",
  },
  {
    id: "validated",
    number: "02",
    label: "Validated",
    leadIn: "Predictable & recognizable.",
    body: "Controls responded consistently across three scenes and nine viewpoints; VLM judges preferred the designated style match in 94.4% of pairwise comparisons.",
  },
  {
    id: "foundation",
    number: "03",
    label: "Foundation",
    leadIn: "Foundation, not finished.",
    body: "Editable Gaussian marks enable controllable 3D stylization, but global controls limit composition—localized, scene-aware strokes are the next step.",
  },
];

export const ADHERENCE_STAT = {
  percent: "94.4%",
  detail: "VLM pairwise preference",
};
