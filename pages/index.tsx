import Link from 'next/link';

import Card from '../components/Card';
import Layer from '../components/Layer';
import Navbar from '../components/Navbar';
import { BR } from '../components/Spacing';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { H1, H3, H4 } from '../components/Heading';
import { align, bgImage, columns, height, bgColor, color, list } from '../components/mixins';

const sections = [
  {
    id: 'about',
    content: 'About',
  },
  {
    id: 'services',
    content: 'Services',
    cards: [
      {
        name: 'planning',
      },
      {
        name: 'prototyping',
      },
      {
        name: 'feature building',
      },
      {
        name: 'research and optimization',
      },
    ],
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
    <BR />

    <Section id="root" mixins={[height('100vh')]}>
      <Layer mixins={[height('100%'), columns()]}>
        <Layer mixins={[align('v-center')]}>
          <H1>Hi, I'm Javier</H1>
          <H4>Freelance Software Engineer</H4>
        </Layer>
        <Layer mixins={[bgImage('/static/img/m-phones.svg')]} />
      </Layer>
    </Section>

    <Section id="about">
      <H3>About</H3>
      <BR />

      <Layer mixins={[columns()]}>
        <p>{`
          My background is in Physics. I've studied it in Granada, Spain, and in \
          Munich, Germany. I like to solve problems. The simpler the better. \
          I mostly focus in front-end software but I also have experience \
          writing back-end services and setting up infraestructure. \
        `}</p>
      </Layer>
    </Section>

    <Section id="services">
      <H3>Services</H3>
      <BR />

      <Layer mixins={[list(), columns()]}>
        <Card>
          <H4>Definition</H4>
          <p>
          {`
            What are your needs? How should they be implemented? If you come \
            with an idea we'll build a plan that describes proposals for solutions \
            and find their implementation paths so you can choose better. \
          `}
          </p>
        </Card>
        <Card>
          <H4>Adding a new feature, prototype</H4>
          <p>
          {`
            You already know your aim, have it fleshed out and now \
            is time to make it happen. Sure! I can help out. \
            \
            As long as design is on board and we can communicate together.
          `}
          </p>
        </Card>
        <Card>
          <H4>Analysis, research and optimization</H4>
          <p>{`
            Need to setup monitoring? \
            You want to research paths that have been lingering \
            for a while but there hasn't been time yet for it? \
            Is it there some noticeable problems with performance you \
            want to inspect and fix?
          `}</p>
        </Card>
      </Layer>
    </Section>

    <Section>
      <H4>Contact</H4>
      <BR />

    </Section>
  </Layout>
);

export default IndexPage;
