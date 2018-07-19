import styled from 'styled-components';

import Text from '../components/Text';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import Image from '../components/layout/Image';
import { BR } from '../components/Spacing';
import Section from '../components/Section';
import Highlight from '../components/text/Highlight';
import { H1, H2 } from '../components/Heading';
import { align, gutter, forMedia } from '../components/mixins';

const onMailto = (href: string) => () => window.location.assign(href);

const Button = styled.button`
  apperance: none;

  border: 1px solid rgba(0,0,0,0.7);
  border-radius: 4px;
  background-color: transparent;
`;

const firstSectionStyles = forMedia('tablet', `
  margin: 0 auto;
  max-width: 420px;
`);

const twoColumnSectionStyles = [
  `
    display: flex;
    flex-direction: column;

    & > * {
      flex: 1;
    }
  `,
  forMedia('tablet', `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `),
];

const IndexPage: React.SFC = () => (
  <Layout>

    <Section
      mixins={[firstSectionStyles]}
      variation="primary"
      background="/static/video/typing-on-computer.mp4"
      nextSectionLink="/#focus"
    >
      <H1>
        I’m <Highlight>Javier</Highlight>, freelance Software Engineer
      </H1>
    </Section>

    <Section
      id="focus"
      nextSectionLink="/#drive"
    >
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={[align('v-center'), gutter()]}>
          <H2>
            Main focus
          </H2>
          <Text>
          {`
            I focus in creating front-end client apps for web, \
            mobile or desktop. I also have experience coding back-end services and \
            setting up infrastructure. If you need a site that looks good and \
            works, this is the place.
          `}
          </Text>

          <Layer>
            <Button>
              Reach out
            </Button>
          </Layer>
        </Layer>
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            src="/static/img/frontend-dev-icon.png"
            dim={150}
          />
        </Layer>
      </Layer>
    </Section>

    <Section
      id="drive"
      variation="info"
      nextSectionLink="/#contact"
    >
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={[align('v-center'), gutter()]}>
          <H2>
            I thrive finding a path to bring ideas to life
          </H2>
          <Text>
          {`
            I studied Physics, so it always has been a passion for me \
            to understand complex systems and find solutions that work.
          `}
          </Text>
        </Layer>
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            src="/static/img/fractal-canopy.svg"
            dim={200}
          />
        </Layer>
      </Layer>
    </Section>

    <Section id="contact">
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={[align('v-center'), gutter()]}>
          <H2>
            Contact
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
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            src="/static/img/chip.svg"
            dim={200}
          />
        </Layer>
      </Layer>
    </Section>
  </Layout>
);

export default IndexPage;
