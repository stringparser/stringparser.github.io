
import Text from '../components/Text';
import { H2 } from '../components/Heading';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Background from '../components/Background';
import { colors } from '../components/theme';

const IndexPage: React.SFC = () => (
  <Layout>
    <Navbar />
    <Section type="primary">
      <Text>
        I’m Javier, freelance Software Engineer.
      </Text>
      <H2>
        Let's build something together
      </H2>
      <Background
        color={colors.dimmer}
        video="/static/video/typing-on-computer.mp4"
      />
    </Section>
    <Section>
      <H2>
        I focus on front-end software
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
