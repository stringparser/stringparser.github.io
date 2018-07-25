import { BACKEND_URL } from '../config/client';

export const AnalyticsHeadScript = () => (
  <script
    src={`${BACKEND_URL}/static/vendor/segment.js`}
    defer={true}
  />
);
