import { EMAIL } from '../../config/client';

export function handleMailToLink(href: string) {
  return function onClick(ev: React.SyntheticEvent<any>) {
    ev.preventDefault();
    window.open(href, '_blank');
  }
}

const EmailMeLink: React.FC = () => (
  <a onClick={handleMailToLink(`mailto:${EMAIL}`)}>
    email
  </a>
);

export default EmailMeLink;
