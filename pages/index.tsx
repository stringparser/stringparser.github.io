import Link from 'next/link';

import Card from '../components/Card';
import Text from '../components/Text';
import Layer from '../components/Layer';
import Navbar from '../components/Navbar';
import { BR } from '../components/Spacing';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Section from '../components/Section';
import { forMedia } from '../components/theme';
import { H2, H3, H4 } from '../components/Heading';

import {
  list,
  align,
  gutter,
  bgImage,
  columns,
  bgColor,
} from '../components/mixins';

const mainBGImage = `
  https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
`;

const IndexPage = () => (
  <Layout>

    <Navbar>
      <Link href={`/#services`}>
        <a>Services</a>
      </Link>
      <Link href={`/#contact`}>
        <a>Contact</a>
      </Link>
      <Link href={`/#work`}>
        <a>Work</a>
      </Link>
    </Navbar>

    <Section id="top">
      <Layer mixins={[columns()]}>
        <Layer mixins={[align('v-center'), gutter(2)]}>
          <Layer mixins={[forMedia('desktop', 'display: none')]}>
            <BR />
          </Layer>
          <H2>I'm freelance Software Engineer</H2>
          <Text>
            {`
              My background is in Physics. I focus in front-end software \
              and have experience writing back-end services and setting up \
              infraestructure. I like to solve problems. The simpler the better. \
              I'm based in Berlin.
            `}
          </Text>
        </Layer>
        <Layer
          mixins={[
            bgImage(mainBGImage),
          ]}
        />
      </Layer>
    </Section>

    <Section
      id="services"
      mixins={[
        gutter(2),
        forMedia('phone', gutter(1)),
        bgColor('info'),
      ]}
    >
      <H2>Services</H2>
      <BR />

      <Layer mixins={[list(), columns(2)]}>
        <Card>
          <H3>Definition</H3>
          <Text>
          {`
            What are your needs? How should they be implemented? \
            We'll explore solutions to the problem and build a plan with \
            the implementation paths so you can choose better. \
          `}
          </Text>
        </Card>
        <Card>
          <H3>Project</H3>
          <Text>
          {`
            You know your aim, have it fleshed out and now \
            is time to make it happen. We'll review it together and get started. \
            Wether it is a full project, prototype or feature you are keen to add: I can help. \
          `}
          </Text>
        </Card>
        <Card>
          <H3>
            Research
          </H3>
          <Text>
          {`
            Need to setup monitoring for your application? \
            You want to look into improvements that have been lingering \
            for a while but there hasn't been time yet for it? \
            Is it there some noticeable performance issues you \
            want to inspect and fix?
          `}
          </Text>
        </Card>
      </Layer>
    </Section>

    <Section>
      <Layer mixins={[gutter()]}>
        <H4>Contact</H4>
      </Layer>
    </Section>

    <Footer>
      <Layer mixins={[gutter()]}>
        Footer
      </Layer>
    </Footer>
  </Layout>
);

export default IndexPage;
