
import { align, forMedia } from './mixins';

const sectionTypes = {
  primary: `
    color: white;
    height: 90vh;
    ${align('center')}
  `,
  secondary: `
    margin: 0 auto;
    padding: 5rem;
    max-width: 40rem;

    ${forMedia('tablet', `
      padding: 2rem;
    `)}
  `,
};

type SectionType = keyof (typeof sectionTypes);

type Props = {
  id?: string;
  type?: SectionType;
  backgroundImage?: string;
};

const Section: React.SFC<Props> = ({
  type = 'secondary',
  backgroundImage,
  children,
  ...props
}) => (
  <section {...props}>
    {children}
    <style jsx={true}>
    {`
      position: relative;
      ${sectionTypes[type] || ''}
    `}
    </style>
  </section>
);

export default Section;
