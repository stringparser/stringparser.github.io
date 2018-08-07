
const { technologies } = require('@stringparser/cv');

exports = module.exports = {
  PHONE: '004917630139466',
  EMAIL: 'stringparser@gmail.com',
  GITHUB_URL: 'https://github.com/stringparser',
  TWITTER_URL: 'https://twitter.com/stringparser',
  BACKEND_URL: process.env.NODE_ENV === 'production'
    ? 'https://www.jacami.co'
    : '',
  LINKEDIN_URL: 'https://www.linkedin.com/in/stringparser',
  META_KEYWORDS: ['software', 'engineer'].concat(...technologies).join(', ').toLowerCase(),
};
