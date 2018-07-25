
import Router from 'next/router';
import { BACKEND_URL } from '../config/client';

let isFirstCall = false;
const oldOnRouteChange = Router.onRouteChangeComplete;

Router.onRouteChangeComplete = (url: string) => {
  if (typeof oldOnRouteChange === 'function') {
    oldOnRouteChange(url);
  }

  if (!window.analytics) {
    return;
  }

  if (!isFirstCall && window.analytics.initialize) {
    isFirstCall = true;
    window.analytics.initialize();
  }

  window.analytics.page();
};

export const AnalyticsHeadScript = () => (
  <script src={`${BACKEND_URL}/static/vendor/segment.js`} />
);
