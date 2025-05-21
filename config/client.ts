
import {technologies} from './cv';

export const PHONE = '004917630139466';
export const EMAIL = 'stringparser@gmail.com';
export const GITHUB_URL = 'https://github.com/stringparser';
export const TWITTER_URL = 'https://twitter.com/stringparser';
export const BACKEND_URL = process.env.NODE_ENV === 'production'
  ? 'https://stringparser.github.io'
  : ''
;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/stringparser';
export const META_KEYWORDS = ['software', 'engineer'].concat(...technologies).join(', ').toLowerCase();
