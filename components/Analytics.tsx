
import Router from 'next/router';
import { BACKEND_URL } from '../config/client';

const oldOnRouteChange = Router.onRouteChangeComplete;

Router.onRouteChangeComplete = (url: string) => {
  if (typeof oldOnRouteChange === 'function') {
    oldOnRouteChange(url);
  }

  if (window.analytics) {
    window.analytics.reset();
    window.analytics.page();
  }
};

export const AnalyticsHeadScript = () => (
  <script src={`${BACKEND_URL}/static/vendor/segment.js`} />
);
