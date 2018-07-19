import Text from '../components/Text';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import { H2 } from '../components/Heading';
import Section from '../components/Section';
import Background from '../components/Background';
import { columns, content, align } from '../components/mixins';

export default () => (
  <Layout>
    <Section>
      <Layer mixins={[columns()]}>
        <Layer mixins={[content('420px'), align('center')]}>
          <H2>I thrive finding a path to bring ideas to life</H2>
          <Text>
            {`
            I studied Physics, so it always has been a passion for me \
            to understand complex systems and find solutions that work.
          `}
          </Text>
        </Layer>
        <Layer>
          <Background
            image="/static/img/fractal-canopy.svg"
            position="top"
          />
        </Layer>
      </Layer>
    </Section>
    <Section>
      My background is in Physics, I've studied it in{' '}
      <a href="//www.ugr.es">Granada</a> (Spain) and in{' '}
      <a href="//www.lmu.de">Munich</a> (Germany).{' '}
      I like to solve problems, the simpler the better.{' '}
      I'm from a <a href="//goo.gl/maps/pNam2Bxtsyw">tiny town in Jaén</a> (Spain).{' '}
      I like talking with people. I have had 3 bands in Granada for which{' '}
      I made some songs and sing. The first contact I had with web development{' '}
      was around winter 2012. Started with <a href="//nodejs.org">node</a> which led to{' '}
      <a href="//github.com/strongloop/express">express</a>,{' '}
      <a href="//github.com/jadejs/jade">jade</a> and{' '}
      <a href="//mongodb.org/">mongodb</a>, moved to{' '}
      <a href="//github.com/meteor/meteor">meteor</a>{' '}
      after which I wanted to really learn something from the ground up so{' '}
      I looked around and found <a href="//facebook.github.io/react">React</a>,
      <a href="//github.com/faye/faye">faye</a> and{' '}
      <a href="//github.com/gulpjs/gulp">gulp</a>.{' '}
      I prefer doing things and then talking about them instead of the other{' '}
      way around. I like kindness and honesty. I believe in patience and hard work.
    </Section>
  </Layout>
);
