import styled from 'styled-components';
import * as cv from '@stringparser/cv';

import Text from '../components/Text';
import Layer from '../components/Layer';
import Layout from '../components/Layout';
import { HR } from '../components/Spacing';
import Section from '../components/Section';
import Background from '../components/Background';
import { H1, H4, H3 } from '../components/Heading';
import DownloadResume from '../components/button/DownloadResume';
import { breakpoints } from '../components/theme';
import { align, forMedia } from '../components/mixins';

const resumeSectionStyles = [
  `
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: ${breakpoints.tablet};
    background-color: snow;

    ${forMedia('tablet', `
      flex-direction: row;
      justify-content: space-between;

      & > *:first-child {
        flex: 1;
      }

      & > *:not(:first-child) {
        flex: 2;
      }

      ul {
        margin: 0;
        padding: 0;
      }
    `)}

    h2 {
      margin-bottom: 2rem;
    }

    h3 {
      margin: 0;
    }

    p {
      margin-top: 0;
    }
  `,
];

const UL = styled<{ isUnstyled?: boolean; }, 'ul'>('ul')`
  ${({ isUnstyled }) => isUnstyled && `
    padding: unset;
    list-style-type: none;
  `}
`;

const ResumePage: React.SFC = () => (
  <Layout>
    <Section
      variation="primary"
      background="/static/img/laptop-pen-notebook.jpg"
      nextSectionLink="#cv"
    >
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('t-center')]}>
        <H1>
          Resume
        </H1>
        <Text>
          Find out what I've been up to.
        </Text>
        <DownloadResume />
      </Layer>
    </Section>

    <Section
      id="cv"
      mixins={resumeSectionStyles}
    >
      <Layer>
        <H3>
          Languages
        </H3>
      </Layer>
      <Layer>
        <UL>
          {cv.languages
            .map((el, index) =>
              <li key={index}>{el.name}: {el.level}</li>
            )
          }
        </UL>
      </Layer>
    </Section>

    <Section mixins={resumeSectionStyles}>
      <Layer>
        <H3>
          Technologies
        </H3>
      </Layer>
      <Layer>
        <UL>
          {cv.technologies
            .map((el, index) => <li key={index}>{el}</li>)
          }
        </UL>
      </Layer>
    </Section>

    <Section mixins={resumeSectionStyles}>
      <Layer>
        <H3>
          Experience
        </H3>
      </Layer>
      <Layer>
        <UL isUnstyled={true}>
        {cv.experience.map((el, index) => {
          return (
            <li key={index}>
              <Text>
                {el.duration} ({el.location})
              </Text>
              <H4>
                {el.title}
              </H4>
              {el.link && (
                <Text>
                  {el.link && 'For '}
                  {el.link && <a href={el.link}>{el.company}</a>}
                </Text>
              )}

              {(el.description || '')
                .trim()
                .split('\n')
                .map((line, jndex) => <Text key={jndex}>{line}</Text>)
              }
              <br />
            </li>
          );
        })}
        </UL>
      </Layer>
    </Section>

    <Section mixins={resumeSectionStyles}>
      <Layer>
        <H3>
          Education
        </H3>
      </Layer>
      <Layer>
        <UL isUnstyled={true}>
          {cv.education.map((el, index) => {
            return (
              <li key={index}>
                <Text>
                  {el.duration} at {el.location}
                </Text>
                <H4>
                  {el.title}
                </H4>
                <br />
                {(el.description || '')
                  .trim()
                  .split('\n')
                  .map((line, jndex) =>
                    <Text key={jndex}>
                      {line}
                    </Text>
                  )
                }
                <br />
              </li>
            );
          })}
          <li>
            <HR />
            <Text>
              UGR: University of Granada <br />
              LMU: Ludwig-Maximilians-Universität <br />
              CPM: Conservatorio Profesional de Música
            </Text>
          </li>
        </UL>
      </Layer>
    </Section>
  </Layout>
);

export default ResumePage;
