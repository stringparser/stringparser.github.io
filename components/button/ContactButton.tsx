import Link from 'next/link';

import Layer from '../Layer';
import Button from './Button';
import { align } from '../mixins';

const ContactButton: React.SFC = ({ children }) => (
  <Layer mixins={[align('t-center')]}>
    <Link href="/contact">
      <Button>
        {children || 'GET IN CONTACT'}
      </Button>
    </Link>
  </Layer>
);

export default ContactButton;
