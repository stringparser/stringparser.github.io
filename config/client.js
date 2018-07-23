
exports = module.exports = {
  PHONE: '004917630139466',
  EMAIL: 'stringparser@gmail.com',
  GITHUB_URL: 'https://github.com/stringparser',
  TWITTER_URL: 'https://twitter.com/stringparser',
  LINKEDIN_URL: 'https://www.linkedin.com/in/stringparser',
  BACKEND_URL: process.env.NODE_ENV === 'production'
    ? 'https://stringparser.github.io/stringparser.co'
    : ''
};
