import { EMAIL } from '../../config/client';

const onMailto = (href: string) => () => (
  window.location.assign(`mailto:${href}`)
);

const EmailMeLink: React.SFC = () => (
  <a href="#" onClick={onMailto(EMAIL)}>
    email
  </a>
);

export default EmailMeLink;
