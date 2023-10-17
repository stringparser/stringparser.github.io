import { EMAIL } from '../../config/client';

const EmailMeLink: React.FC = () => (
  <a href={`mailto:${EMAIL}`}>
    email
  </a>
);

export default EmailMeLink;
