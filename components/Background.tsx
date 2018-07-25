import styled from 'styled-components';

import { zIndex, colors } from './theme';
import { BACKEND_URL } from '../config/client';

export type BackgroundProps = {
  color?: string;
  image?: string;
  video?: string;
  position?: React.CSSProperties['backgroundPosition'];
};

const sharedStyles = `
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  width: auto;
  height: auto;
  overflow: hidden;
  min-width: 100%;
  min-height: 100%;
`;

const BackgroundVideo: React.SFC<BackgroundProps> = ({ video, image }) => (
  <div>
    <video
      src={video}
      loop={true}
      muted={true}
      autoPlay={true}
    />
    <style jsx>
      {`
        video {
          ${sharedStyles}
          z-index: ${zIndex.background};
        }
      `}
    </style>
  </div>
);

const BackgroundImage: React.SFC<BackgroundProps> = ({ image, position }) => (
  <div>
    <style jsx>
      {`
        ${sharedStyles}
        z-index: ${zIndex.background};
        background: url('${image}') center center no-repeat;
        background-size: cover;
        ${position
          ? `background-position: ${position};`
          : ''
        }
      `}
    </style>
  </div>
);

const BackgroundColor: React.SFC<BackgroundProps> = ({ color }) => (
  <div>
    <style jsx={true}>
      {`
        ${sharedStyles}
        z-index: ${zIndex.background + 1};
        background-color: ${color};
      `}
    </style>
  </div>
);

export const parseBackgroundAsString = (input: string) => ({
  color: /mp\d$/.test(input) ? colors.dim : undefined,
  image: /mp\d$/.test(input) ? undefined : input,
  video: /mp\d$/.test(input) ? input : undefined,
});

const BackgroundContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex.background};
  position: absolute;
  overflow: hidden;
`;

const Background: React.SFC<BackgroundProps> = ({
  color,
  video,
  image,
  position,
}) => (
  <BackgroundContainer>
    {video && <BackgroundVideo video={`${BACKEND_URL}${video}`} />}
    {image && <BackgroundImage image={`${BACKEND_URL}${image}`} position={position} />}
    {color && <BackgroundColor color={color} />}
  </BackgroundContainer>
);

export default Background;
