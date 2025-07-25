declare global {
  interface Window {
    fbq: any;
  }
}

export const trackDemoClick = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Demo Request',
      content_category: 'Demo',
    });
  }
}; 