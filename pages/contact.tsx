import Layout from '../components/Layout';
import Section from '../components/Section';

import { EMAIL, LINKEDIN_URL, TWITTER_URL, GITHUB_URL } from '../config/client';

import Text from '../components/Text';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Image from '../components/layout/Image';
import { BR } from '../components/Spacing';
import Background from '../components/Background';
import { H2, H3, H1 } from '../components/Heading';
import { align, list, columns, gutter } from '../components/mixins';

import { twoColumnSectionStyles } from './index';
import EmailMeLink from '../components/link/EmailMeLink';

const ContactPage: React.SFC = () => (
  <Layout>
    <Section
      variation="primary"
      background="/static/img/red-phone.jpg"
      backgroundPosition="top center"
      nextSectionLink="#services"
    >
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('t-center')]}>
        <H1>
          Contact
        </H1>
        <Text>
          Let's team up and build something together.
        </Text>
      </Layer>
    </Section>

    <Section id="services">
      <Layer mixins={[align('center')]}>
        <H2>
          Services
        </H2>
        <BR height={2} />
      </Layer>
      <Layer mixins={[list(), columns()]}>
        <Card href={`mailto:${EMAIL}?subject=Definition, schedule a call`}>
          <H3>Definition</H3>
          <BR />

          <Text>
            Project definition and planning. We'll build implementation{' '}
            paths so you can choose better.
          </Text>

          <BR height={1} />
          <a href="#">Schedule a call</a>
        </Card>
        <Card href={`mailto:${EMAIL}?subject=Creation, get in touch`}>
          <H3>Creation</H3>
          <BR />

          <Text>
            Planning finished and now is time to write code. Great!{' '}
            Let's review it together and get started.
          </Text>

          <BR height={1} />
          <a href="#">Get in touch</a>
        </Card>
        <Card href={`mailto:${EMAIL}?subject=Research, let's talk`}>
          <H3>Research</H3>
          <BR />

          <Text>
            Is there any performance issues or an application area{' '}
            you want to investigate?
          </Text>

          <BR height={1} />
          <a href="#">Let's talk</a>
        </Card>
      </Layer>
    </Section>

    <Section variation="light">
      <Layer mixins={twoColumnSectionStyles}>
        <Layer mixins={['flex: 2;', gutter()]}>
          <H2>
            Say hello
          </H2>

          <Text>
            You can always send me an <EmailMeLink /> or message me via{' '}
            <a href={LINKEDIN_URL}>linkedin</a>,{' '}
            <a href={TWITTER_URL}>twitter</a> or{' '}
            <a href={GITHUB_URL}>github</a>.
          </Text>
        </Layer>
        <Layer mixins={[align('center'), gutter()]}>
          <Image
            dim={200}
            src="/static/img/chip.svg"
          />
        </Layer>
      </Layer>
    </Section>
  </Layout>
);

export default ContactPage;
