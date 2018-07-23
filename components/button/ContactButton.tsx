import Link from 'next/link';

import Button from './Button';
import { BACKEND_URL } from '../../config/client';

const ContactButton: React.SFC = ({ children }) => (
  <Link href={`${BACKEND_URL}/contact`}>
    <Button>
      <b>
        {children || 'GET IN CONTACT'}
      </b>
    </Button>
  </Link>
);

export default ContactButton;
