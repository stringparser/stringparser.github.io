import styled from 'styled-components';
import * as cv from '@stringparser/cv/src/config';

import Page from '../components/Page';
import Text from '../components/Text';
import Layer from '../components/Layer';
import { HR } from '../components/Spacing';
import Section from '../components/section/Section';
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

      & > *:first-child {
        flex: 1;
      }

      & > *:not(:first-child) {
        flex: 2;
      }

      ul {
        margin: 0;
        padding: 0;
        margin-left: 1.5rem;
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
  <Page title="Fint out what I've been up to">
    <Section
      variation="primary"
      background="/static/img/laptop-pen-notebook.jpg"
      nextSectionLink="#cv"
    >
      <Background color="rgba(0,0,0,0.6)" />

      <Layer mixins={[align('t-center')]}>
        <H1>
          CV
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

        <br />

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
      <H3>
        Technologies
      </H3>

      <br />

      <UL>
        {cv.technologies
          .map((el, index) => <li key={index}>{el}</li>)
        }
      </UL>
    </Section>

    <Section mixins={resumeSectionStyles}>
      <H3>
        Experience
      </H3>

      <br />

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

            {el.company && el.companyLink && (
              <Text>
                {el.appName && 'On '}
                {el.appName && el.appLink && (
                  <a href={el.appLink}>{el.appName}</a>
                )}
                {el.appLink ? ' for ' : 'For '}
                {el.companyLink && <a href={el.companyLink}>{el.company}</a>}
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
    </Section>

    <Section mixins={resumeSectionStyles}>
      <H3>
        Education
      </H3>

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
    </Section>
  </Page>
);

export default ResumePage;
