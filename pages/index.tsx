import Link from 'next/link';

import Layer from '../components/Layer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { H1, H3 } from '../components/Heading';
import { color, align } from '../components/mixins';

const sections = [
  {
    id: 'about',
    content: 'About',
  },
  {
    id: 'services',
    content: 'Services',
  },
  {
    id: 'contact',
    content: 'Contact',
  },
];

const renderNavbarLink = (section, index: number) => (
  <Link key={index} href={`/#${section.id}`}>
    {section.content}
  </Link>
);

const IndexPage = () => (
  <Layout>
    <Navbar>
      {sections.map(renderNavbarLink)}
    </Navbar>
    <Layer mixins={[align('v-center')]}>
      <Section>
        <H1>Javier Carrillo Milla</H1>
        <Layer mixins={[color('dim')]}>
          <H3>Freelance Software Engineer</H3>
        </Layer>
      </Section>
    </Layer>
  </Layout>
);

export default IndexPage;
