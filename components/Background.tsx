import { zIndex } from './theme';

type Props = {
  color?: string;
  image?: string;
  video?: string;
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

const BackgroundVideo: React.SFC<Props> = ({ video, image }) => (
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

const BackgroundImage: React.SFC<Props> = ({ image }) => (
  <div>
    <style jsx={true}>
      {`
        ${sharedStyles}
        z-index: ${zIndex.background + 1};
        background: url('${image}') center center no-repeat;
        background-size: cover;
      `}
    </style>
  </div>
);

const BackgroundColor: React.SFC<Props> = ({ color }) => (
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

const Background: React.SFC<Props> = ({ color, video, image }) => (
  <>
    {video && <BackgroundVideo video={video} />}
    {image && <BackgroundImage image={image} />}
    {color && <BackgroundColor color={color} />}
  </>
);

export default Background;
