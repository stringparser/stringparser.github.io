import Page from '../components/Page';
import Text from '../components/Text';
import Layer from '../components/Layer';
import { H1 } from '../components/Heading';
import Section from '../components/section/Section';
import Background from '../components/Background';
import { breakpoints } from '../components/theme';
import { align, gutter } from '../components/mixins';

const AboutContent = () => (
  <Layer mixins={[gutter(2)]}>
    <Text>
      I'm currently focused on building <a href="https://reactnative.dev/">ReactNative</a> applications{' '}
      and front-end solutions with <a href="https://reactjs.org/">React.js</a>,{' '}
      <a href="https://redux.js.org/">redux</a> or <a href="https://react-query.tanstack.com/">useQuery</a>{' '}
      and TypeScript. I also have experience on the backend and setting up infrastructure. At the moment I would not mind to do some more backend
      work. Also, learning Rust when I have some spare time. Is very nice. {'\n\n'}
      My background is in Physics, I've studied it in <a href="//www.ugr.es">Granada</a> (Spain){' '}
      and in <a href="//www.lmu.de">Munich</a> (Germany). I like to solve problems, the simpler{' '}
      the solution the better. I'm from a{' '}
      <a href="//goo.gl/maps/pNam2Bxtsyw">tiny town in Jaén</a>{' '}
      (Spain). I like talking with people.{' '}
      I've had 3 bands in Granada for which I made some songs and sing.{' '}
      The first contact I had with web development was in winter 2012. Started with{' '}
      <a href="//nodejs.org">nodejs</a> which led to{' '}
      <a href="//github.com/strongloop/express">express</a>,{' '}
      <a href="//github.com/jadejs/jade">jade</a> and{' '}
      <a href="//mongodb.org/">mongodb</a>, moved to{' '}
      <a href="//github.com/meteor/meteor">meteor</a>{' '}
      after which I wanted to really learn something from the ground up so I looked around and found{' '}
      <a href="//facebook.github.io/react">React</a>,{' '}
      <a href="//github.com/faye/faye">faye</a> and{' '}
      <a href="//github.com/gulpjs/gulp">gulp</a>.{' '}
      I prefer doing things and then talking about them instead of the other way around.{' '}
      I like kindness and honesty. I believe in patience and hard work.
    </Text>
  </Layer>
);

const sectionStyles = [
  `
    ${align('v-center')}

    margin: 0 auto;
    max-width: ${breakpoints.tablet};
  `,
];

const AboutPage: React.FC = () => (
  <Page title="Hey, hi there! Come in">
    <Section
      variation="primary"
      background="/static/img/rotating-sky.jpg"
      nextSectionLink="#me"
    >
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('center')]}>
        <H1>
          About
        </H1>
        <Text>
          Hey, hi there! Come in.
        </Text>
      </Layer>
    </Section>

    <Section id="me">
      <Layer mixins={sectionStyles}>
        <AboutContent />
      </Layer>
    </Section>
  </Page>
);

export default AboutPage;
