// Lightweight analytics event tracking
// Replace with your analytics provider (Mixpanel, Amplitude, PostHog, etc.)

type EventName =
  | "waitlist_opened"
  | "waitlist_submitted"
  | "kit_viewed"
  | "educator_inquiry_submitted"
  | "workshop_request_submitted"
  | "contact_submitted"
  | "page_viewed";

type EventProperties = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: EventName, properties?: EventProperties) {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${event}`, properties);
  }

  // TODO: Replace with your analytics provider
  // Example: posthog.capture(event, properties);
  // Example: mixpanel.track(event, properties);
}
