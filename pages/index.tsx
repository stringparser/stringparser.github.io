import Page from '../components/Page';
import Text from '../components/Text';
import Layer from '../components/Layer';
import Image from '../components/layout/Image';
import Section from '../components/section/Section';
import Highlight from '../components/text/Highlight';
import { H1, H2 } from '../components/Heading';
import ContactSection from '../components/section/ContactSection';
import { breakpoints } from '../components/theme';
import { align, gutter, forMedia } from '../components/mixins';

export const firstSectionStyles = [
  `
    ${gutter(1)}
    ${align('center')}

    margin: 0 auto;
  `,
];

export const twoColumnSectionStyles = [
  `
    display: flex;
    flex-direction: column-reverse;

    & > * {
      flex: 1;
    }

    margin: 0 auto;
    max-width: ${breakpoints.phone};

  `,
  forMedia('tablet', `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    max-width: ${breakpoints.tablet};
  `),
];

const IndexPage: React.FC = () => (
  <Page title="I'm Javier, freelance Software Engineer">

    <Section
      variation="primary"
      background="/static/video/typing-on-computer.mp4"
    >
      <Layer mixins={firstSectionStyles}>
        <H1>
          I’m <Highlight>Javier</Highlight>, freelance Software Engineer
        </H1>
      </Layer>
    </Section>

    <Section id="focus">
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={[align('v-center'), gutter()]}>
          <H2>
            Main focus
          </H2>
          <Text>
          {`
            I have years of experience coding front-end web and native apps.\n
            Currently, I'm focused building backend applications and learning more about infrastructure.\n
            I studied Physics, so it always has been a passion for me \
            to understand complex systems and find solutions that work.
          `}
          </Text>

          <a href="/contact" style={{marginTop: '2rem', borderRadius: '10px', border: '1px solid transparent', background: '#fbf36d', color: 'rgba(0,0,0,0.8)', textAlign: 'center', padding: '1.25rem 0.5rem', textDecoration: 'none' }}>
              <b>
                GET IN CONTACT
              </b>
          </a>
        </Layer>
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            dim={150}
            src="/static/img/fractal-canopy.png"
          />
        </Layer>
      </Layer>
    </Section>

    <ContactSection id="contact" />
  </Page>
);

export default IndexPage;
