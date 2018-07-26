import 'segment-analytics';

interface Window {
  analytics: AnalyticsJS & {
   initialize(): void;
  };
}
