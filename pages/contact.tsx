import Layout from '../components/Layout';
import Section from '../components/Section';

import { EMAIL, LINKEDIN_URL, TWITTER_URL, GITHUB_URL } from '../config/client';

import Text from '../components/Text';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Image from '../components/layout/Image';
import { BR } from '../components/Spacing';
import Background from '../components/Background';
import { H2, H3 } from '../components/Heading';
import { align, list, columns, gutter } from '../components/mixins';

import { twoColumnSectionStyles } from './index';
import EmailMeLink from '../components/link/EmailMeLink';

const ContactPage: React.SFC = () => (
  <Layout>
    <Section variation="primary" background="/static/img/laptop-pen-notebook.jpg">
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('t-center')]}>
        <H2>
          Contact
        </H2>
        <Text>
          Let's team up and build something together.
        </Text>
      </Layer>
    </Section>

    <Section>
      <Layer mixins={[list(), columns()]}>
        <Card href={`mailto:${EMAIL}?subject=Definition, schedule a call`}>
          <H3>Definition</H3>
          <BR height={1} />

          <Text>
            {`
              Project definition and planning. We'll build implementation \
              paths so you can choose better.
            `}
          </Text>

          <BR height={2} />
          <a href="#">
            Schedule a call
          </a>
        </Card>
        <Card href={`mailto:${EMAIL}?subject=Creation, get in touch`}>
          <H3>Creation</H3>
          <BR height={1} />

          <Text>
            {`
              Planning is finished and now its time to make it happen. Great! \
              Let's review it together and get started.
            `}
          </Text>

          <BR height={2} />
          <a href="#">
            Get in touch
          </a>
        </Card>
        <Card href={`mailto:${EMAIL}?subject=Research, let's talk`}>
          <H3>Research</H3>
          <BR height={1} />

          <Text>
            {`
              Performance issues to investigate? \
              Is there an application area that you want to explore?
            `}
          </Text>

          <BR height={2} />
          <a href="#">
            Let's talk
          </a>
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
            src="/static/img/chip.svg"
            dim={200}
          />
        </Layer>
      </Layer>
    </Section>
  </Layout>
);

export default ContactPage;
