import Link from 'next/link';

import Button from './Button';
import { BACKEND_URL } from '../../config/client';

const ContactButton: React.FC = ({ children }) => (
  <Link href={`${BACKEND_URL}/contact`}>
    <Button>
      <b>
        {children || 'GET IN CONTACT'}
      </b>
    </Button>
  </Link>
);

export default ContactButton;
