import Text from '../components/Text';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import { BR } from '../components/Spacing';
import Section from '../components/Section';
import { H1, H2, H3 } from '../components/Heading';
import { columns, list } from '../components/mixins';
import Footer from '../components/Footer';

const onMailto = (href: string) => () => window.location.assign(href);

const IndexPage: React.SFC = () => (
  <Layout>
    <Navbar />

    <Section variation="primary" background="/static/video/typing-on-computer.mp4">
      <H1>
        I’m Javier, freelance Software Engineer.
      </H1>
      <Text>
      {`
        Focusing in front-end, with experience \
        coding back-end services and setting up infrastructure.
      `}
      </Text>
    </Section>
    <Section id="services" variation="info">
      <H2>
        Services
      </H2>
      <BR />
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
            You want to look into improvements that have been lingering \
            for a while. Are there noticeable performance issues you want \
            to inspect and fix? Is there an application area that triggers \
            your interest and want to explore? Nice, let’s talk!
          `}
          </Text>
        </Card>
      </Layer>
    </Section>

    <Section id="contact">
      <H2>
        Contact
      </H2>
      <Text>
        You can message me through{' '}
        <button type="button" onClick={onMailto('mailto:stringparser@gmail.com')}>
          email
        </button>{' '}
        or as @stringparser in{' '}
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
    </Section>

    <Footer />
  </Layout>
);

export default IndexPage;
