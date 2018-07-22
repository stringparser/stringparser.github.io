import Link from 'next/link';

import Button from './Button';

const ContactButton: React.SFC = ({ children }) => (
  <Link href="/contact">
    <Button>
      {children || 'GET IN CONTACT'}
    </Button>
  </Link>
);

export default ContactButton;
