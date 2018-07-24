
import Section from './Section';

import { gutter, align } from '../mixins';
import { twoColumnSectionStyles } from '../../pages';
import { LINKEDIN_URL, TWITTER_URL, GITHUB_URL } from '../../config/client';

import Text from '../Text';
import Layer from '../Layer';
import Image from '../layout/Image';
import { H2 } from '../Heading';
import EmailMeLink from '../link/EmailMeLink';

type Props = React.HtmlHTMLAttributes<HTMLElement>;

const ContactSection: React.SFC<Props> = (props) => (
  <Section variation="light" {...props}>
    <Layer mixins={twoColumnSectionStyles}>
      <Layer mixins={[align('v-center'), gutter()]}>
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
          src="/static/img/chip.png"
          dim={200}
        />
      </Layer>
    </Layer>
  </Section>
);

export default ContactSection;
