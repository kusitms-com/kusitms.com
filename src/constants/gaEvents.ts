export const GA_CTA_EVENTS = {
  onClickNavigationCTA: "click_cta_navigation",
  onClickProjectCardCTA: "click_cta_project_card",
  onClickOutboundCTA: "click_cta_outbound",
} as const;

export type GA_CTA_EVENT = (typeof GA_CTA_EVENTS)[keyof typeof GA_CTA_EVENTS];
