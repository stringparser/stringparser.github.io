import Text from '../components/Text';
import Card from '../components/Card';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Background from '../components/Background';
import { H2, H3 } from '../components/Heading';
import { align, list, columns } from '../components/mixins';

const ContactPage = () => (
  <Layout>
    <Section variation="primary" background="/static/img/laptop-pen-notebook.jpg">
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('t-center')]}>
        <H3>
          Reach out and say hello
        </H3>
        <H2>
          SERVICES
        </H2>
        <Layer mixins={[list(), columns()]}>
          <Card>
            <H3>Definition</H3>
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
            <Text>
              {`
              You have a fleshed out product, prototype, feature or \
              story and now its time to make it happen. Let's \
              review it together and get started.
            `}
            </Text>
          </Card>
          <Card>
            <H3>Research</H3>
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
  </Layout>
);

export default ContactPage;
