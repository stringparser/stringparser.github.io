import { zIndex, colors } from './theme';

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
  content: '';
  overflow: hidden;
  position: absolute;
`;

const BackgroundVideo: React.SFC<BackgroundProps> = ({ video, image }) => (
  <div>
    <video
      src={video}
      loop={true}
      muted={true}
      poster={image}
      autoPlay={true}
    />
    <style jsx={true}>
      {`
        ${sharedStyles}
        z-index: ${zIndex.background};
      `}
    </style>
  </div>
);

const BackgroundImage: React.SFC<BackgroundProps> = ({ image, position }) => (
  <div>
    <style jsx={true}>
      {`
        ${sharedStyles}
        z-index: ${zIndex.background + 1};
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
        z-index: ${zIndex.background + 2};
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

const Background: React.SFC<BackgroundProps> = ({
  color,
  video,
  image,
  position,
}) => (
  <>
    {video && <BackgroundVideo video={video} />}
    {image && <BackgroundImage image={image} position={position} />}
    {color && <BackgroundColor color={color} />}
  </>
);

export default Background;
