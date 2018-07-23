import Text from '../components/Text';
import Layer from '../components/Layer';
import Image from '../components/layout/Image';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { BR } from '../components/Spacing';
import Highlight from '../components/text/Highlight';
import { H1, H2 } from '../components/Heading';
import { zIndex } from '../components/theme';
import ContactButton from '../components/button/ContactButton';
import ContactSection from '../components/section/ContactSection';
import { align, gutter, forMedia } from '../components/mixins';

export const firstSectionStyles = [
  `
    ${gutter(2)}
    margin: 0 auto;
    text-align: left;
  `,
];

export const twoColumnSectionStyles = [
  `
    display: flex;
    flex-direction: column-reverse;

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
      variation="primary"
      background="/static/video/typing-on-computer.mp4"
      nextSectionLink="/#focus"
    >
      <Layer mixins={firstSectionStyles}>
        <H1>
          I’m <Highlight>Javier</Highlight>,<BR />
          freelance Software Engineer<BR />
          based in Berlin
        </H1>
      </Layer>
    </Section>

    <Section
      id="focus"
      mixins={[`z-index: ${zIndex.navbar};`]}
      nextSectionLink="/#drive"
    >
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={[align('v-center'), gutter()]}>
          <H2>
            Main focus
          </H2>
          <Text>
          {`
            Creating front-end applications for web, \
            mobile or desktop is my main focus and I \
            have experience coding back-end services and \
            setting up infrastructure.
          `}
          </Text>

          <ContactButton />
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

          <ContactButton />
        </Layer>
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            src="/static/img/fractal-canopy.svg"
            dim={200}
          />
        </Layer>
      </Layer>
    </Section>

    <ContactSection id="contact" />
  </Layout>
);

export default IndexPage;
