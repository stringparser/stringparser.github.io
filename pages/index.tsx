
import Text from '../components/Text';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { H1, H2 } from '../components/Heading';

const IndexPage: React.SFC = () => (
  <Layout>
    <Navbar />
    <Section type="primary" background="/static/video/typing-on-computer.mp4">
      <H1>
        I’m Javier, freelance Software Engineer.
      </H1>
    </Section>
    <Section>
      <H2>
        I focus on front-end development
      </H2>
      <Text>
      {`
        And I have experience writing back-end services \
        and setting up infrastructure.
      `}
      </Text>
    </Section>
  </Layout>
);

export default IndexPage;
