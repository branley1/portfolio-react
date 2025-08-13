// Lazy Google Analytics helpers to avoid including GA in the initial bundle

export type GaEvent = {
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
};

export async function trackEvent(event: GaEvent): Promise<void> {
  try {
    const mod: any = await import('react-ga4');
    const ReactGA = mod.default || mod;
    ReactGA.event(event);
  } catch {
    // ignore analytics errors
  }
}

export async function trackPageview(path: string): Promise<void> {
  try {
    const mod: any = await import('react-ga4');
    const ReactGA = mod.default || mod;
    ReactGA.send({ hitType: 'pageview', page: path });
  } catch {
    // ignore analytics errors
  }
}


