import Link from 'next/link';

import Button from './Button';
import { EMAIL } from '../../config/client';

const onMailto = (href: string) => () => window.location.assign(href);

const EmailMeButton: React.SFC = () => (
  <Link href="/contact">
    <Button variation="inline" onClick={onMailto(`mailto:${EMAIL}`)}>
      email
    </Button>
  </Link>
);

export default EmailMeButton;
