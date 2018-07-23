import Link from 'next/link';

import Button from './Button';
import { EMAIL, BACKEND_URL } from '../../config/client.js';

const onMailto = (href: string) => () => window.location.assign(href);

const EmailMeButton: React.SFC = () => (
  <Link href={`${BACKEND_URL}/contact`}>
    <Button variation="inline" onClick={onMailto(`mailto:${EMAIL}`)}>
      email
    </Button>
  </Link>
);

export default EmailMeButton;
