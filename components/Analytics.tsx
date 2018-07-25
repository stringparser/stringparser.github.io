
import Router from 'next/router';
import { BACKEND_URL } from '../config/client';

const oldOnRouteChange = Router.onRouteChangeComplete;

Router.onRouteChangeComplete = (url: string) => {
  if (typeof oldOnRouteChange === 'function') {
    oldOnRouteChange(url);
  }

  if (window.analytics) {
    window.analytics.page(document.title, {
      url: window.location.href,
      path: Router.pathname,
      title: document.title,
      referrer: document.referrer,
    });
  }
};

export const AnalyticsHeadScript = () => (
  <script src={`${BACKEND_URL}/static/vendor/segment.js`} />
);
