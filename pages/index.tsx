import styled from 'styled-components';

import Text from '../components/Text';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import { BR } from '../components/Spacing';
import Section from '../components/Section';
import { H1, H2, H3 } from '../components/Heading';
import TriangleDownIcon from '../components/TriangleDownIcon';
import { columns, list, align, bgImage, forMedia } from '../components/mixins';

const onMailto = (href: string) => () => window.location.assign(href);

const Button = styled.button`
  apperance: none;

  border: 1px solid rgba(0,0,0,0.7);
  border-radius: 4px;
  background-color: transparent;
`;

const Hightlight = styled.span`
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(255, 255, 255, 0.6);
`;

const SectionIcon = () => (
  <Layer mixins={[align('center')]}>
    <TriangleDownIcon />
  </Layer>
);

const IndexPage: React.SFC = () => (
  <Layout>
    <Section variation="primary" background="/static/video/typing-on-computer.mp4">
      <BR height={4} />
      <H1>
        I’m <Hightlight>Javier</Hightlight>, freelance Software Engineer
      </H1>
      <Text>
      {`
        Focusing in front-end, with experience \
        coding back-end services and setting up infrastructure.
      `}
      </Text>
    </Section>
    <Section id="services" variation="info">
      <Layer mixins={[align('t-center')]}>
        <H2>
          SERVICES
        </H2>
        <SectionIcon />
        <BR height={2} />
        <Layer mixins={[list(), columns()]}>
          <Card>
            <H3>Definition</H3>
            <BR />
            <Text>
            {`
              Project definition and planning. We’ll explore solutions \
              to the problem at hand and build implementation paths so \
              you can choose better.
            `}
            </Text>
          </Card>
          <Card>
            <H3>Creation</H3>
            <BR />
            <Text>
            {`
              You have a fleshed out product, prototype, feature or \
              story and now its time to make it happen. Great! We’ll \
              review it together and get started.
            `}
            </Text>
          </Card>
          <Card>
            <H3>Research</H3>
            <BR />
            <Text>
            {`
              Performance issues that have been lingering for a while? \
              Is there an application area that you want to explore? \
              Nice, let’s talk!
            `}
            </Text>
          </Card>
        </Layer>
      </Layer>
    </Section>

    <Section id="contact">
      <Layer
        mixins={[
          align('t-center'),
          columns('auto'),
        ]}
      >
        <Layer
          mixins={[
            'margin: 0 auto; width: 180px; height: 180px;',
            bgImage('/static/img/chip.svg'),
          ]}
        />
        <Layer mixins={['max-width: 420px;', align('v-center')]}>
          <H2>
            CONTACT
          </H2>
          <Text>
            You can contact me through{' '}
            <Button onClick={onMailto('mailto:stringparser@gmail.com')}>
              email
            </Button>{' '}
            or find me as @stringparser in{' '}
            <a href="https://www.linkedin.com/in/stringparser">
              linkedin
            </a>,{' '}
            <a href="https://twitter.com/stringparser">
              twitter
            </a>{' '}
            or{' '}
            <a href="https://github.com/stringparser">
              github
            </a>{' '}
          </Text>
        </Layer>
      </Layer>
    </Section>
  </Layout>
);

export default IndexPage;
